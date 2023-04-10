import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import LoginForm from '../LoginForm/LoginForm';
import './SplashPage.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const SplashPage = () => {
  const history = useHistory();
  const handleSignUpClick = () => {
    history.push('/sign-up')
    return (<Redirect to='/sign-up' />)
  }

  return (
    <>
      <div className='splash-page-main-container'>
        <div className='splash-page-left-container'>Managing a classroom made simple...</div>
        <div className='splash-page-right-container'>
          <div><LoginForm /></div>
          <div>No Account Registered?
            <p className='sign-up-text'
            onClick={handleSignUpClick}
            > Sign Up</p></div>
        </div>
      </div>
    </>
  );
};

export default SplashPage;
