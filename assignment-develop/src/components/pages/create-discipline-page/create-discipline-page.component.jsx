import MainLayout from '@/components/templates/main-layout/main-layout.component';
import { DisciplineForm } from '@/components/organisms/discipline-form';

const CreateDisciplinePage = () => {
  return (
    <MainLayout>
      <div className="create-user-page">
        <DisciplineForm />
      </div>
    </MainLayout>
  );
};

export default CreateDisciplinePage;
