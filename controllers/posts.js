export const getPosts = async (req, res) => {};

export const createPost = async (req, res) => {
  const {
    body: { title, content, userId }
  } = req;
};

export const getPostById = async (req, res) => {
  const {
    params: { id }
  } = req;
};

export const updatePost = async (req, res) => {
  const {
    body: { title, content, userId },
    params: { id }
  } = req;
};

export const deletePost = async (req, res) => {
  const {
    params: { id }
  } = req;
};
