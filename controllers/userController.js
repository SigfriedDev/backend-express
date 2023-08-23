import express from 'express';
import userService from '../services/userService.js';

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints relacionados con usuarios
 */

const userRoutes = express.Router();

/**
 * @swagger
 * /users/get:
 *   get:
 *     tags: [Users]
 *     summary: Obtiene todos los usuarios
 *     description: Obtiene una lista de todos los usuarios registrados.
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 */

userRoutes.get('/get', (req, res) => {
  console.log("Obtener todos los usuarios");
  res.json({ message: "Obtuviste todos los usuarios con éxito" });
});

/**
 * @swagger
 * /users/create:
 *   post:
 *     tags: [Users]
 *     summary: Crea un nuevo usuario
 *     description: Crea un nuevo usuario y lo registra.
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Datos del usuario
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: Nombre del usuario
 *             email:
 *               type: string
 *               description: Correo electrónico del usuario
 *             age:
 *               type: integer
 *               description: Edad del usuario
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             example:
 *               name: John Doe
 *               email: johndoe@example.com
 *               age: 30
 */


userRoutes.post('/create', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = await userService.createUser(name, email, age);
    
    res.status(201).json(newUser.id);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear un nuevo usuario' });
  }
});


export default userRoutes;
