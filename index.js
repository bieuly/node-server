import express from 'express'
import pokemon from 'pokemongo-json-pokedex/output/pokemon.json'

const port = 3000
const app = express();

app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

app.listen(port, () => console.log(`Server started on port ${port}`));