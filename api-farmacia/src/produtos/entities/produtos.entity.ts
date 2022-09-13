import { IsNotEmpty, MaxLength } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'tb_produtos'})
export class Produtos{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(50)
    @Column({nullable:false, length: 50})
    nome: string

    @IsNotEmpty()
    @MaxLength(1000)
    @Column({nullable:false, length: 1000})
    descricao: string

    @Column({nullable: false})
    quantidade: number

    @IsNotEmpty()
    @MaxLength(500)
    @Column({nullable:false, length: 500})
    laboratorio: string

    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    preco: number

    @IsNotEmpty()
    @MaxLength(5000)
    @Column({nullable:false, length: 500})
    foto: string

    @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
        onDelete: "CASCADE" 
    })

    categoria: Categoria
}