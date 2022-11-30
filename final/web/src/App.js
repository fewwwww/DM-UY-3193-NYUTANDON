import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

import './App.css';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import PostsPage from './pages/Posts';
import ProfilePage from './pages/Profile';

const firebaseConfig = {
  apiKey: 'AIzaSyAsc41donWEV2yMWXDkbUiWluuOZNkKAtw',
  authDomain: 'final-2a68a.firebaseapp.com',
  projectId: 'final-2a68a',
  storageBucket: 'final-2a68a.appspot.com',
  messagingSenderId: '502670223238',
  appId: '1:502670223238:web:c79426369a8c619bca2e07',
};

function App() {
  const [appInitialized, setAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [userInformation, setUserInformation] = useState({});

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <PostsPage
          isLoading={isLoading}
          isLoggingIn={isLoggingIn}
          setIsLoggingIn={setIsLoggingIn}
          userInformation={userInformation}
          setUserInformation={setUserInformation}
        />
      ),
    },
    {
      path: '/login',
      element: (
        <LoginPage
          isLoggingIn={isLoggingIn}
          setIsLoggingIn={setIsLoggingIn}
          userInformation={userInformation}
          setUserInformation={setUserInformation}
        />
      ),
    },
    {
      path: '/signup',
      element: (
        <SignupPage
          isLoggingIn={isLoggingIn}
          setIsLoggingIn={setIsLoggingIn}
          userInformation={userInformation}
          setUserInformation={setUserInformation}
        />
      ),
    },
    {
      path: '/profile',
      element: (
        <ProfilePage
          isLoggingIn={isLoggingIn}
          setIsLoggingIn={setIsLoggingIn}
          userInformation={userInformation}
          setUserInformation={setUserInformation}
        />
      ),
    },
  ]);

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
        setIsLoading(false);
      });
    }
  }, [appInitialized]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
