import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Stair from './components/common/stair.jsx';
import NavContextProvider from './context/NavContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Stair>
        <NavContextProvider>
          <App />
        </NavContextProvider>
      </Stair>
    </BrowserRouter>
  </StrictMode>,
);
