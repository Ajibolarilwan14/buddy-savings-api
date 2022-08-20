import { Users } from './User';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Length } from 'class-validator';

@Entity()
export class BuddySavings {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Length(5, 255)
    title: string

    @Column()
        @Length(1, 5)
    no_of_friends: number

    @Column()
    do_you_or_your_buddies_have_a_target: string

    @Column()
    target: number

    @Column()
    plan_to_save: string

    @Column()
    frequency: string

    @Column()
    start_when: string

    @Column()
    how_long_do_you_want_to_save_for: string

    @Column()
    start_date: string

    @Column()
    end_date: string

    @Column()
    relationship_with_buddies: string

    @Column("simple-array")
    buddies: string[]

    @ManyToOne(() => Users, (user) => user.buddySavings)
    users: Users
}