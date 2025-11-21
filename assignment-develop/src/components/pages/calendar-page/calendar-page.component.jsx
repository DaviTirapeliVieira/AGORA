import MainLayout from '@/components/templates/main-layout/main-layout.component';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useSelector, useDispatch } from 'react-redux';
import { addEventRequest } from '@/logic/calendar/ducks/calendar.slice';
import {
  selectCalendarEvents,
  selectCalendarLoading,
  selectCalendarError,
} from '@/logic/calendar/ducks/calendar.selectors';
import { CircularProgress, Alert } from '@mui/material';
import './calendar-page.component.scss';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectCalendarEvents);
  const loading = useSelector(selectCalendarLoading);
  const error = useSelector(selectCalendarError);

  const safeEvents = Array.isArray(events) ? events : [];

  const handleDateClick = info => {
    const title = prompt('Título do evento:');
    if (title) {
      dispatch(
        addEventRequest({
          id: Date.now().toString(),
          title,
          start: info.dateStr,
        }),
      );
    }
  };

  return (
    <MainLayout>
      <div className="calendar-wrapper">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          events={safeEvents}
        />
      </div>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
    </MainLayout>
  );
};

export default CalendarPage;
