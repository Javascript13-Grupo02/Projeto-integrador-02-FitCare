# 🏋️‍♂️ FitCare - Aplicativo Fitness

<br />

<div align="center">
    <img src="https://ik.imagekit.io/z46iokdm7/FitCare%20Logo%20Clara.png" alt="Logo FitCare" width="40%"/>
</div>

<br /><br />

<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/TypeORM-FE0902?style=for-the-badge&logo=typeorm&logoColor=white" alt="TypeORM" />
</div>

<br />

## 📖 1. Descrição

O **FitCare** nasceu para descomplicar o bem-estar de quem vive uma rotina acelerada. O aplicativo centraliza programas de exercícios curtos e eficientes (de 10 a 30 minutos), divididos por modalidades como Yoga, Pilates, Musculação e HIIT. Através de filtros intuitivos, o usuário escolhe a atividade ideal para o seu momento, garantindo que a sua evolução aconteça onde estiver, sem complicações e sem a necessidade de equipamentos complexos.

------

## 💻 2. Sobre esta API

Esta é a API RESTful (Back-end) responsável por gerenciar toda a inteligência de dados do FitCare. Ela foi construída com foco em performance, organização de código e facilidade de manutenção, utilizando os melhores padrões de mercado para aplicações Node.js com TypeScript.

### ✨ 2.1. Principais Funcionalidades

- 📝 **Gerenciamento de Atividades:** Cadastro, consulta, atualização e remoção de exercícios.
- 🔍 **Sistema de Buscas e Filtros Dinâmicos:** Filtro por Modalidade (yoga, pilates, musculação, hiit).
- 🧮 **Sistema de Cálculo de IMC:** Cálculo do Índice de Massa Corporal (IMC) com base no peso e altura, facilitando o acompanhamento da evolução física e da saúde do usuário.
- 🛡️ **Validação de Dados:** Garantia de integridade com `class-validator` e `class-transformer`.

------

## 📁 3. Estrutura do Projeto

```text
src/
├── categoria/              # Módulo de gestão de categorias (Yoga, HIIT, etc.)
│   ├── controllers/        # Camada de entrada (Rotas HTTP)
│   ├── entities/           # Modelagem do banco de dados (tb_categorias)
│   ├── services/           # Regras de negócio 
│   └── categoria.module.ts # Arquivo de agrupamento do módulo
│
├── exercicio/              # Módulo de gestão dos exercicios
│   ├── controllers/        # Camada de entrada (Rotas HTTP)
│   ├── entities/           # Modelagem do banco de dados (tb_exercicios)
│   ├── services/           # Regras de negócio e filtros de busca
│   └── exercicio.module.ts # Arquivo de agrupamento do módulo
│
├── usuario/                # Módulo de gestão de usuários
│   ├── controllers/        # Camada de entrada (Rotas HTTP)
│   ├── entities/           # Modelagem do banco (tb_usuarios e cálculo de IMC)
│   ├── services/           # Regras de negócio e segurança
│   └── usuario.module.ts   # Arquivo de agrupamento do módulo
│
├── app.module.ts           # Módulo principal que centraliza toda a API
└── main.ts                 # Ponto de entrada que inicializa o servidor
````

------


## 📊 4. Diagrama de Classes

<div align="center">
    <img src="https://ik.imagekit.io/z46iokdm7/diagramaFitCare.png" title="Diagrama de Classes" width="50%"/>
</div>

------

## 🗃️ 5. Diagrama Entidade-Relacionamento (DER)

<div align="center">
    <img src="https://ik.imagekit.io/z46iokdm7/Exercise%20Category-2026-03-13-133828.png" title="Diagrama Entidade-Relacionamento" width="50%"/>
</div>

------

## 🛠️ 6. Tecnologias Utilizadas

| Item                          | Descrição  |
| ----------------------------- | ---------- |  
| ⌨️ **Linguagem de programação**| TypeScript |
| 🚀 **Framework** | NestJS     |
| 🧩 **ORM** | TypeORM    |
| 🛢️ **Banco de dados Relacional**| MySQL      |
| 🐙 **Versionamento** | Git / GitHub|

------

## 📋 7. Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas na sua máquina:
* 🟢 [Node.js](https://nodejs.org/en/)
* 🐬 [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) ou [MySQL Server](https://dev.mysql.com/downloads/mysql/) 
* 🐱 [Git](https://git-scm.com/)
* 🟣 [Insomnia](https://insomnia.rest/download)

------

## ⚙️ 8. Setup e Instalação

Siga o passo a passo abaixo para rodar o projeto localmente:

**1. 📥 Clone o repositório:**
```bash
git clone https://github.com/Javascript13-Grupo02/Projeto-integrador-02-FitCare
```
**2. 📦 Instale as dependências:**
```
npm install
```
3. 🗄️ Configure o Banco de Dados:

Configure as credenciais do seu MySQL local (usuário, senha e nome do banco) no arquivo app.module.ts


## 🚀 9. Executando a Aplicação
```
npm run start:dev
```


---
<p align="center">
  Desenvolvido por <b>AllCare</b>.
</p>

<p align="center">
  <img src="https://ik.imagekit.io/z46iokdm7/Logo%20AllCare%20Cores%20Claras.png" alt="AllCare" width="300">
</p>
