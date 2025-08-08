
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import BarChartData from './BarChartData';
import DummyData from './DummyData';

const localizer = momentLocalizer(moment);

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events = Object.keys(DummyData).map(date => ({
    title: `Data available`,
    start: moment(date, 'DD-MM-YYYY').toDate(),
    end: moment(date, 'DD-MM-YYYY').toDate(),
    allDay: true,
  }));

  const handleSelectSlot = ({ start }) => {
    const dateStr = moment(start).format('DD-MM-YYYY');
    setSelectedDate(dateStr);
    setIsModalOpen(true);
  };

  return (
    <div className="App" style={{ height: '100vh', padding: 20 }}>
      <h1 className="text-center text-xl font-bold mb-4">Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        selectable
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelectSlot}
        style={{ height: 500 }}
      />

      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} ariaHideApp={false}>
        <BarChartData
          date={selectedDate}
          data={DummyData[selectedDate] || []}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default App;





