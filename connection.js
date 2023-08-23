import mongoose from 'mongoose';

// URL de conexión a MongoDB
const dbURL = 'mongodb+srv://testDB:Password123@cluster0.ruyqase.mongodb.net/express-db';

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

export default db;
