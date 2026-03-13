import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExercicioModule } from './exercicio/exercicio.modules';
import { Exercicio } from './exercicio/entities/exercicio.entity';
import { Usuario } from './usuario/entities/usuario.entity';

import { UsuarioModule } from './usuario/usuario.modules';
import { CategoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_fitcare',
      entities: [Exercicio, Usuario, Categoria],
      synchronize: false,
      logging: false,
    }),ExercicioModule,
    UsuarioModule,
    CategoriaModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
