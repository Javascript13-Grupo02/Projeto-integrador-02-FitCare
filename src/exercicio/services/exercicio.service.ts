import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Exercicio } from "../entities/exercicio.entity";
import { ILike, Repository } from "typeorm";


@Injectable()
export class ExercicioService {

    constructor(
        @InjectRepository(Exercicio)
        private exercicioRepository: Repository<Exercicio>,
    ) { }

    async findAll(): Promise<Exercicio[]> {
        return await this.exercicioRepository.find();
    }

    async findById(id: number): Promise<Exercicio> {

        const exercicio = await this.exercicioRepository.findOne({
            where: { id }
        });

        if (!exercicio)
            throw new HttpException("Exercício não encontrado!", HttpStatus.NOT_FOUND);

        return exercicio;
    }

    // BUSCA COM LIKE
    async findByTipo(tipo: string): Promise<Exercicio[]> {
    return await this.exercicioRepository.find({
        where: {
            tipo: ILike(`%${tipo}%`)
        }
    });
}

    async create(exercicio: Exercicio): Promise<Exercicio> {
        return await this.exercicioRepository.save(exercicio);
    }

    async update(exercicio: Exercicio): Promise<Exercicio> {

        await this.findById(exercicio.id);

        return await this.exercicioRepository.save(exercicio);
    }

    // DELETE
    async delete(id: number): Promise<void> {

        const exercicio = await this.findById(id);

        await this.exercicioRepository.delete(exercicio.id);

    }

}