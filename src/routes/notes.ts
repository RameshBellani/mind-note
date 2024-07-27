import { Router } from 'express';
import Note from '../models/Note.js';

const router = Router();

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({
    title,
    content
  });
  try {
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(`GET request received for ID: ${id}`);

  try {
    const note = await Note.findById(id);
    if (!note) {
      console.log('Note not found');
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(note);
  } catch (err: any) {
    console.error('Error:', err.message);
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  console.log(`PUT request received for ID: ${req.params.id}`);
  const { id } = req.params;
  const { title, content } = req.body;
  console.log(`Request body:`, { title, content });

  try {
    const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!updatedNote) {
      console.log('Note not found');
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(updatedNote);
  } catch (err: any) {
    console.error('Error:', err.message);
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json({ message: 'Note deleted' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
