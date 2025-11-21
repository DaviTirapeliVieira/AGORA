import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodayClassesRequest } from '@/logic/classes/ducks/classes.slice';
import {
  selectClassesToday,
  selectClassesLoading,
  selectClassesError,
} from '@/logic/classes/ducks/classes.selectors';
import Label from '@/components/atoms/label/label.component';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import './class-card.component.scss';

const DailyClassesCard = () => {
  const dispatch = useDispatch();

  const classesToday = useSelector(selectClassesToday);
  const loading = useSelector(selectClassesLoading);
  const error = useSelector(selectClassesError);

  const safeClassesToday = Array.isArray(classesToday) ? classesToday : [];

  useEffect(() => {
    dispatch(fetchTodayClassesRequest());
  }, [dispatch]);

  return (
    <div className="daily-classes-card">
      <Label text="Today's Classes" className="title" />

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && safeClassesToday.length === 0 && (
        <Alert severity="info">No classes scheduled for today.</Alert>
      )}

      {!loading && safeClassesToday.length > 0 && (
        <ul className="class-list">
          {safeClassesToday.map(({ id, group, subject, startTime, endTime, room }) => (
            <li key={id} className="class-item">
              <div className="class-info">
                <p className="class-group">
                  <strong>Group:</strong> {group}
                </p>
                <p className="class-subject">
                  <strong>Subject:</strong> {subject}
                </p>
              </div>
              <div className="class-time">
                <span>
                  <strong>Time:</strong> {startTime} - {endTime}
                </span>
                {room && (
                  <span className="class-room">
                    <strong>Room:</strong> {room}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DailyClassesCard;
