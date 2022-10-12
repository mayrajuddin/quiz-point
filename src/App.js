import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './layout/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Topic from './components/Topic/Topic';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quizes from './components/Quizes/Quizes';
import Error from './components/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topic></Topic>
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quizes/:topicId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <Quizes></Quizes>
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
