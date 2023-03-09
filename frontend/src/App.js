import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SplashPage from './components/SplashPage/SplashPage';
import * as sessionActions from './store/session';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  const cur = useSelector((state) => state.session.user);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <SplashPage></SplashPage>
        </Route>
      </Switch>
    </>
  );
}

export default App;
