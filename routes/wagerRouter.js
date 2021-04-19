const express = require("express")
const wagerRouter = express()
const Wager = require("../models/wager.js")

wagerRouter.get("/", (req, res, next) => {
    Wager.find((err, bets) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bets)
    })
})
module.exports = wagerRouter