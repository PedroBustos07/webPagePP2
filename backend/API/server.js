import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', //
  password: '123456789',
  database: 'restaurante',
});

db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

// Rutas
app.get('/api/productos', (req, res) => {
  const sql = 'SELECT id,nombre, descripcion, precio,images_url FROM productos';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
