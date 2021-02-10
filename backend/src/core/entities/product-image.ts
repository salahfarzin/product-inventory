import {Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./product";

@Entity()
export class ProductImage {

    @PrimaryGeneratedColumn({type: "bigint"})
    id!: number;

    @Column({type: "integer", nullable: true})
    position!: number;

    @Column({type: "integer", nullable: true})
    width!: number;

    @Column({type: "integer", nullable: true})
    height!: number;

    @Column({type: "varchar", nullable: true})
    src!: string;

    @Column({type: "varchar", nullable: true})
    alt!: string;

    @Column("timestamp")
    createdAt!: Date;

    @Column({type: "timestamp", nullable: true})
    updatedAt!: Date;

    @ManyToOne(() => Product, product => product.images)
    @JoinTable()
    product!: Product;
}
