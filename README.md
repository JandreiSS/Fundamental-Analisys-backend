# Fundamental Analisys - Backend

O objetivo dessa aplicação é realizar a busca de dados de empresas na bolsa de valores, possibilitando a comparação entre empresas, com diversos indicadores.

## Requisitos do cliente

- [ ] O usuário pode pesquisar por diferentes tickets, um de cada vez, tendo como retorno os dados de todos, para comparação
- [ ] Os dados retornados serão:
  - [ ] Ticker da empresa
  - [ ] Nome da empresa
  - [ ] Setor
  - [ ] Subsetor
  - [ ] Última cotação
  - [ ] P/L
  - [ ] EBITDA
  - [ ] Dividend Yield
  - [ ] ROE
  - [ ] ROIC
  - [ ] EV/EBIT

## Requisitos técnicos

- [ ] Realizar WebScraping do site Fundamentus para os dados fundamentalistas
  - [ ] Utilizar Python e NodeJS no mesmo ambiente
- [ ] Utilizar-se da API AlphaVantage para os dados técnicos
  - [ ] Gerar gráficos com os dados, possibilitando comparação entre empresas
