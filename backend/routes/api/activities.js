const express = require('express');
const { Activity, Child_Activity } = require('../../db/models');

const router = express.Router();


router.get('/', async (req, res) => {

    const activities = await Activity.findAll({
        attributes : {
            exclude: ['activityId']
        }
    })

    return res.json(activities);
})


module.exports = router;
