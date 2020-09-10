const express = require('express');

const PORT = 3000;
const server = express();

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});


const routerUsers = express.Router(); // instanciando o creando unrotuter
const routerMovies = express.Router(); 

//////////////////////////////////

routerUsers.get('/quierousuarios', (req, res) => { //respuesta
  res.send('Hello Upgrade Hub!');
});

///////////////////////////////////////

routerMovies.get('/movies', (req, res) => {             //entrega la peticion de lo q tien guardado en movies
  const movies = ['Harry Potter', 'Titanic', 'Back to the Future'];
  res.send(movies);
});



router.get('/movies/:name', (req, res) => {
	const name = req.params.name;
	console.log(name);
});

////////////////////////////
server.use('/usu', routerUsers);
server.use('/peli', routerMovies);
////////////////////////////////////



server.listen(PORT, () => { //respuesta  escucha petitciones
  console.log(`Server running in http://localhost:${PORT}`);
});