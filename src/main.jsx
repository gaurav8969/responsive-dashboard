import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { MenuProvider } from './contexts/MenuContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </StrictMode>,
);