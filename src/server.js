import express from 'express';
import veiculosroutes from './routes/veiculos.routes';

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        mensagem: 'Servidor funcionando'
    })
})

app.use('/veiculos', veiculosroutes)

app.listen(port, () => {
    console.log(`app rodando em http://localhost:${port}`)
})
