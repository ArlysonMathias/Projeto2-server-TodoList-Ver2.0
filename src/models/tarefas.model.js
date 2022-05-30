import mongoose from 'mongoose';


const TarefaSchema = new  mongoose.Schema({
  atividade: { type: String, required: true, unique: true },
},{versionKey:false});

const Tarefa = mongoose.model('tarefas',TarefaSchema);

export default Tarefa;
