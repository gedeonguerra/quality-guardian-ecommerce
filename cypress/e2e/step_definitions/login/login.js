// Importa o básico do Cucumber para que este arquivo "entenda" o Given, When e Then.
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

// O "Given" prepara o cenário, garantindo que o teste comece na página de login.
Given("que estou na página de login do ServeRest", () => {
    cy.visit("https://front.serverest.dev/login")
})

// O "When" descreve a ação de preencher os dados.
// Note que {string} no .feature passa os valores de email e senha para a função.
When("eu preencho o campo de e-mail com {string}, e preencho o campo de senha com {string} e clico em Entrar",(email, password) =>{
    cy.get("[name='email']").type(email)
    cy.get("[name='password']").type(password)
    cy.get("[type='submit']").click()
})

// Este "Then" valida o cenário de sucesso.
// A descrição diz "página login", mas o código confirma o redirect para a home, que é o correto.
Then("eu devo ser redirecionado para a página login, e devo ver uma mensagem", () =>{
    cy.get("h1").contains("Serverest Store")
})

// Este "Then" valida o cenário de falha por credenciais incorretas.
Then("eu devo receber uma mensagem de erro", () =>{
    // A gente busca pelo alerta de erro específico de "Email e/ou senha inválidos".
    cy.get("[role='alert']").contains("Email e/ou senha inválidos")
})

// Um "When" específico para o caso de tentativa de login com campos vazios.
When("eu clico No botão de Entrar sem prencher email e senha",() =>{
    cy.get("[type='submit']").click()
})

// O "Then" para o cenário de campos vazios, validando as mensagens de obrigatoriedade.
Then("eu devo receber uma mensagem de erro, email e senha não pode ficar em Branco", () =>{
    // Como podem aparecer dois alertas, usamos .eq() para validar cada mensagem individualmente.
    cy.get("[role='alert']").eq(0).contains("Email é obrigatório")
    cy.get("[role='alert']").eq(1).contains("Password é obrigatório")
})

// Este passo, embora escrito como "When", funciona como uma verificação da existência do botão.
When("eu devo ver um link com o texto Cadastrar",() =>{
    cy.get("[type='button']").contains("Cadastre-se")
})

// E este "Then" descreve a ação de clicar no botão.
Then("eu clico no link Cadastrar", () =>{
      cy.get("[type='button']").click()
})

// Para finalizar o fluxo de cadastro, este passo confirma se fomos redirecionados para a página correta.
When("eu sou redirecionado para a página de cadastro",() =>{
    cy.get("h2").contains("Cadastro")
})