import { Categoria } from './../../Categoria/entities/Categoria.entity';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { DeleteResult } from "typeorm";
import { CategoriaService } from '../services/categoria.service';

@Controller('/Categoria')
export class CategoriaController {
    constructor(private readonly service: CategoriaService){}

    //faz a requisição Get trazendo a consulta de todos os itens do banco
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll():Promise<Categoria []>{
        return this.service.findAll()
    }

    //faz a consulta trazendo apenas o item com o id passado
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria>{
        return this.service.findById(id)
    }

    @Get('/nome/:nome') //http://localhost/Categoria/nome/fabiano
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Categoria[]>{
        return this.service.findByNome(nome)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() categoria:Categoria): Promise<Categoria>{
        return this.service.create(categoria)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() categoria: Categoria): Promise<Categoria>{
        return this.service.update(categoria)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    Delete(@Param('id', ParseIntPipe)id: number): Promise<DeleteResult>{
        return this.service.delete(id)
    }
}