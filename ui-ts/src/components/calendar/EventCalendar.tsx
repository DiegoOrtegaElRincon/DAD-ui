import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './EventCalendar.css';

interface Event {
  id: number;
  title: string;
  date: Date;
}

const EventCalendar: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [newEventTitle, setNewEventTitle] = useState<string>('');

  const handleDateChange = (value: Date | Date[] | null) => {
    if (value instanceof Date) {
      setDate(value);
    }
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const eventsForDay = events.filter(
        (event) =>
          event.date.getDate() === date.getDate() &&
          event.date.getMonth() === date.getMonth() &&
          event.date.getFullYear() === date.getFullYear()
      );

      return (
        <div>
          {eventsForDay.map((event) => (
            <div key={event.id}>{event.title}</div>
          ))}
        </div>
      );
    }
    return null; // Devolver nulo para evitar duplicación en otras vistas
  };

  const handleCreateEvent = () => {
    const newEventId = events.length + 1;
    const newEvent: Event = {
      id: newEventId,
      title: newEventTitle,
      date: date,
    };

    // Verificar si el evento ya existe en la fecha seleccionada
    const isEventExist = events.some(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear() &&
        event.title === newEventTitle
    );

    if (!isEventExist) {
      setEvents([...events, newEvent]);
      setNewEventTitle('');
    }
  };

  return (
    <div className='container'>
      <div className='box box1'>
        <div className='event-form'>
          <input
            type='text'
            placeholder='Título del evento'
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
          />
          <button onClick={handleCreateEvent}>Crear Evento</button>
        </div>
        <div className='calendar-container'>
          <Calendar
            onChange={handleDateChange as any}
            value={date}
            tileContent={tileContent}
          />
        </div>
        <ul className='event-list'>
          {events.map((event) => (
            <li key={event.id} className='event-item box box5'>
              <strong>{event.title}</strong>{event.date.toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventCalendar;
