import { csrfFetch } from './csrf';

const GET_GUIDE_CHILDREN = 'guide/get_guide_children';

const setChildren = (children) => {
  return {
    type: GET_GUIDE_CHILDREN,
    payload: children,
  };
};


export const getGuideChildren = (guideId) => async (dispatch) => {
    console.log('guide store');
  const promise = await fetch(`/api/children/guides/${guideId}`);
  console.log(promise);
  if(promise.ok){
    const promisedChildren = await promise.json();
    dispatch(setChildren(promisedChildren));
  }
};



const initialState = {};

const guideReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_GUIDE_CHILDREN:
      newState = Object.assign({}, state);
      console.log('in the reducer: ', newState);
      newState = action?.payload;
      return newState;
    default:
      return state;
  }
};

export default guideReducer;
