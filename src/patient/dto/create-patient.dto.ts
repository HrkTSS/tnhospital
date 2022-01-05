/**
 * @author Harry
 * @email [example@mail.com]
 * @create date 2021-12-31 17:27:21
 * @modify date 2021-12-31 17:27:21
 * @desc [description]
 */

import { Type } from 'class-transformer';
import {
  IsDate,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePatientDto {
  @IsNotEmpty()
  @IsPhoneNumber('IN')
  phone: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  street_address: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsNumber()
  @IsNotEmpty()
  pincode: number;

  @IsString()
  @IsNotEmpty()
  @IsEnum(['MALE', 'FEMALE', 'TRANS'])
  gender: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  dob: string;

  // @IsNumber()
  // @IsNotEmpty()
  // organisation_id: number;
}
