import React from 'react';
import { createRoot } from "react-dom/client";
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transactionn 1',
          amount: '400',
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    });
  }
});

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);