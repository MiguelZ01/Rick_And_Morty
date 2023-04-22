const express = requir('express')
let myFavorites = []

const postFav = (req, res) => {
    const { personaje } = req.body

    const favorite = {
        personaje
    }

    myFavorites.push(favorite)
    res.json(myFavorites)
}

const deleteFav = (req, res) => {
    const { id } = req.params
    myFavorites.filter((favorite == id))
}

res.json(myFavorites)

module.exports = {
    postFav,
    deleteFav
}