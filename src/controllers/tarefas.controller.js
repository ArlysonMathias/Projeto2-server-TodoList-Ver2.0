import TarefasService from '../services/tarefas.services.js';

const tarefasService = new TarefasService();

class TarefasController {
  async listarTodas(req, res) {
    const tarefas = await tarefasService.listarTodas();

    res.send(tarefas);
  }
  async listarPorId(req, res) {
    const id = req.params.id;
    try {
      const tarefa = await tarefasService.listasTarefaPorId({ id });

      res.send(tarefa);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }
  async criarNovaTarefa(req, res) {
    const { atividade } = req.body;

    try {
      const novaTarefa = await tarefasService.criarNovaTarefa({ atividade });

      res.status(201).send(novaTarefa);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('Tarefa já cadastrada');
      }
    }
  }
  async atualizarTarefa(req, res) {
    const { atividade } = req.body;
    const id = req.params.id;

    try {
      const tarefaAtualizada = await tarefasService.atualizarTarefa({
        atividade,
        id,
      });

      res.send(tarefaAtualizada);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('Tarefa já cadastrada');
      }
    }
  }
  async deletarTarefa(req, res) {
    const id = req.params.id;

    const tarefa = await tarefasService.deletarTarefa({ id });

    res.status(200).send(tarefa);
  }
}

export default TarefasController;
