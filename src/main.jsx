import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import AuthProvider from './provider/authProvider';

import Routes from './routes';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </StrictMode>
);
