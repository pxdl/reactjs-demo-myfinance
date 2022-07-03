import { createRoot } from "react-dom/client";
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          name: 'Webdev freelance',
          amount: 2000,
          type: 'deposit',
          category: 'Development',
          createdAt: new Date('2022-05-02 09:00:00')
        },
        {
          id: 2,
          name: 'Rent',
          amount: 800,
          type: 'withdrawal',
          category: 'Living',
          createdAt: new Date('2022-05-10 11:00:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
});

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);