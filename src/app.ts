import express from 'express'
import dotenv from 'dotenv'
import bookRouter from './routes/bookRouter'
import cors from 'cors'

// Loading .env file
dotenv.config();

// Defining port number
const PORT = process.env.PORT || 4000;

// Defining server name
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

// App Express
const app = express();
app.use(express.json());

// Endpoints
app.use('/api', bookRouter);

// Cors
app.use(cors({
  origin: ['http://localhost:3000'],
}));

// Standard Response
app.use((req, res) => {
  res.status(404).send('Not Found');
})

app.listen(PORT, () => console.log(`Server is listening on ${HOSTNAME}:${PORT}`));