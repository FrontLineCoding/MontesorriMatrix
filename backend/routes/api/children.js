const express = require('express');
const { Guide, Child } = require('../../db/models');

const router = express.Router();


router.get('/guides/:guideId', async (req, res) => {
    const {guideId} = req.params;

    const guideChildren = await Child.findAll({
        where : {guideId: guideId},
        attributes: {
         exclude: ['childId']
        }
    })

    const payload = {
        children : guideChildren
    }

    return res.json(payload);
})

router.get('/:childId', async (req, res) => {
    const {childId} = req.params;

    const child = await Child.findOne({
        where : {id: childId},
        attributes: {
         exclude: ['childId']
        }

    })

    return res.json(child);
})

module.exports = router;
