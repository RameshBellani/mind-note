    import mongoose from 'mongoose';
    import app from './app.js';

    const PORT = process.env.PORT || 5000;

    const MONGODB_URI = 'mongodb+srv://rameshbellani95:Ramesh1234@cluster0.raipn7s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

    mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected successfully');
        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err: any) => {
        console.error('Failed to connect to MongoDB', err);
    });

