import {
    Column,
    CreateDateColumn,
    Entity, JoinTable,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import {ProductImage} from "./product-image";
import {ProductInventory} from "./product-inventory";
import {User} from "./user";

@Entity()
export class Product {

    @PrimaryGeneratedColumn({type: "bigint"})
    public id!: number;

    @Column("varchar")
    public title!: string;

    @Column("varchar")
    public handle!: string;

    @Column({type: "text"})
    public body!: string;

    @Column("varchar")
    public vendor!: string;

    @Column("varchar")
    public type!: string;

    @Column("varchar")
    public publishedScope!: string;

    @Column("varchar")
    public tags!: string;

    @Column("timestamp")
    @CreateDateColumn()
    createdAt!: Date;

    @Column({type: "timestamp", nullable: true})
    updatedAt!: Date;

    @ManyToOne(() => User, user => user.products)
    @JoinTable()
    public user!: User;

    @OneToMany(() => ProductInventory, inventory => inventory.product)
    public inventories!: ProductInventory[];

    @OneToMany(() => ProductImage, productImage => productImage.product, {
        eager: true,
        cascade: true
    })
    @JoinTable()
    public images!: ProductImage[]
}
