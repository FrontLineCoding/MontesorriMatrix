import LoginForm from '../LoginForm/LoginForm';
import './SplashPage.css'

const SplashPage = () => {
  return (
    <>
      <div className='splash-page-main-container'>
        <div className='splash-page-left-container'>Managing a classroom made simple...</div>
        <div className='splash-page-right-container'>
          <div><LoginForm /></div>
          <div>No Account Registered?  Sign Up</div>
        </div>
      </div>
    </>
  );
};

export default SplashPage;
