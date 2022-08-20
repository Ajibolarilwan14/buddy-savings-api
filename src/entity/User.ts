import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail, Length } from 'class-validator';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
        @Length(5, 30)
    firstName: string

    @Column()
        @Length(5, 35)
    lastName: string

    @Column()
        @IsEmail()
    email: string

    @Column()
        @Length(8, 255)
    password: string
}
