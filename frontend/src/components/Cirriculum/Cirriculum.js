import React, { useEffect, useState } from 'react';
import './Cirriculum.css'
import { useDispatch, useSelector } from 'react-redux';
import { addChildActivity, editChildActivity } from '../../store/child_activities';

const Cirriculum = () => {
    const dispatch = useDispatch();
    const allActivities = useSelector(state => state.activity);
    const child = useSelector(state => state.child);
    const childsActivities = useSelector(state => state.childActivities)
    const [selectedArea, setSelectedArea] = useState('Practical Life');
    const [showAreas, setShowAreas] = useState(false);
    const [activitiesOfSelectedArea, setActivitiesOfSelectedArea] = useState([]);

    useEffect(() => {
        setActivitiesOfSelectedArea(allActivities.map(activity => {
            if(activity.area === selectedArea){
                return activity
            }else{
                return;
            }
        }))
    },[dispatch, selectedArea])


    const updateChildMasteryLevel = (activityId) => {
        const completedActivity = childsActivities.find(el => el.activityId === activityId);
        if (completedActivity) {
            if (completedActivity.masteryLevel === 'I'){
                dispatch(editChildActivity(child.id, activityId, 'P'));
            }else if(completedActivity.masteryLevel === 'P'){
                dispatch(editChildActivity(child.id, activityId, 'M'));
            }else if(completedActivity.masteryLevel === 'M'){
                dispatch(editChildActivity(child.id, activityId, '-'));
            }else if(completedActivity.masteryLevel === '-'){
                dispatch(editChildActivity(child.id, activityId, 'I'));
            }
            else{
                return 'error in Cirriculum line 36'
            }
        }else {
            dispatch(addChildActivity(child.id, activityId));
        }
    }

    //TODO: Currently has a user experience issue with rendering. I need to auto select the first child to put into the redux store
    const showMastery = (activityId) => {
        const completedActivity = childsActivities.find(el => el.activityId === activityId);
        if(completedActivity){
            return completedActivity.masteryLevel;
        }else{
            return '-'
        }
    }

    return <>
        <div className='cirriculum-main'>
            <div className='student-name-container'>
                {child.firstName} {child.lastName}
            </div>
            <div className='cirriculum-heads-up-container'>
                <div className='select-area-container'>
                    Area: {showAreas ? <div></div> : selectedArea}
                </div>
            </div>
            <div className='activities-main-container'>
                {activitiesOfSelectedArea.map(activity => {
                    if(activity?.name){
                        if(activity.id % 2 === 0){
                            return (
                                <div id={activity.id} className='activity darker'>
                                    <div className='activity-mastery' onClick={() => {updateChildMasteryLevel(activity.id)}}>
                                        {showMastery(activity.id)}
                                    </div>
                                    <div className='activity-name'>{activity.name}</div>
                                    <div className='activity-notes'>notes</div>
                                </div>
                            )
                        }else{
                            return (
                                <div id={activity.id} className='activity lighter'>
                                    <div className='activity-mastery' onClick={() => {updateChildMasteryLevel(activity.id)}}>
                                        {showMastery(activity.id)}
                                    </div>
                                    <div className='activity-name'>{activity.name}</div>
                                    <div className='activity-notes'>notes</div>
                                </div>
                            )

                        }

                    }
                })}
            </div>
        </div>
    </>
}

export default Cirriculum;
