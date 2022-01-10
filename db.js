const Pool = require("pg").Pool;

// database connection
const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ecommerce",
  password: "root",
  port: "5432",
});

const getUser = (req, res) => {
  const { email, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE email = $1 AND password = $2",
    [email, password],
    (error, result) => {
      if (error) {
        throw error;
      }
      if (result.rows.length >= 1) {
        res.status(200).json({ message: "User Found." });
      } else {
        res.status(401).json({ message: "User Not Found." });
      }
    }
  );
};

// database query to insert new record in the table
// read data from the request body
const postUsers = (req, res) => {
  const { title, fname, lname, email, dob, contactno, pword } = req.body;
  db.query(
    "INSERT INTO users (title, firstname, lastname, email, dob, contactno, password) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [title, fname, lname, email, dob, contactno, pword],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(201).json({ message: "New User added" });
    }
  );
};

module.exports = { postUsers, getUser };
