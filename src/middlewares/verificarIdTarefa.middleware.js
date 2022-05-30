import Tarefa from '../models/tarefas.model.js';
import mongoose from 'mongoose';

const verificarIdTarefaMiddleware =  async (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const tarefa =  await Tarefa.findById(id);

  if (!tarefa) {
    return res.status(404).send('Tarefa não encontrada');
  }
  next();
};

export default verificarIdTarefaMiddleware;
