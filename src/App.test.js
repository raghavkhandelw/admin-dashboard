import { render, screen } from '@testing-library/react';
import App from './App';

test('renders toggle theme button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/toggle theme/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  const tableLink = screen.getByText(/table/i);
  const chartLink = screen.getByText(/chart/i);
  const calendarLink = screen.getByText(/calendar/i);
  const kanbanLink = screen.getByText(/kanban/i);
  
  expect(tableLink).toBeInTheDocument();
  expect(chartLink).toBeInTheDocument();
  expect(calendarLink).toBeInTheDocument();
  expect(kanbanLink).toBeInTheDocument();
});
