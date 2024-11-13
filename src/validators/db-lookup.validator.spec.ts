import { Test, TestingModule } from '@nestjs/testing';
import { DbLookupValidator } from './db-lookup.validator';
import { EntityManager } from 'typeorm';
import { BadRequestException } from '@nestjs/common';
import { ValidationArguments } from 'class-validator';

describe('DbLookupValidator', () => {
  let validator: DbLookupValidator;
  let entityManager: EntityManager;

  beforeAll(() => {
    process.env.NODE_ENV = 'test';
  });

  afterAll(() => {
    process.env.NODE_ENV = undefined;
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DbLookupValidator,
        {
          provide: EntityManager,
          useValue: {
            getRepository: jest.fn().mockReturnValue({
              metadata: {
                primaryColumns: [{ propertyName: 'id' }],
              },
            }),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    validator = module.get<DbLookupValidator>(DbLookupValidator);
    entityManager = module.get<EntityManager>(EntityManager);
  });

  describe('Numeric Validation', () => {
    it('should validate numeric values when validateNumeric is true', async () => {
      const args = {
        constraints: [{
          type: {},
          validateNumeric: true,
        }],
        value: 'not-a-number',
      };

      await expect(validator.validate('not-a-number', args as any))
        .rejects
        .toThrow(BadRequestException);
    });

    it('should accept valid numeric strings when validateNumeric is true', async () => {
      const args = {
        constraints: [{
          type: {},
          validateNumeric: true,
        }],
        property: 'id',
      };

      jest.spyOn(entityManager, 'findOne').mockResolvedValue({});
      const result = await validator.validate('123', args as any);
      expect(result).toBe(true);
    });

    it('should accept numeric values when validateNumeric is true', async () => {
      const args = {
        constraints: [{
          type: {},
          validateNumeric: true,
        }],
        property: 'id',
      };

      jest.spyOn(entityManager, 'findOne').mockResolvedValue({});
      const result = await validator.validate(123, args as any);
      expect(result).toBe(true);
    });
  });

  describe('String Validation', () => {
    it('should allow string values by default', async () => {
      const args = {
        constraints: [{
          type: {},
        }],
        property: 'code',
      };

      jest.spyOn(entityManager, 'findOne').mockResolvedValue({});
      const result = await validator.validate('string-value', args as any);
      expect(result).toBe(true);
    });

    it('should allow alphanumeric strings when validateNumeric is false', async () => {
      const args = {
        constraints: [{
          type: {},
          validateNumeric: false,
        }],
        property: 'code',
      };

      jest.spyOn(entityManager, 'findOne').mockResolvedValue({});
      const result = await validator.validate('CODE123', args as any);
      expect(result).toBe(true);
    });
  });

  describe('Empty Value Handling', () => {
    it('should handle null values with ignoreEmpty true', async () => {
      const args = {
        constraints: [{
          type: {},
          ignoreEmpty: true,
        }],
      };

      const result = await validator.validate(null, args as any);
      expect(result).toBe(true);
    });

    it('should validate empty values when ignoreEmpty is false', async () => {
      const args = {
        constraints: [{
          type: {},
          ignoreEmpty: false,
        }],
        property: 'id',
      };

      jest.spyOn(entityManager, 'findOne').mockResolvedValue(null);
      const result = await validator.validate(null, args as any);
      expect(result).toBe(false);
    });

    it('should handle undefined with ignoreEmpty true', async () => {
      const args = {
        constraints: [{
          type: {},
          ignoreEmpty: true,
        }],
      };

      const result = await validator.validate(undefined, args as any);
      expect(result).toBe(true);
    });
  });

  describe('Primary Key Lookup', () => {
    it('should handle primary key lookup', async () => {
      const args = {
        constraints: [{
          type: {},
          findOption: 'primary',
        }],
        value: 1,
      };

      jest.spyOn(entityManager, 'findOne').mockResolvedValue({});
      const result = await validator.validate(1, args as any);
      expect(result).toBe(true);
    });

    it('should return false for non-existent primary key', async () => {
      const args = {
        constraints: [{
          type: {},
          findOption: 'primary',
        }],
        value: 999,
      };

      jest.spyOn(entityManager, 'findOne').mockResolvedValue(null);
      const result = await validator.validate(999, args as any);
      expect(result).toBe(false);
    });
  });

  describe('Custom Finder', () => {
    it('should use custom finder function', async () => {
      const customFinder = jest.fn().mockReturnValue({
        where: { customField: 'value' }
      });

      const args = {
        constraints: [{
          type: {},
          findOption: customFinder,
        }],
        value: 'test',
      };

      jest.spyOn(entityManager, 'findOne').mockResolvedValue({});
      await validator.validate('test', args as any);
      expect(customFinder).toHaveBeenCalled();
    });

    it('should handle custom finder errors', async () => {
      const customFinder = jest.fn().mockImplementation(() => {
        throw new Error('Custom finder error');
      });

      const args = {
        constraints: [{
          type: {},
          findOption: customFinder,
        }],
        value: 'test',
      };

      try {
        await validator.validate('test', args as any);
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.message).toContain('Validation failed');
      }
    });
  });

  describe('Error Handling', () => {
    it('should handle database errors', async () => {
      const args = {
        constraints: [{
          type: {},
        }],
        value: 1,
        property: 'id',
      };

      jest.spyOn(entityManager, 'findOne').mockRejectedValue(new Error('DB Error'));

      try {
        await validator.validate(1, args as any);
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.message).toContain('Validation failed');
      }
    });

    it('should provide correct numeric validation error message', async () => {
      const args = {
        constraints: [{
          type: {},
          validateNumeric: true,
        }],
        value: 'invalid',
      };

      try {
        await validator.validate('invalid', args as any);
        fail('Should have thrown an error');
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.message).toContain('must be a valid numeric value');
      }
    });
  });

  describe('Default Message', () => {
    it('should provide appropriate default message', () => {
      const args = {
        value: 'test-value',
      } as ValidationArguments;

      const message = validator.defaultMessage(args);
      expect(message).toContain('test-value');
      expect(message).toContain('not found');
    });
  });
});