import MainLayout from '@/components/templates/main-layout/main-layout.component';
import { UserForm } from '@/components/organisms/user-form';

const CreateUserPage = () => {
  return (
    <MainLayout>
      <div className="create-user-page">
        <UserForm />
      </div>
    </MainLayout>
  );
};

export default CreateUserPage;
