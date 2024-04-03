import { ValidationArguments, ValidationOptions } from "class-validator";
import { FindManyOptions, FindOneOptions } from "typeorm";

export interface BeginEndDatesConsistentOptions extends ValidationOptions {
  beginDate?: string;
  beginHour?: string;
  beginMinute?: string;
  endDate?: string;
  endHour?: string;
  endMinute?: string;
}

export type BeginEndDatesConsistentFrmOptions =
  Required<BeginEndDatesConsistentOptions> & FrmOptions;

export interface DbLookupOptions {
  type: any;
  findOption: (validationArguments: ValidationArguments) => FindOneOptions;
}

// Base options needed for validators that format their error message with the `CheckCatalog` service.
export interface FrmOptions {
  code: string;
  formatValues: object | ((args: ValidationArguments) => object);
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

export type IsValidCodeFrmOptions = IsValidCodeOptions & FrmOptions;

export interface MinFrmOptions extends FrmOptions {
  minVal: number;
}

export interface MaxFrmOptions extends FrmOptions {
  maxVal: number;
}

export interface MaxLengthFrmOptions extends FrmOptions {
  maxLength: number;
}
