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
    path: '/terminalcongestioncheckpage',
    element: <TerminalCongestionCheckPage />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
