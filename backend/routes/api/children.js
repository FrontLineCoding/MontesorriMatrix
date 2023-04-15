const express = require('express');
const { Guide, Child } = require('../../db/models');

const router = express.Router();


router.get('/guides/:guideId', async (req, res) => {
    console.log('************************');
    console.log('************************');
    console.log('************************');
    console.log('************************');
    console.log('************************');
    console.log('************************');
    const {guideId} = req.params;
    console.log(guideId);

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

module.exports = router;
