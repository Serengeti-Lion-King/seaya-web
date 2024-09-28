import MainPage from '@pages/MainPage/MainPage';
import TerminalCongestionCheckPage from '@pages/TerminalCongestionCheckPage';
import VesselOperationStatusPage from '@pages/VesselOperationStatusPage';
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
  {
    path: '/vessel-operation-status-page',
    element: <VesselOperationStatusPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
