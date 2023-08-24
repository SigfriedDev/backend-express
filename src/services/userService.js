import UserModel from '../models/userModel.js';
import UserInputDto from '../dto/input/userInputDto.js';

async function createUser(name, email, age) {
  try {
    const userInput = new UserInputDto(name, email, age);
    const newUser = new UserModel(userInput);
    await newUser.save();
    
    return newUser;
  } catch (error) {
    console.error(error);
    throw new Error('Error al crear un nuevo usuario');
  }
}

export default { createUser };