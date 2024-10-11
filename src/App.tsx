import ImportExportProgressCheckPage from '@pages/ImportExportProgressCheckPage/ImportExportProgressCheckPage';
import LoginPage from '@pages/LoginPage/LoginPage';
import MainPage from '@pages/MainPage/MainPage';
import TerminalCongestionCheckPage from '@pages/TerminalCongestionCheckPage';
import VesselOperationStatusPage from '@pages/VesselOperationStatusPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import MobileWebLayout from './layouts/MobileWebLayout/MobileWebLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MobileWebLayout />, // 공통 레이아웃을 적용합니다.
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'login-page',
        element: <LoginPage />,
      },
      {
        path: 'terminal-congestion-check-page',
        element: <TerminalCongestionCheckPage />,
      },
      {
        path: 'vessel-operation-status-page',
        element: <VesselOperationStatusPage />,
      },
      {
        path: 'import-export-progress-check-page',
        element: <ImportExportProgressCheckPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
