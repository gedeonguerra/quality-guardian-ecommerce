// Importa o básico do Cucumber para que este arquivo "entenda" o Given, When e Then.
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

// Importa os comandos personalizados da nossa aplicação, como o cy.login().
import '../../../support/commands'

// O "Given" estabelece as condições iniciais. É o ponto de partida do teste.
Given("que estou na página de um produto específico e clico no botão 'Adicionar a lista de compras'", () => {
    
    // Começamos logando o usuário. É um pré-requisito pro teste rodar.
    cy.login('admin@test.com', 'admin')

    // Com o usuário logado, vamos para a página principal.
    cy.visit("https://front.serverest.dev/home")

    // Aqui, encontramos o primeiro botão de "adicionar na lista" e clicamos nele.
    // O uso de 'data-testid' é uma escolha pra deixar o teste mais robusto e menos suscetível a quebras.
    cy.get("[data-testid='adicionarNaLista']").eq(0).click()
})

// O "When" executa a ação principal que queremos validar.
When("sou redirecionado para 'Minha Lista de Produtos' e clico no botão 'Adicionar no Carrinho'", () =>{
    
    // Antes de clicar, a gente confirma se o redirect para "Lista de Compras" funcionou.
    cy.get("h1").contains("Lista de Compras")

    // Agora sim, o clique que de fato estamos testando.
    cy.get("[data-testid='adicionar carrinho']").click()
})

// O "Then" verifica se o resultado da ação foi o que esperávamos.
Then("uma mensagem de erro aparece 'Em construção aguarde'", () =>{
    
    // A verificação final: o sistema mostrou a mensagem de "Em construção"?
    // Se essa linha passar, o teste todo é considerado um sucesso.
    cy.get("h1").contains("Em construção aguarde")
})