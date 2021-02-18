import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";

@Entity()
export class UserUpload {

    @PrimaryGeneratedColumn({type: "bigint"})
    id!: number;

    @Column("varchar")
    name!: string;

    @Column({type: "varchar", nullable: true})
    size!: string;

    @Column({type: "varchar", nullable: true})
    mimetype!: string;

    @Column("timestamp")
    @CreateDateColumn()
    createdAt!: Date;

    @ManyToOne(() => User, user => user.uploads)
    user!: User
}
