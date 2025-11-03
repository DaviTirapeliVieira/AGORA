import { connect } from 'react-redux';
import { fetchNotificationsRequest } from '@/logic/notifications/ducks/notifications-slice';
import {
  notificationsSelector,
  notificationsLoadingSelector,
  notificationsErrorSelector,
} from '@/logic/notifications/ducks/notifications-selectors';
import NotificationCard from './notification-card.component';

const mapStateToProps = state => ({
  notifications: notificationsSelector(state),
  loading: notificationsLoadingSelector(state),
  error: notificationsErrorSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchNotifications: () => dispatch(fetchNotificationsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationCard);
