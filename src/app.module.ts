import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.modules';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port:3306,
      username: 'root',
      password: 'root',
      database: 'db_fitcare',
      entities: [Usuario],
      synchronize: true,
      logging: true,
    }),
    UsuarioModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
