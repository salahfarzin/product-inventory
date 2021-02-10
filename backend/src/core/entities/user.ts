import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique} from "typeorm";
import {Product} from "./product";
import {UserUpload} from "./user-upload";
import {ProductInventory} from "./product-inventory";

@Entity()
/*@Unique(["email"])*/
export class User {

    @PrimaryGeneratedColumn({type: "bigint"})
    id!: number;

    @Column("varchar")
    name!: string;

    @Column({type: "varchar", nullable: true})
    email!: string;

    @Column("varchar")
    token!: string;

    @Column({type: "text", nullable: true})
    payload!: string;

    @Column("timestamp")
    @CreateDateColumn()
    createdAt!: Date;

    @Column({type: "timestamp", nullable: true})
    updatedAt!: Date;

    @OneToMany(() => Product, product => product.user)
    products!: Product[]

    @OneToMany(() => ProductInventory, product => product.user)
    productInventories!: ProductInventory[]

    @OneToMany(() => UserUpload, userUpload => userUpload.user)
    uploads!: UserUpload[]
}
