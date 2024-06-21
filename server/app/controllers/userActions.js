const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Insert the item into the database
    const user = await tables.user.readAll();

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json(user);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add = async (req, res, next) => {
  // Extract the item data from the request body
  const { firstname, email, password } = req.body;

  try {
    // Insert the item into the database
    const insertUser = await tables.user.create(firstname, email, password);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertUser });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = { add, browse };
