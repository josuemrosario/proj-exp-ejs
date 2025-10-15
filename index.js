//importações necessárias
const express = require('express');


//criando o app
app = express()


//configurações iniciais
porta = 3000;
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));



//rotas da aplicação
//============================

// rota home
app.get('/',(req,res)=>{
    dadosFilmes = [
        {
            titulo: "Sombras do Amanhã",
            descricao: "Um herói improvável embarca em uma jornada para salvar o mundo de uma ameaça misteriosa.",
            data_lancamento: "2024-07-12",
            genero: ["Ação", "Aventura"],
            imagem: "https://placehold.co/230x300"
        }
    ]
    res.render('index',{titulo:'Home',dados:dadosFilmes})
})

app.get('/acao',(req,res)=>{
    res.render('acao',{titulo:'Filmes de Ação'})
})

// rota de erro 404
app.use((req,res) => {
    res.status(404).send('página não encontrada')
})

//Colocando o servidor no ar
//============================
app.listen(porta, () => {
    console.log("servidor rodando")
    console.log(`Acesse: http://localhost:${porta}`)
})