import { type } from 'os';
import { Patient } from 'src/patient/entities/patient.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('organisation')
export class Organisation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Patient, patient => patient.organisation)
  patient: Patient;
}
