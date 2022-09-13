import { ProdutosService } from 'src/produtos/service/produtos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { Produtos } from '../entities/produtos.entity';
import { ProdutosController } from '../controller/produtos.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Produtos])],
    providers:[ProdutosService],
    controllers: [ProdutosController],
    exports: [TypeOrmModule]
})
export class ProdutosModule{
    
}