import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SplashPage from './components/SplashPage/SplashPage';
import * as sessionActions from './store/session';
import MainPage from './components/MainPage/MainPage';
import SignUp from './components/SignUpForm/SignUp';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  const cur = useSelector((state) => state.session.user);

  return (
    <>
    {cur ?
      <Switch>
        <NavigationBar user={cur}/>
        <Route path='/journey'>

        </Route>
        <Route path='/cirriculum'>

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
