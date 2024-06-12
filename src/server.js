import express from 'express';
import router from './routes.js'

const app = express();

app.use(router)

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => { console.log(`Servidor rodando no endereço: http://localhost:${PORT}/`) });
