import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './layout/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Topic from './components/Topic/Topic';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quizes from './components/Quizes/Quizes';

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
      element: <div> <h2>url not found </h2></div>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
