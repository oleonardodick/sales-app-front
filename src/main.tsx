import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AuthProvider } from './auth/contexts/authProvider.tsx';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <main className="bg-zinc-200">
          <AppRoutes />
        </main>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
