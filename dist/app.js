import express from 'express';
import notesRouter from './routes/notes.js';
const app = express();
app.use(express.json());
app.use('/api/notes', notesRouter);
export default app;
