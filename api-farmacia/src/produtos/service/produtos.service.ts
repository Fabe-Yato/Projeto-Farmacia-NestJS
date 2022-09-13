import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produtos } from "../entities/produtos.entity";

@Injectable()
export class ProdutosService{
    constructor(
        @InjectRepository(Produtos)
        private produtosRepository: Repository<Produtos>
    ){}

    async findAll(): Promise<Produtos []> {
        return this.produtosRepository.find({
            relations: {
                categoria: true
            }
        })  
    }

    async findById(id: number): Promise<Produtos>{
        let produtos = await this.produtosRepository.findOne({
            where: { 
                id                          
            },
            relations: {
                categoria: true
            }
        })

        if(!produtos){
            throw new HttpException("Produtos não encontrada", HttpStatus.NOT_FOUND)
        }
        return produtos
    }

    async findByNome(nome: string): Promise<Produtos[]>{
        return this.produtosRepository.find({
            where:{
                nome: ILike(`%${nome}%`)
            },
            relations: {
                categoria: true
            }
        })
    }

    async findByDescricao(descricao: string): Promise<Produtos[]>{
        return this.produtosRepository.find({
            where:{
                descricao: ILike(`%${descricao}%`)
            },
            relations: {
                categoria: true
            }
        })
    }
    
    async create(produtos: Produtos): Promise<Produtos>{
        return this.produtosRepository.save(produtos)
    }

    async update( produtos: Produtos): Promise<Produtos>{
        let produtosUpdate = await this.findById(produtos.id)

        if(!produtosUpdate || !produtos.id){
            throw new HttpException("Produtos não encontrada!", HttpStatus.NOT_FOUND)

        }
        return this.produtosRepository.save(produtos)
    }

    async delete(id: number): Promise<DeleteResult>{
        let produtosDelete = await this.findById(id)

        if(!produtosDelete){
            throw new HttpException('Produtos não foi encontrada', HttpStatus.NOT_FOUND)
        }
        return this.produtosRepository.delete(id)
    }
    
}