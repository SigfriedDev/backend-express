import express from 'express';
import userRoutes from './controllers/userController.js';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import db from './connection.js';
const app = express();
const port = 3005;

app.use(express.json());

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API de Ejemplo',
      version: '1.0.0',
      description: 'Documentación de la API de ejemplo',
    },
  },
  apis: ['./controllers/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/users', userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal' });
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});