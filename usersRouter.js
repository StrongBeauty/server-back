const {getUsers, addUser} = require("./repo");
const express = require("express");


const router = express.Router()

// middleware that is specific to this router
router.use( timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})
//setting express-app
router.get('/', async (req, res) => {
    const users = await getUsers()
    const search = req.query.search
    if (!!search) {
        users.filter(u => (u.name.indexOf(search) > -1))
    }
    res.send(users)
})

router.get('/:id', async (req, res) => {
    const users = await getUsers()
    let user = users.find(u => +u.id === +req.params.id)
    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
})

router.post('/', async (req, res) => {
    const result = await addUser(req.body.name)
    res.send({success: true})
})

module.exports = router;
