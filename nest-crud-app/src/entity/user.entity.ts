/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id'
  })
  id: number;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  surname: string;

  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  email: string;
}
