router.get('/movies', (req, res) => {
    const movies = ['Harry Potter', 'Titanic', 'Back to the Future'];
  
    // Ahora utilizamos req.query
    const name = req.query.name;
  
    // Si no tenemos req.query.name enviaremos todas las películas
    // ya que no habrá búsqueda por parte del usuario
    if (!name) {
      res.send(movies);
    } else {
      const hasMovie = movies.some((movie) => movie.toLowerCase() === name);
  
      if (hasMovie) {
        res.send(`We have a movie with the name ${name}`);
      } else {
        res.send('We could not find the movie you are looking for!');
      }
    }
  });

