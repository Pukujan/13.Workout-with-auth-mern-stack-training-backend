const express = require('express')
const {
  createWorkout,
  getSingleWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout

} = require('../controllers/workoutController')

const router = express.Router()


//get all workouts

router.get('/', getWorkouts)

//Get single workout
router.get('/:id', getSingleWorkout)

//Post new workout
router.post('/', createWorkout)

//Delete new workout
router.delete('/:id', deleteWorkout)


//Update new workout
router.patch('/:id', updateWorkout)



module.exports = router