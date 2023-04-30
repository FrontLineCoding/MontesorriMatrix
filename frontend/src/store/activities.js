const SET_ACTIVITIES = 'activities/set_activities'

const setActivities = (activities) => {
    return {
      type: SET_ACTIVITIES,
      payload: activities
    }
  }


export const getActivities = () => async (dispatch) => {
    const promise = await fetch(`/api/activities`);
    if(promise.ok){
        const promisedActivities = await promise.json();
        dispatch(setActivities(promisedActivities))
    }
}

const initialState = {};

const activityReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_ACTIVITIES:
      newState = Object.assign({}, state);
      newState = action?.payload;
      return newState;
    default:
      return state;
  }
};

export default activityReducer;
