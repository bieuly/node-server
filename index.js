import express from 'express'
import pokemans from 'pokemongo-json-pokedex/output/pokemon.json'

const port = 3000
const app = express();

app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/pokemon", (req, res) => {
    res.send(pokemans)
})

app.get("/pokemon/name/:name", (req, res) => {
    const name = req.params.name.toLowerCase();
    res.send(pokemans.filter(pokemon => pokemon.name.toLowerCase().includes(name)))
})

app.get("/pokemon/dex/:dex", (req, res) => {
    const dex = req.params.dex.toLowerCase();
    res.send(pokemans.filter(pokemon => pokemon.dex == dex))
})

app.listen(port, () => console.log(`Pokedex started on port ${port}`));