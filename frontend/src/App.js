import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SplashPage from './components/SplashPage/SplashPage';
import * as sessionActions from './store/session';
import MainPage from './components/MainPage/MainPage';
import SignUp from './components/SignUpForm/SignUp';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Journey from './components/Journey/Journey';
import ChildrenListOpen from './components/ChildrenListOpen/ChildrenListOpen';
import ChildrenOptions from './components/ListChildren/ChildrenOptions';
import { getActivities } from './store/activities';
import Cirriculum from './components/Cirriculum/Cirriculum';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {

    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getActivities());
  }, [dispatch]);
  const cur = useSelector((state) => state.session.user);
  return (
    <>
    {cur ? <><ChildrenListOpen user={cur}/> <ChildrenOptions /> </> : <></>}
    {cur ?
      <Switch>
        <Route exact path='/journey'>
          <Journey></Journey>
        </Route>
        <Route path='/cirriculum'>
          <Cirriculum></Cirriculum>
        </Route>
        <Route path='/allergies'>

        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch> :
      <Switch>
        <Route exact path='/'><SplashPage/></Route>
        <Route path='/sign-up'>
          <SignUp />
        </Route>
      </Switch>
      }

    </>
  );
}

export default App;
