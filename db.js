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
    "SELECT * FROM users WHERE email_address = $1 AND password = $2",
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
const postUsers = (req, res) => {
  const {email, password, title, firstname, lastname, dob, contactNo,  address } = req.body;
  db.query(
    "INSERT INTO users (email_address, password, title, firstname, lastname, dob, phone_number, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [email, password, title, firstname, lastname, dob, contactNo,  address],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(201).json({ message: "New User Added Successfully ..." });
      
    }
  );
};

module.exports = { getUser, postUsers };
