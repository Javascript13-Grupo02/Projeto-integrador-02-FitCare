import { IsEmail, IsNotEmpty, IsNumber, Length, Min, MinLength } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { Transform, TransformFnParams } from "class-transformer"



@Entity({ name: "tb_exercicios" })
export class Exercicio {

    @PrimaryGeneratedColumn()
    id: number

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Length(5, 100, { message: "O Nome deve ter entre 5 e 100 caracteres" })
    @Column({ length: 100, nullable: false })
    nome: string

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Transform(({ value }: TransformFnParams) => Number(value))
    @Column({ type: "int", nullable: false })
    duracao: number

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Length(5, 100, { message: "O Nome deve ter entre 5 e 100 caracteres" })
    @Column({ length: 100, nullable: false })
    tipo: string

    @Column({ length: 5000 })
    foto: string


}