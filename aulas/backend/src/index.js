const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json()); 
app.use(routes);
/**
 * Metodos HTTP:
 *GET: Buscar/listar uma informação do back-end
 *POST: Criar uma informação no back-end
 *PUT: Alterar uma informação no back-end
 *Delete: Deletar uma informação no back-end
 */

 /**
  * Tipos de parametros:
  * Query:parametros nomeados na rota apos "?" filtros,paginação...
  * Route Params: parametros utilizados para identificar recursos
  * Request body:  corpo da requisicao
  * 
  * 
  * 
  * 
  */



app.listen(3333); 
