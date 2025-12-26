import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {PrivyProvider} from '@privy-io/react-auth';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PrivyProvider
      appId="cmjkl2a6u01iakz0cj7mmz55h"
      clientId="your-app-client-id"
      config={{
        //login methods
        loginMethods: ['wallet', 'email','google', 'github'],
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          ethereum: {
            createOnLogin: 'users-without-wallets'
          }
        },
        appearance: {
          theme: 'dark',
          accentColor: '#0c0017ff'
        }
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>
);