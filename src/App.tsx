import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from '@pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/mainpage',
    element: <MainPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
