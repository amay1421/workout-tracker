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
        {
            "$push": { "exercises": req.body },
            "$inc": {"totalDuration": req.body.duration}
    })
    .then( result => {
        console.log("Exercise added successfully!")
        res.send(result)
    })

})

router.get("/api/workouts/range", function (req,res){
    db.Workout.find({})
    .then( result => {
        console.log(result)
        res.send(result)
    })
})


module.exports = router;