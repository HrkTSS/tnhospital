/**
 * @author Harry
 * @email [example@mail.com]
 * @create date 2021-12-31 17:28:24
 * @modify date 2021-12-31 17:28:24
 * @desc [description]
 */

import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrganisationDto {
  @IsNotEmpty()
  name: string;
}
