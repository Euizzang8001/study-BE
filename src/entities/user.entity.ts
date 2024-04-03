import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm'

@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    image?: string;
    //null값도 가능할 때
    @CreateDateColumn({type: 'date'})
    createdAt: Date;
}