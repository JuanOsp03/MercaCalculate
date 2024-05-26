const jwt = require('jsonwebtoken');

const jwtPassword = 'qwe987gfd'; // Usa una clave secreta más segura en producción

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(403).send('Token is required');
  }

  const token = authHeader.split(' ')[1]; // Obtener el token después de 'Bearer '

  if (!token) {
    return res.status(403).send('Token is required');
  }

  try {
    const decoded = jwt.verify(token, jwtPassword);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
};

module.exports = verifyToken;
