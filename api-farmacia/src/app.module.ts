import { Categoria } from 'src/categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/modules/categoria.module';
import { ProdutosModule } from './produtos/modules/produtos.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtos } from './produtos/entities/produtos.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Fabitdb2114',
        database: 'db_farmacia',
        entities: [Produtos, Categoria],
        synchronize: true
    }),
    ProdutosModule,
    CategoriaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
