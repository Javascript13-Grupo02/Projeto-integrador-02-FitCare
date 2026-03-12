import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeleteResult, ILike, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class CategoriaService{
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>) {}

        async findAll(): Promise<Categoria[]> {
            return this.categoriaRepository.find({relations: {exercicio: true} });
        }

        async findById(id: number): Promise<Categoria>{

        const categoria = await this.categoriaRepository.findOne({
            where: { id },
            relations: {exercicio: true}

        })
        if (!categoria)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return categoria; 
    }
     

    async findAllByIntensidade(intensidade: string): Promise<Categoria[]>{

        return this.categoriaRepository.find({
            where: { intensidade: ILike(`%${intensidade}%`) },
            relations: {exercicio: true}
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
