import { Organisation } from 'src/organisation/entities/organisation.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity('hospital')
@Unique('hospital_composites', ['name', 'registration_no'])
export class Hospital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  registration_no: string;

  @ManyToOne(() => Organisation, (organisation) => organisation.hospitals)
  organisation: Organisation;

  @OneToMany(() => User, (user) => user.hospital)
  users: User[];
}
