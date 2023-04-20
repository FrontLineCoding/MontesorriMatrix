
const SET_CHILD = 'child/set_child';

const setChild = (child) => {
  return {
    type: SET_CHILD,
    payload: child,
  };
};


export const getChild = (childId) => async (dispatch) => {
  const promise = await fetch(`/api/children/${childId}`);
  if(promise.ok){
    const promisedChild = await promise.json();
    dispatch(setChild(promisedChild));
  }
};



const initialState = {};

const childReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_CHILD:
      newState = Object.assign({}, state);
      newState = action?.payload;
      return newState;
    default:
      return state;
  }
};

export default childReducer;
