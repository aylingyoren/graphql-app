const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");

const users = [{ id: 21, username: "Aylin", age: 27 }];

app.use(cors());

const createUser = (input) => {
  const id = Date.now();
  return {
    id,
    ...input,
  };
};

//resolver (in real app wd db requests)
const root = {
  getUsers: () => {
    return users;
  },
  getUser: ({ id }) => {
    return users.find((user) => user.id === id);
  },
  createUser: ({ input }) => {
    const user = createUser(input);
    users.push(user);
    return user;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
);

app.listen(5003, () => console.log("server started on port 5003"));
