import { IsBoolean, IsNotEmpty } from 'class-validator';
import { Doctor } from 'src/doctor/entities/doctor.entity';
import { Hospital } from 'src/hospital/entities/hospital.entity';
import {
  Column,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  verified: boolean;

  @Column()
  super_user: boolean;

  @ManyToOne(() => Hospital, (hospital) => hospital.users)
  hospital: Hospital;

  @OneToOne(() => Doctor, (doctor) => doctor.user)
  @JoinColumn()
  doctor: Doctor;
}
