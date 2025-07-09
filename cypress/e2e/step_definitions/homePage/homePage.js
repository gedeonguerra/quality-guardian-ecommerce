// Importa o básico do Cucumber para que este arquivo "entenda" o Given, When e Then.
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

// Importa os comandos personalizados da nossa aplicação, como o cy.login()
import '../../../support/commands'

// --- Início do Cenário: Busca por produto existente ---

// O "Given" estabelece as condições iniciais. É o ponto de partida do teste.
Given("que estou na página principal do ServeRest, que possui o campo de busca", () => {
    // Começamos logando o usuário, um pré-requisito para o teste.
    cy.login('admin@test.com', 'admin')
    // E garantimos que ele esteja na página correta para iniciar a ação.
    cy.visit("https://front.serverest.dev/home")
})

// O "When" executa a ação principal que queremos validar.
When("eu preencho o campo de busca com um nome de produto existente exemplo: Monitor eu clico no ícone de busca ou pressiono Enter", () =>{
    // Simulamos o usuário digitando o termo da busca no campo apropriado.
    cy.get("[type='search']").type("Samsung 60 polegadas")
    // E aqui, o clique que efetivamente dispara a pesquisa.
    cy.get("[data-testid='botaoPesquisar']").click()
})

// O "Then" verifica se o resultado da ação foi o que esperávamos.
Then("eu devo ver uma lista de produtos que correspondem ao nome, os produtos exibidos devem ter o nome ou descrição contendo Monitor", () =>{
    // A validação aqui é conferir se, dentro dos resultados, o nome do produto buscado está visível.
    cy.get(".card-body").contains("Samsung 60 polegadas")
})


// --- Início do Cenário: Busca por produto inexistente ---

// O "Given" novamente prepara o cenário, reutilizando a mesma lógica do teste anterior.
Given("que estou na página principal do ServeRest, que possui o campo de busca", () => {
    cy.login('admin@test.com', 'admin')
    cy.visit("https://front.serverest.dev/home")
})

// O "When" descreve a mesma ação, mas para o "caminho infeliz" do teste.
When("eu preencho o campo de busca com um nome de produto inexistente exemplo: Poco x7 pro, eu clico no ícone de busca ou pressiono Enter", () =>{
    // Digitamos um termo que sabemos que não trará resultados.
    cy.get("[type='search']").type("Poco x7 Pro")
    // E disparamos a busca.
    cy.get("[data-testid='botaoPesquisar']").click()
})

// O "Then" confere se o sistema lidou corretamente com uma busca sem resultados.
Then("eu devo ver uma mensagem indicando que nenhum produto foi encontrado", () =>{
    // A verificação final é se a mensagem esperada de "Nenhum produto foi encontrado" foi exibida ao usuário.
    cy.get("p").contains("Nenhum produto foi encontrado")
})