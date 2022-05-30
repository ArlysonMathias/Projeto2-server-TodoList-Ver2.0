import TarefasController from '../controllers/tarefas.controller.js';
import { Router } from 'express';
import verificarIdTarefaMiddleware from '../middlewares/verificarIdTarefa.middleware.js';
import vericarDadosTarefaMiddleware from '../middlewares/verificarDadosTarefa.middleware.js';

const tarefasRouter = Router();
const tarefasController = new TarefasController();

tarefasRouter.get('/listar-todas', tarefasController.listarTodas);
tarefasRouter.get(
  '/tarefa/:id',
  verificarIdTarefaMiddleware,
  tarefasController.listarPorId,
);
tarefasRouter.post('/criar-tarefa', vericarDadosTarefaMiddleware , tarefasController.criarNovaTarefa);
tarefasRouter.put(
  '/atualizar-tarefa/:id',
  verificarIdTarefaMiddleware,
  tarefasController.atualizarTarefa,
);
tarefasRouter.delete(
  '/deletar-tarefa/:id',
  verificarIdTarefaMiddleware,
  tarefasController.deletarTarefa,
);

export default tarefasRouter;
