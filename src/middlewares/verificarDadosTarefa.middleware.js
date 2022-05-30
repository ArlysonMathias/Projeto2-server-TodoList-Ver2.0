import {conectarAoDatabase} from "../database/index.js";

const vericarDadosTarefaMiddleware = (req,res,next)=>{
    const {atividade} = req.body;
    if(!atividade){
        return res.status(404).send("Preencha todos os campos")
    }

    next()
}

export default vericarDadosTarefaMiddleware
