import Tarefa from '../models/tarefas.model.js';

class TarefasService {
  async listarTodas() {
    const tarefas = await Tarefa.find();

    if (tarefas.length == 0) {
      throw { status: 404, message: 'Nenhuma tarefa encontrada' };
    }

    return tarefas;
  }
  async listasTarefaPorId({ id }) {
    const tarefaSelecionada = await Tarefa.findById({ _id: id });

    return tarefaSelecionada;
  }
  async criarNovaTarefa({ atividade }) {
    const novaTarefa = {
      atividade,
    };

    try {
      const tarefa = await Tarefa.create(novaTarefa);
      return tarefa;
    } catch (error) {
      throw error;
    }
  }
  async atualizarTarefa({ atividade, id }) {
    const tarefaAtualizada = {
      atividade,
    };

    try {
      await Tarefa.updateOne({ _id: id }, tarefaAtualizada);

      const tarefa = await Tarefa.findById(id);

      return tarefa;
    } catch (error) {
      throw error;
    }
  }
  async deletarTarefa({ id }) {
    const tarefa = await Tarefa.findByIdAndDelete(id);

    return tarefa;
  }
}

export default TarefasService;
