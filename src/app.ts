import express from 'express';
import cors from 'cors';
import notesRouter from './routes/notes.js';

const app = express();


app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());
app.use('/api/notes', notesRouter);

export default app;
