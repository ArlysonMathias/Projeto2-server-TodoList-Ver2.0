import mongoose from 'mongoose';

export const conectarAoDatabase  = ()=>{
  mongoose.connect('mongodb://localhost:27017/TodoList_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("Banco de dados conectado")
  }).catch((err) =>{
    console.log(`Falha na conexão com o banco de dados: ${err}`)
  })
}
