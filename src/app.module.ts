import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExercicioModule } from './exercicio/exercicio.modules';
import { Exercicio } from './exercicio/entities/exercicio.entity';
import { Usuario } from './usuario/entities/usuario.entity';
import { Categoria } from './categoria/entities/categoria.entity';
import { UsuarioModule } from './usuario/usuario.modules';
import { CategoriaModule } from './categoria/categoria.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123',
      database: 'db_fitcare',
      entities: [Exercicio, Usuario, Categoria],
      synchronize: true,
      logging: true,
    }),ExercicioModule,
    UsuarioModule,
    CategoriaModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
