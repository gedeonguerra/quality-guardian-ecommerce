Feature: Login

  # Como um visitante
  # Eu quero fazer login no sistema
  # Para acessar a área restrita da plataforma

  Scenario: Login válido
    # O cenário de "caminho feliz", onde o usuário insere dados corretos e consegue acessar.

    # Given: Começamos na tela de login.
    Given que estou na página de login do ServeRest 

    # When: O usuário preenche os campos com credenciais válidas e clica em entrar.
    When eu preencho o campo de e-mail com "admin@test.com", e preencho o campo de senha com "admin" e clico em Entrar
    
    # Then: A verificação final é se o login foi bem-sucedido, resultando no redirecionamento.
    Then eu devo ser redirecionado para a página login, e devo ver uma mensagem

  Scenario: Login inválido
    # Testa a resposta do sistema a uma tentativa de login com dados incorretos.

    # Given: Novamente, o ponto de partida é a tela de login.
    Given que estou na página de login do ServeRest 

    # When: O usuário insere um e-mail ou senha que não correspondem a um cadastro.
    When eu preencho o campo de e-mail com "admin@teste.com", e preencho o campo de senha com "admin" e clico em Entrar
    
    # Then: Esperamos que o sistema bloqueie o acesso e mostre uma mensagem de erro clara.
    Then eu devo receber uma mensagem de erro
    
  Scenario: Tentativa de Login com campos vazios
    # Este cenário valida as mensagens de erro quando os campos obrigatórios não são preenchidos.

    # Given: O teste se inicia na página de login.
    Given que estou na página de login do ServeRest 

    # When: A ação aqui é a tentativa de submeter o formulário em branco.
    When eu clico No botão de Entrar sem prencher email e senha  
    
    # Then: A validação confere se as mensagens de erro para cada campo obrigatório são exibidas.
    Then eu devo receber uma mensagem de erro, email e senha não pode ficar em Branco

  Scenario: Verificação da presença do link "Cadastrar"
    # Um teste simples para garantir que a navegação da tela de login para a de cadastro está funcionando.

    # Given: Começamos na tela de login.
    Given que estou na página de login do ServeRest 

    # When: Aqui, verificamos se o link para se cadastrar está visível na página.
    When eu devo ver um link com o texto Cadastrar
    
    # Then: Descreve a ação de clicar no link encontrado.
    Then eu clico no link Cadastrar
    
    # When: Por fim, confirmamos que a ação de clicar nos levou para a tela correta de Cadastro.
    When eu sou redirecionado para a página de cadastro