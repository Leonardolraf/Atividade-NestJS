### Integrantes e Matrículas:
- Nome: Leonardo Rodrigues Amorim Filho | Matrícula: UC23101012
- Nome: Mario Eduardo Pereira de Sousa | Matrícula: UC23101279
- Nome: Matheus Silva / UC23100843
  

---
# HortiBox API - Projeto NestJS

API desenvolvida com NestJS para gestão de um sistema de hortifrutigranjeiros. Este projeto possui estrutura modularizada com 13 módulos principais, funcionalidades CRUD completas, relacionamentos entre entidades, e população automática de dados (seed).

## 📚 Funcionalidades

- Cadastro e gestão de produtos, categorias e fornecedores
- Controle de estoque
- Registro de clientes e seus endereços
- Processamento de pedidos e itens vinculados
- Controle de pagamentos e entregas
- Cadastro de UF, cidades e estudantes
- Relacionamentos entre entidades (produto-categoria, produto-fornecedor, pedido-cliente, etc)
- População inicial do banco com `seed.ts`

## 📁 Estrutura do Projeto

```bash
Atividade-NestJs/
├── src/
│   ├── produto/
│   ├── categoria-produto/
│   ├── cliente/
│   ├── pedido/
│   ├── item-pedido/
│   ├── pagamento/
│   ├── entrega/
│   ├── fornecedor/
│   ├── estoque/
│   ├── endereco/
│   ├── cidade/
│   ├── uf/
│   └── estudante/
├── seed.ts              # Script para popular o banco
├── package.json         # Dependências do projeto
├── ormconfig.json       # Configuração do TypeORM
├── tsconfig.json        # Configuração do TypeScript
```

## ⚙️ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [SQLite](https://www.sqlite.org/)
- TypeScript

## ⚡ Instalação

1. Clone o repositório ou extraia os arquivos
2. Acesse a pasta do projeto:
   ```bash
   cd Atividade-NestJs-HortiBox
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## 🚀 Executando o Projeto

### Em modo desenvolvimento
```bash
npm run start:dev
```

### Para popular o banco (execute uma vez):
```bash
npx ts-node seed.ts
```

> ✅ Isso criará dados automáticos para Produto, Categoria, Fornecedor, Cliente, Pedido, etc.

## 🔍 Testando as rotas

Use o VS Code com a extensão **REST Client** ou ferramentas como Postman para testar os arquivos `.http` presentes em cada pasta de módulo.

Exemplo com REST Client:
```http
### Criar um Produto
POST http://localhost:3000/produto
Content-Type: application/json

{
  "nome": "Maçã",
  "descricao": "Maçã gala",
  "ativo": true
}
```

---

