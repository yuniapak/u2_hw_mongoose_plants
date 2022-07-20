const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/index.js')

router.get('/', (req, res) => res.send('Landing page'))
router.get('/plants', controllers.getAllPlants)
router.get('/plants/:id', controllers.getPlantById)
router.put('/plants/:id', controllers.updatePlant)
router.delete('/plants/:id', controllers.deletePlant)

router.post('/plants', controllers.createPlant)
module.exports = router
