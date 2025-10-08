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
    res.render('index')
})

app.get('/acao',(req,res)=>{
    res.render('acao')
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