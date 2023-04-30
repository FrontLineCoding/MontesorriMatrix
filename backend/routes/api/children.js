const express = require('express');
const { Guide, Child, Child_Activity } = require('../../db/models');

const router = express.Router();


router.get('/guides/:guideId', async (req, res) => {
    const {guideId} = req.params;

    const guideChildren = await Child.findAll({
        where : {guideId: guideId},
        attributes: {
         exclude: ['childId'],
        },

    })

    const payload = {
        children : guideChildren
    }

    return res.json(payload);
})

router.get('/:childId/activities', async (req, res) => {
    const {childId} = req.params;

    const activities = await Child_Activity.findAll({
        where : {childId : childId}
    })

    const payload = {
        completedActivities : activities
    }

    return res.json(activities);
});

router.get('/:childId', async (req, res) => {
    const {childId} = req.params;

    const child = await Child.findOne({
        where : {id: childId},
        attributes: {
         exclude: ['childId']
        },
    })

    return res.json(child);
});

router.post('/:childId/activities/:activityId', async (req, res) => {
    const {childId, activityId} = req.params;

    const addedChildActivity = await Child_Activity.create({
        childId: parseInt(childId),
        activityId: parseInt(activityId),
        masteryLevel: 'I'
    });
    await addedChildActivity.save();

    const activities = await Child_Activity.findAll({
        where : {childId : childId}
    })

    return res.json(activities);
});

router.put('/:childId/activities/:activityId', async (req, res) => {
    const {childId, activityId, masteryLevel} = req.body;

    const editingChildActivity = await Child_Activity.findOne({
        where : {
            childId,
            activityId
        }
    });
    editingChildActivity.masteryLevel = masteryLevel;
    await editingChildActivity.save();

    const activities = await Child_Activity.findAll({
        where : {childId : childId}
    })

    return res.json(activities);
});
module.exports = router;
