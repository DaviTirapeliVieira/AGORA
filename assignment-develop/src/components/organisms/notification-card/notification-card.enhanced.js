import { connect } from 'react-redux';
import { fetchNotificationsRequest } from '@/logic/notifications/ducks/notifications-slice';
import {
  selectNotifications,
  selectNotificationsLoading,
  selectNotificationsError,
} from '@/logic/notifications/ducks/notifications-selectors';
import NotificationCard from './notification-card.component';

const mapStateToProps = state => ({
  notifications: selectNotifications(state),
  loading: selectNotificationsLoading(state),
  error: selectNotificationsError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchNotifications: () => dispatch(fetchNotificationsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationCard);
