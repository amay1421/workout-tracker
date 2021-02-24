const router = require("express").Router()
const path = require("path")
const db = require("../models")

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
    .then( result => {
        console.log(result)
        res.send(result)
    })
})

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then( result => {
        console.log(result)
        res.send(result)
    })
})

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate({_id: req.params.id},
        {"$push": { "exercises": req.body }})
    .then( result => {
        console.log("Exercise added successfully!")
        res.send(result)
    })
})

router.post("/api/workouts/range", function (req,res){
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => {
        res.json(err)
    })
})


module.exports = router;