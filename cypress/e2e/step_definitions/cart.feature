Feature: Carrinho de Compras

  # Como um usuário
  # Eu quero adicionar produtos ao carrinho
  # Para preparar minha compra

  Scenario: Tentativa de adicionar produto ao carrinho quando a funcionalidade está em construção
    
    # "Given" prepara o cenário inicial. É o ponto de partida do nosso teste.
    # Aqui, garantimos que o usuário já está na página correta e realizou a primeira ação.
    Given que estou na página de um produto específico e clico no botão 'Adicionar a lista de compras'
    
    # "When" representa a ação principal que o usuário executa e que queremos testar.
    # Neste caso, é o clique no botão que deveria adicionar o item ao carrinho.
    When sou redirecionado para 'Minha Lista de Produtos' e clico no botão 'Adicionar no Carrinho'
    
    # "Then" é o resultado esperado. É aqui que verificamos se o sistema se comportou como deveria.
    # Como a funcionalidade não está pronta, esperamos uma mensagem de erro específica.
    Then uma mensagem de erro aparece 'Em construção aguarde'