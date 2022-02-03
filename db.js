const Pool = require("pg").Pool;

// database connection
const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ecomdb",
  password: "root",
  port: "5432",
});

// database query to insert new record in the table
// read data from the request body
const postUsers = (req, res) => {
  const {email, title, firstname, lastname, dob, contactNo, password, address } = req.body;
  db.query(
    "INSERT INTO users (email, title, firstname, lastname, dob, contactNo, password, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [email, title, firstname, lastname, dob, contactNo, password, address],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(201).json({ message: "New User Added Successfully ..." }); 
    }
  );
};

module.exports = { postUsers};