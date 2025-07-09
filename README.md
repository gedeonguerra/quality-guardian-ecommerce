
# Quality Guardian E-commerce

Projeto de portfólio de QA com testes E2E usando Cypress, BDD e CI/CD para uma aplicação de e-commerce.

## 📝 Sobre o Projeto

Este projeto demonstra a automação de testes end-to-end para um e-commerce fictício. Os testes foram escritos utilizando Cypress com a metodologia BDD (Behavior-Driven Development), o que torna os cenários de teste mais legíveis e compreensíveis para toda a equipe.

O projeto está configurado com um workflow de Integração Contínua (CI) utilizando GitHub Actions, que executa os testes automaticamente a cada `push` ou `pull request`, garantindo a qualidade e a estabilidade da aplicação.

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para configurar e executar os testes em seu ambiente local.

### **Pré-requisitos**

-   [Node.js](https://nodejs.org/en/) (versão 14 ou superior)
-   [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

### **Instalação**

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/gedeonguerra/quality-guardian-ecommerce.git](https://github.com/gedeonguerra/quality-guardian-ecommerce.git)
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd quality-guardian-ecommerce
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

### **Executando os Testes**

Você pode executar os testes Cypress de duas maneiras:

1.  **Em modo interativo (com a interface do Cypress):**
    ```bash
    npx cypress open
    ```
    Este comando abrirá a interface do Cypress, onde você pode selecionar e executar os testes individualmente, além de visualizar a execução em tempo real.

2.  **Em modo headless (via linha de comando):**
    ```bash
    npx cypress run
    ```
    Este comando executará todos os testes em background, sem a interface gráfica. É ideal para ambientes de integração contínua.

## 🧪 Documentação de Testes (BDD)

Abaixo estão os cenários de teste documentados no formato BDD, cobrindo as principais funcionalidades da aplicação.

### **Funcionalidade: Login**

-   **Contexto:** Como um usuário, quero poder me autenticar no sistema para acessar as funcionalidades exclusivas para clientes.

    -   **Cenário 1: Login com sucesso**
        -   **Dado** que estou na página de login do ServeRest
        -   **Quando** eu preencho o campo de e-mail com "admin@test.com", e preencho o campo de senha com "admin" e clico em Entrar
        -   **Então** eu devo ser redirecionado para a página inicial e ver uma mensagem de boas-vindas

    -   **Cenário 2: Tentativa de login com credenciais inválidas**
        -   **Dado** que estou na página de login do ServeRest
        -   **Quando** eu preencho o campo de e-mail com "email@invalido.com", e preencho o campo de senha com "senhaerrada" e clico em Entrar
        -   **Então** eu devo receber uma mensagem de erro "Email e/ou senha inválidos"

    -   **Cenário 3: Tentativa de login com campos vazios**
        -   **Dado** que estou na página de login do ServeRest
        -   **Quando** eu clico no botão de Entrar sem preencher email e senha
        -   **Então** eu devo receber as mensagens de erro "Email é obrigatório" e "Password é obrigatório"

### **Funcionalidade: Busca de Produtos**

-   **Contexto:** Como um usuário, quero poder buscar por produtos na página inicial para encontrá-los facilmente.

    -   **Cenário 1: Busca por um produto existente**
        -   **Dado** que estou na página principal do ServeRest, que possui o campo de busca
        -   **Quando** eu preencho o campo de busca com um nome de produto existente e clico no ícone de busca
        -   **Então** eu devo ver uma lista de produtos que correspondem ao nome buscado

    -   **Cenário 2: Busca por um produto inexistente**
        -   **Dado** que estou na página principal do ServeRest, que possui o campo de busca
        -   **Quando** eu preencho o campo de busca com um nome de produto inexistente e clico no ícone de busca
        -   **Então** eu devo ver uma mensagem indicando que "Nenhum produto foi encontrado"

### **Funcionalidade: Carrinho de Compras**

-   **Contexto:** Como um usuário, quero poder adicionar produtos ao carrinho de compras para adquiri-los.

    -   **Cenário 1: Adicionar produto ao carrinho**
        -   **Dado** que estou na página de um produto específico e clico no botão 'Adicionar a lista de compras'
        -   **Quando** sou redirecionado para 'Minha Lista de Produtos' e clico no botão 'Adicionar no Carrinho'
        -   **Então** uma mensagem de erro aparece 'Em construção aguarde'