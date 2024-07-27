var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from 'express';
import Note from '../models/Note.js';
const router = Router();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content } = req.body;
    const newNote = new Note({
        title,
        content
    });
    try {
        const savedNote = yield newNote.save();
        res.status(201).json(savedNote);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield Note.find();
        res.json(notes);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(`GET request received for ID: ${id}`);
    try {
        const note = yield Note.findById(id);
        if (!note) {
            console.log('Note not found');
            return res.status(404).json({ message: 'Note not found' });
        }
        res.json(note);
    }
    catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ message: err.message });
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`PUT request received for ID: ${req.params.id}`);
    const { id } = req.params;
    const { title, content } = req.body;
    console.log(`Request body:`, { title, content });
    try {
        const updatedNote = yield Note.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!updatedNote) {
            console.log('Note not found');
            return res.status(404).json({ message: 'Note not found' });
        }
        res.json(updatedNote);
    }
    catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ message: err.message });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedNote = yield Note.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.json({ message: 'Note deleted' });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
export default router;
