import { Column, Entity } from 'typeorm';

@Entity('users_roles')
export class UsersRole {
  @Column()
  user_id: number;

  @Column()
  role_id: number;
}
