const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'La cagaste!' });
  };
  
  module.exports = errorHandler;