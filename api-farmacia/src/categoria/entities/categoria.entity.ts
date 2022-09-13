import { Produtos } from './../../produtos/entities/produtos.entity';
import { IsNotEmpty, MaxLength } from 'class-validator'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tb_categoria')
export class Categoria{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    nome: string

    @IsNotEmpty()
    @MaxLength(5000)
    @Column({nullable: false, length: 5000})
    descricao: string

    @OneToMany(()=> Produtos, (produtos) => produtos.categoria, {

    })
    produtos: Produtos[]

}