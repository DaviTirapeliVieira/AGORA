import { LoginForm } from '@/components/organisms/login-form';

import './login-page.component.scss';

const propTypes = {};

const LoginPage = () => {
  return (
    <div className="login-page">
      <LoginForm />
    </div>
  );
};

LoginPage.propTypes = propTypes;

export default LoginPage;
