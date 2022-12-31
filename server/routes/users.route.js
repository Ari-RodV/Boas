const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({ users: ['Ari', 'Éowyn', 'Mari', 'Carlo'] })
})

module.exports = router