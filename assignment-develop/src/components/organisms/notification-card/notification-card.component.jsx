import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Label from '@/components/atoms/label/label.component';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import './notification-card.component.scss';

const NotificationCard = ({ notifications = [], loading, error , fetchNotifications }) => {
  useEffect(() => {
    if (fetchNotifications) {
      fetchNotifications();
    }
  }, [fetchNotifications]);

  return (
    <div className="notification-card">
      <Label text="Notificações" className="title" />

      {loading && <CircularProgress />}

      {error && <Alert severity="error">{error}</Alert>}

      {!loading && notifications.length === 0 && !error && (
        <p>Sem notificações no momento.</p>
      )}

      {!loading && notifications.length > 0 && (
        <ul className="notification-list">
          {notifications.map(({ id, title, time }) => (
            <li key={id} className="notification-item">
              <p className="notification-title">{title}</p>
              <span className="notification-time">{time}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

NotificationCard.propTypes = {
  notifications: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchNotifications: PropTypes.func.isRequired,
};

export default NotificationCard;
