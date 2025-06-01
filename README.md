# Sistema de Vendas para Cantinas

Sistema focado na gestão de vendas e estoque para cantinas escolares, universitárias e pequenas lanchonetes. O objetivo é proporcionar uma ferramenta simples, eficiente e moderna para o gerenciamento do dia a dia.

## ✨ Tecnologias Utilizadas

* **Docker** — ambiente isolado e padronizado para desenvolvimento e produção.
* **TypeScript** — tipagem estática para maior segurança e qualidade do código.
* **Next.js** — framework React com suporte a SSR e SSG.
* **PostgreSQL** — banco de dados relacional robusto.
* **TypeORM** — ORM para simplificar a comunicação com o banco de dados.
* **shadcn/ui** — biblioteca de componentes UI acessíveis e com design clean.

## 📦 Funcionalidades

* **CRUD de Estoque**

  * Cadastro de novos produtos.
  * Atualização e exclusão de produtos.
  * Controle automático de quantidade em estoque.

* **Sistema de Vendas**

  * Registro rápido e simples de vendas.
  * Cálculo e exibição do valor total das vendas.
  * Baixa automática no estoque após cada venda.

## 🚀 Como Rodar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone <url-do-repositório>
   cd <nome-do-projeto>
   ```

2. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na pasta `dotenv_files/` do projeto com as informações de conexão do banco de dados e outras variáveis necessárias.

3. **Suba os containers:**

   ```bash
   docker-compose up --build
   ```

4. **Acesse a aplicação:**

   ```
   http://localhost:3000
   ```