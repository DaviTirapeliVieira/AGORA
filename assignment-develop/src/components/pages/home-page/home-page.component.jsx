import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  userDetailsSelector,
  userDetailsLoadingSelector,
  userDetailsErrorSelector,
} from '@/logic/user/ducks/user-selectors';
import {
  selectNotifications,
  selectNotificationsLoading,
  selectNotificationsError,
} from '@/logic/notifications/ducks/notifications-selectors';
import { fetchUserRequest } from '@/logic/user/ducks/get-user-slice';
import MainLayout from '@/components/templates/main-layout/main-layout.component';
import UserCard from '@/components/organisms/user-card/user-card.component';
import NotificationCard from '@/components/organisms/notification-card/notification-card.component';
import DailyClassesCard from '@/components/organisms/class-card/class-card.component';
import './home-page.component.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(userDetailsSelector);
  const loadingUser = useSelector(userDetailsLoadingSelector);
  const errorUser = useSelector(userDetailsErrorSelector);
  const notifications = useSelector(selectNotifications);
  const loadingNotifications = useSelector(selectNotificationsLoading);
  const errorNotifications = useSelector(selectNotificationsError);

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);

  return (
    <MainLayout>
      <div className="card-container">
        <UserCard user={user} loading={loadingUser} error={errorUser}/>
        <NotificationCard notifications={notifications} loading={loadingNotifications} error={errorNotifications}/>
        <DailyClassesCard />
      </div>
    </MainLayout>
  );
};

export default HomePage;
