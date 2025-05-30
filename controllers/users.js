export const getUsers = async (req, res) => {};

export const createUser = async (req, res) => {
  const {
    body: { firstName, lastName, email }
  } = req;
};

export const getUserById = async (req, res) => {
  const {
    params: { id }
  } = req;
};

export const updateUser = async (req, res) => {
  const {
    body: { firstName, lastName, email },
    params: { id }
  } = req;
};

export const deleteUser = async (req, res) => {
  const {
    params: { id }
  } = req;
};
