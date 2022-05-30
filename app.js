import tarefasRouter from './src/routes/tarefas.routes.js';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/tarefas', tarefasRouter);

export default app;
