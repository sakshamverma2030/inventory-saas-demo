import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import { router } from './routes';
import './globals.css';

// ✅ Toast import
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      {/* ✅ Toast notifications provider */}
      <Toaster position="top-right" />
    </AuthProvider>
  </React.StrictMode>
);
