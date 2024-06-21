import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import TableComponent from './components/TableComponent';
import ChartComponent from './components/ChartComponent';
import CalendarComponent from './components/CalendarComponent';
import KanbanComponent from './components/KanbanComponent';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    if (!darkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  };

  return (
    <div className={`App ${darkTheme ? 'dark-theme' : ''}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="theme-toggle" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </header>
      <div className="App-content">
        <nav>
          <ul>
            <li><a href="#table">Table</a></li>
            <li><a href="#chart">Chart</a></li>
            <li><a href="#calendar">Calendar</a></li>
            <li><a href="#kanban">Kanban</a></li>
          </ul>
        </nav>
        <section id="table" className="table-container">
          <TableComponent />
        </section>
        <section id="chart" className="chart-container">
          <ChartComponent />
        </section>
        <section id="calendar" className="calendar-container">
          <CalendarComponent />
        </section>
        <section id="kanban" className="kanban-container">
          <KanbanComponent />
        </section>
      </div>
    </div>
  );
}

export default App;
