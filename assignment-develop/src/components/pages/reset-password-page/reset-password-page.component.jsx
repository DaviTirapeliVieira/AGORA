import PasswordRecoveryForm from '@/components/organisms/reset-password-form/reset-password-form.component';

const propTypes = {};

const ResetPasswordPage = () => {
  return (
    <div className="login-page">
      <PasswordRecoveryForm />
    </div>
  );
};

ResetPasswordPage.propTypes = propTypes;

export default ResetPasswordPage;
