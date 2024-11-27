import { MobileWebLayout, ServiceLayout } from '@layouts/index';
import {
  FindIdPage,
  ImportExportProgressCheckPage,
  LoginPage,
  MainPage,
  TerminalCongestionCheckPage,
  VesselOperationStatusPage,
} from '@pages/index';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import SignUpPage from '@pages/SignUpPage/SignUpPage';
import SignUpCompletePag from '@pages/SignUpComplePage/SignUpCompletePage';
import SignUpCompletePage from '@pages/SignUpComplePage/SignUpCompletePage';

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
