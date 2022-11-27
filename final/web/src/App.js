import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import PostsPage from './pages/Posts';
import ProfilePage from './pages/Profile';


const firebaseConfig = {
  apiKey: "AIzaSyAsc41donWEV2yMWXDkbUiWluuOZNkKAtw",
  authDomain: "final-2a68a.firebaseapp.com",
  projectId: "final-2a68a",
  storageBucket: "final-2a68a.appspot.com",
  messagingSenderId: "502670223238",
  appId: "1:502670223238:web:c79426369a8c619bca2e07"
};

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <PostsPage
        />
      ),
    },
    {
      path: '/login',
      element: (
        <LoginPage
        />
      ),
    },
    {
      path: '/signup',
      element: (
        <SignupPage
        />
      ),
    },
    {
      path: '/profile',
      element: (
        <ProfilePage
        />
      ),
    }
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
