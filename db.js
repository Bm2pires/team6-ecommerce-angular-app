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
        res.status(200).json({
          email: result.rows[0].email_address,
          password: result.rows[0].password,
        });
      } else {
        res.status(401).json({ message: "User Not Found." });
      }
    }
  );
};

module.exports = { getUser };
