import { csrfFetch } from "./csrf";

const SET_CHILD_ACTIVITIES = 'child/set_activities';

const setChildActivities = (activities) => {
    return {
      type: SET_CHILD_ACTIVITIES,
      payload: activities
    }
  }
const add = (activities) => {
  return {
    type: SET_CHILD_ACTIVITIES,
    payload: activities
  }
}
const edit = (activities) => {
  return {
    type: SET_CHILD_ACTIVITIES,
    payload: activities
  }
}

export const getChildActivities = (childId) => async (dispatch) => {
    const promise = await fetch(`/api/children/${childId}/activities`);
    if(promise.ok){
        const promisedActivities = await promise.json();
        dispatch(setChildActivities(promisedActivities))
    }
}

export const addChildActivity = (childId, activityId) => async (dispatch) => {
  const promise = await csrfFetch(`/api/children/${childId}/activities/${activityId}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({childId, activityId})
  });

  if(promise.ok){
    const childActivity = await promise.json();
    dispatch(add(childActivity));
    return childActivity;
  }
}

export const editChildActivity = (childId, activityId, masteryLevel) => async (dispatch) => {
  const promise = await csrfFetch(`/api/children/${childId}/activities/${activityId}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({childId, activityId, masteryLevel})
  });

  if(promise.ok){
    const childActivity = await promise.json();
    dispatch(edit(childActivity));
    return childActivity;
  }
}

const initialState = {};

const childActivityReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_CHILD_ACTIVITIES:
      newState = Object.assign({}, state);
      newState = action?.payload;
      return newState;
    default:
      return state;
  }
};

export default childActivityReducer;
