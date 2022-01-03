/**
 * @author Harry
 * @email [example@mail.com]
 * @create date 2022-01-01 13:43:38
 * @modify date 2022-01-01 13:43:38
 * @desc [description]
 */

import { type } from 'os';
import { Organisation } from 'src/organisation/entities/organisation.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  street_address: string;

  @Column()
  city: string;

  @Column()
  pincode: number;

  @Column()
  gender: string;

  @Column()
  dob: string;

  @Column()
  organisation_id: number;

  @OneToMany(() => Organisation, organisation => organisation.patient)
  organisation: Organisation[];
}

