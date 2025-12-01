import MainLayout from '@/components/templates/main-layout/main-layout.component';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useSelector, useDispatch } from 'react-redux';
import { addEventRequest } from '@/logic/calendar/ducks/calendar.slice';
import { selectCalendarEvents } from '@/logic/calendar/ducks/calendar.selectors';
import { userDetailsSelector } from '@/logic/user/ducks/user-selectors';
import './calendar-page.component.scss';
import { Alert } from '@mui/material';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectCalendarEvents);
  const currentUser = useSelector(userDetailsSelector);
  const isAdmin = currentUser?.role === 'admin';

  const safeEvents = Array.isArray(events) ? events : [];

  const handleDateClick = info => {
    if (!isAdmin) {
      <Alert severity="warning">Apenas administradores podem criar eventos.</Alert>;
      return;
    }

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
    </MainLayout>
  );
};

export default CalendarPage;
