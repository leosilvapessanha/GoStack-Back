import express from 'express';
import routes from './routes';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

// eslint-disable-next-line no-console
app.listen(3333, () => console.log('🚀🚀🚀 Running'));
