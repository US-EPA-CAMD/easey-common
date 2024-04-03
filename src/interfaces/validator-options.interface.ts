import { ValidationArguments } from "class-validator";
import { FindManyOptions, FindOneOptions } from "typeorm";

export interface DbLookupOptions {
  type: any;
  findOption: (validationArguments: ValidationArguments) => FindOneOptions;
}

// Base options needed for validators that format their error message with the `CheckCatalog` service.
export interface FrmOptions {
  code: string;
  key: string;
}

export interface IsInRangeFrmOptions extends FrmOptions {
  isMaxValValid: boolean;
  isMinValValid: boolean;
  maxVal: number;
  minVal: number;
}

export interface IsValidCodeOptions {
  type: any;
  findOption?: (args: ValidationArguments) => FindManyOptions;
}

export interface MinFrmOptions extends FrmOptions {
  minVal: number;
}

export interface MaxFrmOptions extends FrmOptions {
  maxVal: number;
}
