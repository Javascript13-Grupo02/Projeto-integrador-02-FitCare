import { IsEmail, IsNotEmpty, IsNumber, Length, Min, MinLength } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { Transform, TransformFnParams } from "class-transformer"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    id: number

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Length(5, 100, { message: "O Nome deve ter entre 5 e 100 caracteres" })
    @Column({length: 100, nullable: false}) 
    nome: string

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsEmail()
    @IsNotEmpty()
    @Length(10, 100, { message: "O Usuário deve ter entre 10 e 100 caracteres" })
    @Column({length: 100, nullable: false })
    usuario: string

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @MinLength(8)
    @IsNotEmpty()
    @Length(4, 50, { message: "A Senha deve ter entre 4 e 50 caracteres" })
    @Column({length: 50, nullable: false }) 
    senha: string

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Transform(({ value }: TransformFnParams) => Number(value))
    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    peso: number

    @IsNumber()
    @IsNotEmpty()
    @Min(0.5)
    @Transform(({ value }: TransformFnParams) => Number(value))
    @Column({ type: "decimal", precision: 4, scale: 2, nullable: false })
    altura: number

    @Column({length: 5000 }) 
    foto: string

    
}