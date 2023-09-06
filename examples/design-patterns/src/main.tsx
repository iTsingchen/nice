import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';
import './index.css';

const bootstrap = (): void => {
  const rootDom = document.getElementById('root');
  if (!rootDom) return;

  createRoot(rootDom).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

bootstrap();
