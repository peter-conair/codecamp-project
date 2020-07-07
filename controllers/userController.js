const e = require("express");

const users = [
    {
        id: "1",
        name: "peter"
    },
    {
        id: "2",
        name: "student"
    }
];

async function findUserById(id) {
    return users.find(item => {
        if (item.id == id) {
            return item;
        } else {
            return null;
        }
    });
}

module.exports.index = function (req, res, next) {
 
    res.status(200).json(users);
}

module.exports.getUserById = function (req, res, next) {
    console.log(`Id : ${req.params.id}`);
    let user = users.find(item => item.id == req.params.id);
    res.status(200).json(user);
}

module.exports.createUser = function (req, res, next) {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
}



module.exports.updateUser = async (req, res) => {
    // const token = req.header("authorization");
    const { id } = req.params;
   // const id =  req.params.id;
    console.log(`Id : ${id}`);
    const user = await findUserById(id);
    if (user) {
        console.log(`User has been updated. id : ${user.id}`);
    } else {
        console.log(`User is not exits.`);
        res.status(404).send({ message: "Not found User with id " + id });
    }

   // console.log(user);
    //users.push(user);
    res.status(201).json(user);
}

module.exports.deleteUser = async function (req, res) {
     // const token = req.header("authorization");
     const { id } = req.params;
     // const id =  req.params.id;
      console.log(`Id : ${id}`);
      const user = await findUserById(id);
      if (user) {
          console.log(`User has been delete. id : ${user.id}`);
      } else {
          console.log(`User is not exits.`);
          res.status(404).send({ message: "Not found User with id " + id });
      }
      res.status(200).json({message:"success"});;
}

