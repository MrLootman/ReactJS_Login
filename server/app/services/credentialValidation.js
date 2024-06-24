const credentialsValidation = (req, res, next) => {
  const { email, password } = req.body;
  if(!email || !password) {
    res.sendStatus(401);
    return;
  }
  
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  if (!isEmailValid || !isPasswordValid) {
    res.sendStatus(401);
    return;
  }

  next();
};

module.exports = {
  credentialsValidation
};
