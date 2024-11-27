import ImportExportProgressCheckPage from '@pages/ImportExportProgressCheckPage/ImportExportProgressCheckPage';
import LoginPage from '@pages/LoginPage/LoginPage';
import SignUpPage from '@pages/SignUpPage/SignUpPage';
import FindIdPage from '@pages/FindIdPage/FindIdPage';
import MainPage from '@pages/MainPage/MainPage';
import TerminalCongestionCheckPage from '@pages/TerminalCongestionCheckPage/TerminalCongestionCheckPage';
import VesselOperationStatusPage from '@pages/VesselOperationStatusPage';
import SignUpCompletePage from '@pages/SignUpComplePage/SignUpCompletePage'; // 회원가입 완료 페이지 추가
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import MobileWebLayout from './layouts/MobileWebLayout/MobileWebLayout';
import ServiceLayout from './layouts/ServiceLayout/ServiceLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MobileWebLayout />, // 공통 레이아웃을 적용합니다.
    children: [
      {
        path: 'login-page',
        element: <LoginPage />,
      },
      {
        path: 'find-id-page',
        element: <FindIdPage />,
      },
      {
        path: 'sign-up-page',
        element: <SignUpPage />,
      },
      {
        path: 'sign-up-complete',
        element: <SignUpCompletePage />,
      },
      {
        element: <ServiceLayout />,
        children: [
          {
            path: '',
            element: <MainPage />,
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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
