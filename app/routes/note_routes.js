let notes = [{
  id: 1,
  note: "nota1"
},
{
  id: 2,
  note: "nota2"
},
{
  id: 3,
  note: "nota3"
}];

// C R U D
// CREATE.
module.exports = function(app, db) {

  // when app receive post() request to this path '/notes' it will execute the code inside the callback.
  app.post('/notes', (req, res) => {
    // USING req PARAMETER
    console.log('req->', req);
    //console.log('res------------->', res);
    // USING res PARAMETER we will create the note here.
    //res.send('done') // when this is executed we are doing post request to the /notes route.
    //console.log('req body-->', req.body)
    res.json(({
      data: 'recibido'
    })) // when this is executed we are doing post request to the /notes route.
  })

  app.get('/notes', (req, res) => {
    console.log('get req->', req.query)
    res.json(notes);
  })

  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    console.log('id->', id);

    const selectedNote = notes.filter((note) => note.id === Number(id))

    if(selectedNote.length === 0) {
      res.json({
        error: 'note not fount'
      })
    }

    res.json(selectedNote);
  })
}

//note: express canot process enconded form in their URL. but body-parser help us.
