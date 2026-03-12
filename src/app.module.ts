import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExercicioController } from './exercicio/controllers/exercicio.controller';
import { ExercicioModule } from './exercicio/exercicio.modules';
import { Exercicio } from './exercicio/entities/exercicio.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port:3306,
      username: 'root',
      password: 'root123',
      database: 'db_fitcare',
      entities: [Exercicio],
      synchronize: true,
      logging: true,
    }),ExercicioModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
