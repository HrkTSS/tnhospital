import { Hospital } from 'src/hospital/entities/hospital.entity';
import { Organisation } from 'src/organisation/entities/organisation.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  Bio: string;

  @Column()
  phone: string;

  @Column()
  specialist: string;

  @ManyToOne(() => Organisation, (organisation) => organisation.doctors)
  organisation: Organisation;

  @OneToOne(() => User, (user) => user.doctor)
  user: User;
}
