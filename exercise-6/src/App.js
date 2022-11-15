import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import './App.css';
import CreateUserPage from './pages/CreateUser';
import LoginPage from './pages/Login';
import UserProfilePage from './pages/UserProfile';
import Header from './components/Header';

const firebaseConfig = {
  apiKey: 'AIzaSyDAISmqw2SxGzsW5dLGBnDUJaqOhQoiCoo',
  authDomain: 'exercise-6-6e5cf.firebaseapp.com',
  projectId: 'exercise-6-6e5cf',
  storageBucket: 'exercise-6-6e5cf.appspot.com',
  messagingSenderId: '586814722468',
  appId: '1:586814722468:web:1634ff2b89d1b8ff6d3131',
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserProfilePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/create',
    element: <CreateUserPage />,
  },
]);

function App() {
  const [appInitialized, setAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [userInformation, setUserInformation] = useState({});

  useEffect(() => {
    initializeApp(firebaseConfig);
    setAppInitialized(true);
  }, []);

  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // user signed in, see content
          setUserInformation(user);
          setIsLoggingIn(true);
        } else {
          // user signed out
          setUserInformation({});
          setIsLoggingIn(false);
        }
        // whenever state changes setIsLoading to false
        setIsLoading(false);
      });
    }
  }, [appInitialized]);

  return (
    <div className='App'>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
