import { Type } from './../../node_modules/@jest/reporters/node_modules/path-scurry/dist/commonjs/index.d';
import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categoria } from "../categoria/entities/categoria.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CategoriaService{
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>) {}

        async findAll(): Promise<Categoria[]> {
            return this.categoriaRepository.find();
        }

        async findById(id: number): Promise<Categoria>{

        const categoria = await this.categoriaRepository.findOne({
            where: { id },

        })
        if (!categoria)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return categoria; 
    }
     

    async findAllByIntensidade(intensidade: string): Promise<Categoria[]>{

        return this.categoriaRepository.find({
            where: { intensidade: ILike(`%${intensidade}%`) }
        });
    }

    async create(categoria: Categoria): Promise<Categoria>{

    
        return await this.categoriaRepository.save(categoria);
    }
    
    async update(categoria: Categoria): Promise<Categoria>{

        if(!categoria.id || categoria.id <= 0)
            throw new HttpException('O ID da categoria é inválido', HttpStatus.BAD_REQUEST);


        await this.findById(categoria.id);


        return this.categoriaRepository.save(categoria);
    }
    
    async delete(id: number): Promise<DeleteResult>{

        await this.findById(id);

        return this.categoriaRepository.delete(id);
    }
}
