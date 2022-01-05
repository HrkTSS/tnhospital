import { Doctor } from 'src/doctor/entities/doctor.entity';
import { Hospital } from 'src/hospital/entities/hospital.entity';
import { Patient } from 'src/patient/entities/patient.entity';
import { Roles } from 'src/roles/roles.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('organisation')
export class Organisation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Patient, (patient) => patient.organisations)
  patient: Patient[];

  @OneToMany(() => Hospital, (hospital) => hospital)
  hospitals: Hospital[];

  @OneToMany(() => Doctor, (doctor) => doctor.organisation)
  doctors: Doctor[];

  @OneToMany(() => Roles, (roles) => roles.organisation)
  roles: Roles;
}
