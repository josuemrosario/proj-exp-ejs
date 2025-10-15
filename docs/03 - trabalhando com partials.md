**versao do laboratório:** 1.0.0

**Data Criaçao:** 08/10/2025

# Descrição do Laboratório

vamos configurar o ejs, nossas primeiras views e a pasta public

# Objetivos do Laboratório

Aprender a trabalhar com partials

# Objetivos do Laboratório

Compreender :

- o que é um partial

# 1. Configurando o partial menu

crie a pasta partials

.\views\partials

criar o partial do menu.ejs, mover o nav para o menu.ejs e modifique o href de menu ação para a rota correta

.\views\partials\menu.ejs

```javascript
<nav>
  <li>
    <a href="/">Home</a>
    <a href="/acao">Ação</a>
    <a href="#">Aventura</a>
    <a href="#">Comédia</a>
  </li>
</nav>
```

Tanto na view index.ejs quanto na view acao.ejs vamos importar o menu. No lugar onde estava o nav adicione o import do partial.

`<%- include('./partials/menu') %>`

Teste a aplicação e verifique :

- Se o menu aparece corretamente tanto na pagina principal quanto em ação
- se o menu ação está funcionando

# 2. Tranformando o head em partials

Mova o elemento head de index.ejs para um novo arquivo head.ejs

views\partials\head.ejs

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./css/styles.css" />
  <title>Filmes de Ação</title>
</head>
```

adicione um include no lugar no head tanto do acao.ejs quanto do index.ejs

views\acao.ejs
views\index.ejs

```html
<!DOCTYPE html>
<html lang="pt-br">
  <%- include('./partials/head') %>
  <body></body>
</html>
```

obs: Vamos passar a ter um problema no titulo. O mesmo titulo está sendo mostrado nas duas páginas. Vamos corrigir futuramente

# 3. Transformando a tabela em partial

Crie o partial tabela e mova o código da tabela que está dentro de acao.ejs

views\partials\tabela.ejs

```html
<!-- TABELA DE FILMES -->
<table>
  <thead>
    <tr>
      <th>Poster</th>
      <th>Título</th>
      <th>Descrição</th>
      <th>Data de Lançamento</th>
      <th>Gênero</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="https://placehold.co/230x300" alt="Sombras do Amanhã" />
      </td>
      <td>Sombras do Amanhã</td>
      <td>
        Um herói improvável embarca em uma jornada para salvar o mundo de uma
        ameaça misteriosa.
      </td>
      <td>12/07/2024</td>
      <td>Ação / Aventura</td>
    </tr>
    <tr>
      <td>
        <img src="https://placehold.co/230x300" alt="Linha de Fogo" />
      </td>
      <td>Linha de Fogo</td>
      <td>
        Uma policial tenta desvendar uma série de crimes ligados a uma
        organização secreta.
      </td>
      <td>29/08/2023</td>
      <td>Ação / Suspense</td>
    </tr>
  </tbody>
</table>
```

Inclua o partial tabela no lugar da tabela

```html
<body>
  <!-- menu de opções -->
  <%- include('./partials/menu') %>

  <header>
    <h1>Filmes de Ação</h1>
    <p>Adrenalina e emoção do início ao fim</p>
  </header>

  <%- include('./partials/tabela') %>
</body>
```

# 4. Criando um partial para o card

Da mesma forma que foi feito na tabela, crie o partial card

views\partials\card.ejs

```html
<div class="card">
  <img src="https://placehold.co/230x300" alt="Sombras do Amanhã" />
  <h3>Sombras do Amanhã</h3>
  <p class="descricao">
    Um herói improvável embarca em uma jornada para salvar o mundo de uma ameaça
    misteriosa.
  </p>
  <p class="info"><strong>Data:</strong> 12/07/2024</p>
  <p class="info"><strong>Gênero:</strong> Ação / Aventura</p>
</div>
```

Exclua todos os cards (divs com a class card) e acrescente os includes no lugar

```html
<div class="cards">
  <%- include('./partials/card') %> <%- include('./partials/card') %>
  <%-include('./partials/card') %> <%- include('./partials/card') %>
  <%-include('./partials/card') %> <%- include('./partials/card') %>
  <%-include('./partials/card') %> <%- include('./partials/card') %>
</div>
```

# Alterações Executadas

| Data       | Responsável   | Descrição           |
| ---------- | ------------- | ------------------- |
| 08/10/2025 | Josué Rosario | Criação do Tutorial |
