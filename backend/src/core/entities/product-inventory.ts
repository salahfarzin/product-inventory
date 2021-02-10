import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./product";
import {User} from "./user";

@Entity()
export class ProductInventory {

    @PrimaryGeneratedColumn({type: "bigint"})
    public id!: number;

    @Column("varchar")
    public handle!: string;

    @Column("varchar")
    public location!: string;

    @Column("decimal")
    public amount!: number;

    @ManyToOne(() => Product, product => product.handle)
    public product!: Product;

    @ManyToOne(() => User, user => user.productInventories)
    public user!: User;
}
