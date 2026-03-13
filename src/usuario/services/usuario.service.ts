import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
    ) { }


    async findByUsuario(usuario: string): Promise<Usuario> {

        const resultado = await this.usuarioRepository.findOne({
            where: {
                usuario: usuario
            }
        });

        if (!resultado)
            throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);

        return resultado;
    }


    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
    }

    async findById(id: number): Promise<Usuario> {

        const usuario = await this.usuarioRepository.findOne({
            where: {
                id
            }
        });

        if (!usuario)
            throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);

        return usuario;

    }

    async create(usuario: Usuario): Promise<Usuario> {

        const buscaUsuario = await this.usuarioRepository.findOne({
            where: { usuario: usuario.usuario }
        });

        if (buscaUsuario)
            throw new HttpException("O Usuario já existe!", HttpStatus.BAD_REQUEST);

        return await this.usuarioRepository.save(usuario);
    }

    async update(usuario: Usuario): Promise<Usuario> {

        await this.findById(usuario.id);

        const buscaUsuario = await this.findByUsuario(usuario.usuario);

        if (buscaUsuario && buscaUsuario.id !== usuario.id)
            throw new HttpException('Usuário (e-mail) já Cadastrado!', HttpStatus.BAD_REQUEST);

        return await this.usuarioRepository.save(usuario);

    }

    async calcularIMCUsuario(id: number) {

        const usuario = await this.findById(id)

        const imc = usuario.peso / (usuario.altura * usuario.altura)

        let classificacao: string

        if (imc < 18.5) {
            classificacao = "Abaixo do peso"
        } else if (imc < 25) {
            classificacao = "Peso normal"
        } else if (imc < 30) {
            classificacao = "Sobrepeso"
        } else if (imc < 35) {
            classificacao = "Obesidade moderada"
        } else if (imc < 40) {
            classificacao = "Obesidade severa"
        } else {
            classificacao = "Obesidade mórbida"
        }

        return {
            usuario: usuario.nome,
            imc: Number(imc.toFixed(2)),
            classificacao: classificacao
        }

    }

}