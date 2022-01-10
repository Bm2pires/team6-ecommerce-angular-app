const Pool = require("pg").Pool;

// database connection
const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ecomdb",
  password: "root",
  port: 5432,
});

const postUsers = (req, res) => {
  const newPost = req.body;
  const email = newPost.email;
  const title=newPost.title;
  const firstname=newPost.firstname;
  const lastname=newPost.lastname;
  const dob=newPost.dob;
  const contactNo=newPost.contactNo;
  const password = newPost.password;
  const address=newPost.address;
  db.query(
    "INSERT INTO users(email,title, firstname, lastname, dob, contactNo, password, address) values($1, $2,$3,$4,$5,$6,$7,$8)",
    [email,title, firstname, lastname, dob, contactNo, password, address],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(201).json({ message: "New User added" });
    }
  );
};

// module.exports will export object with function
module.exports = { postUsers };
