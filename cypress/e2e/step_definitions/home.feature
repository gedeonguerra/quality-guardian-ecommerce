Feature: Home

#   Como um usuário logado 
#   Eu quero buscar produtos
#   Para encontrar itens de meu interesse

  Scenario: Busca de produto por nome existente

    # O Given garante que o teste começa no lugar certo, com os elementos necessários em tela.
    Given que estou na página principal do ServeRest, que possui o campo de busca

    # O When descreve a ação do usuário. Aqui, a busca por um item que a gente sabe que existe.
    When eu preencho o campo de busca com um nome de produto existente exemplo: Monitor eu clico no ícone de busca ou pressiono Enter
    
    # O Then é a validação do resultado. Se a busca funcionou, esperamos ver os produtos correspondentes.
    Then eu devo ver uma lista de produtos que correspondem ao nome, os produtos exibidos devem ter o nome ou descrição contendo Monitor

  Scenario: Busca de produto por nome inexistente

    # O ponto de partida é o mesmo do cenário anterior, a página principal.
    Given que estou na página principal do ServeRest, que possui o campo de busca

    # A ação aqui é a busca por um termo que não deve retornar resultados. É o nosso "caminho infeliz".
    When eu preencho o campo de busca com um nome de produto inexistente exemplo: Poco x7 pro, eu clico no ícone de busca ou pressiono Enter

    # E aqui, a gente confirma se o sistema se comportou como esperado para uma busca sem resultados,
    # exibindo a mensagem correta para o usuário.
    Then eu devo ver uma mensagem indicando que nenhum produto foi encontrado