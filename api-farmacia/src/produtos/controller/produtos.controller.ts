import { Produtos } from './../entities/produtos.entity';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProdutosService } from '../service/produtos.service';


@Controller('/produtos')
export class ProdutosController{

    constructor(private readonly service: ProdutosService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produtos[]> {
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produtos> {
        return this.service.findById(id)
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(@Param('descricao') descricao: string): Promise<Produtos[]>{
        return this.service.findByDescricao(descricao)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto: Produtos): Promise<Produtos>{
        return this.service.create(produto)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: Produtos): Promise<Produtos>{
        return this.service.update(produto)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.service.delete(id)
    }

}