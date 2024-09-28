import MainPage from '@pages/MainPage/MainPage';
import TerminalCongestionCheckPage from '@pages/TerminalCongestionCheckPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/terminal-congestion-check-page',
    element: <TerminalCongestionCheckPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
