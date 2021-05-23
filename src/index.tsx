import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({

  //TODO: Create a mocked database model.
  models: {
    transaction: Model, //initial value is an empty array.
  },

  //TODO: this will mock values to 'transaction' model.
  seeds(server) {
    server.db.loadData({
      transactions: [{
        id: 1,
        title: 'Website development',
        amount: 4200,
        category: 'development',
        type: 'deposit',
        data: new Date('2021-05-22 08:00:00')

      },
      {
        id: 2,
        title: 'House bills',
        amount: 500,
        category: 'essentials',
        type: 'withdraw',
        data: new Date('2021-05-22 10:00:00') 

      }]
    })
  },

  routes() {
    this.namespace = 'api';

    //TODO: Get data from fake API.
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    //TODO: Insert data in fake API.
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
}) 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

