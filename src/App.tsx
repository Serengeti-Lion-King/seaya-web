import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from '@pages/MainPage';
import TerminalCongestionCheckPage from '@pages/TerminalCongestionCheckPage';
import './App.scss';

const router = createBrowserRouter([
  {
    path: '/mainpage',
    element: <MainPage />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <TerminalCongestionCheckPage />
    </div>
  );
};

export default App;
