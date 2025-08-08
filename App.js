
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import BarChartData from './BarChartData';
import DummyData from './DummyData';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedDate, openModal, closeModal } from './store/CalenderSlice';

const localizer = momentLocalizer(moment);

const App = () => {

  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.calendar.selectedDate);
  const isModalOpen = useSelector(state => state.calendar.modalOpen);

  const events = Object.keys(DummyData).map(date => ({
    title: `Data available`,
    start: moment(date, 'DD-MM-YYYY').toDate(),
    end: moment(date, 'DD-MM-YYYY').toDate(),
    allDay: true,
  }));

  const handleSelectSlot = ({ start }) => {
    const dateStr = moment(start).format('DD-MM-YYYY');
    dispatch(setSelectedDate(dateStr));
    dispatch(openModal());
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

      <Modal isOpen={isModalOpen} onRequestClose={() =>  dispatch(closeModal())} ariaHideApp={false}>
        <BarChartData
          date={selectedDate}
          data={DummyData[selectedDate] || []}
          onClose={() => dispatch(closeModal())}
        />
      </Modal>
    </div>
  );
};

export default App;






