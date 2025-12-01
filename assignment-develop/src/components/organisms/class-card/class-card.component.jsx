import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchTodayClassesRequest } from '@/logic/classes/ducks/classes.slice';
import {
  selectClassesToday,
  selectClassesLoading,
  selectClassesError,
} from '@/logic/classes/ducks/classes.selectors';
import { userDetailsSelector } from '@/logic/user/ducks/user-selectors';
import Label from '@/components/atoms/label/label.component';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import './class-card.component.scss';

const DailyClassesCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(userDetailsSelector);
  const classesToday = useSelector(selectClassesToday);
  const loading = useSelector(selectClassesLoading);
  const error = useSelector(selectClassesError);

  const safeClassesToday = Array.isArray(classesToday) ? classesToday : [];

  const canOpenCall =
    user.role === 'teacher' ||
    user.role === 'secretary' ||
    user.role === 'admin';

  useEffect(() => {
    dispatch(fetchTodayClassesRequest());
  }, [dispatch]);

  const handleClassClick = classId => {
    navigate(`operations/call/${classId}`);
  };

  return (
    <div className="daily-classes-card">
      <Label text="Classes" className="title" />

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && safeClassesToday.length === 0 && (
        <Alert severity="info">No classes scheduled for today.</Alert>
      )}

      {!loading && safeClassesToday.length > 0 && (
        <ul className="class-list">
          {safeClassesToday.map(
            ({ id, group, subject, startTime, endTime, room }) => (
              <li
                key={id}
                className={`class-item ${
                  canOpenCall ? 'clickable' : 'disabled'
                }`}
                onClick={() => canOpenCall && handleClassClick(id)}
                style={{ cursor: canOpenCall ? 'pointer' : 'not-allowed' }}
              >
                <div className="class-info">
                  <p className="class-group">
                    <strong>Group:</strong> {group}
                  </p>
                  <p className="class-subject">
                    <strong>Discipline:</strong> {subject}
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
            ),
          )}
        </ul>
      )}
    </div>
  );
};

export default DailyClassesCard;
