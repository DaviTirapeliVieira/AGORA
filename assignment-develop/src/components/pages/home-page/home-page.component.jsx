import MainLayout from '@/components/templates/main-layout/main-layout.component';
import UserCard from '@/components/organisms/user-card/user-card.component';
import NotificationCard from '@/components/organisms/notification-card/notification-card.component';
import './home-page.component.scss';

const HomePage = () => {
  const userInformation = {
    name: "Name",
    email: "Email",
    phone: "Phone",
    cpf: "CPF",
    address: "Address",
    date: "Date of Birth",
  };
  const userData = {
    name: "Davi Vieira",
    email: "developer@example.com",
    phone: "14 99999-9999",
    cpf: "123.456.789-00",
    address: "123 Main St, Anytown, USA",
    date: "12/03/2008",
    image: "/icon-user.png",
  };
  return (
    <MainLayout>
      <div className="card-container">
        <UserCard user={userData} userInformation={userInformation} />
        <NotificationCard />
      </div>
    </MainLayout>
  );
};

export default HomePage;
