import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bookRouter from './routes/bookRouter';
import publisherRouter from './routes/publisherRouter';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json'

dotenv.config();

const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/v1', bookRouter);
app.use('/v1', publisherRouter);
app.use(cors());

app.use((req, res) => {
  res.status(404).send('Not Found');
})

app.listen(PORT, () => console.log(`Server is listening on ${HOSTNAME}:${PORT}`));