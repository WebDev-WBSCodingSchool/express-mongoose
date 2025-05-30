import User from '../models/User.js';

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

export const createUser = async (req, res) => {
  const {
    body: { firstName, lastName, email }
  } = req;
  if (!firstName || !lastName || !email)
    throw new Error('First name, last name, and email are required', { cause: 400 });
  const found = await User.findOne({ email });
  if (found) throw new Error('Email already exists', { cause: 400 });
  const user = await User.create({ firstName, lastName, email });
  res.status(201).json(user);
};

export const getUserById = async (req, res) => {
  const {
    params: { id }
  } = req;
  const user = await User.findById(id);
  if (!user) throw new Error('User not found', { cause: 404 });
  res.status(200).json(user);
};

export const updateUser = async (req, res) => {
  const {
    body: { firstName, lastName, email },
    params: { id }
  } = req;
  if (!firstName || !lastName || !email)
    throw new Error('First name, last name, and email are required', { cause: 400 });
  const user = await User.findByIdAndUpdate(id, { firstName, lastName, email }, { new: true });
  if (!user) throw new Error('User not found', { cause: 404 });
  res.status(200).json(user);
};

export const deleteUser = async (req, res) => {
  const {
    params: { id }
  } = req;
  const user = await User.findByIdAndDelete(id);
  if (!user) throw new Error('User not found', { cause: 404 });
  res.status(200).json({ message: 'User deleted' });
};
