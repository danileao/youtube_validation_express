import express from "express";
import { validate } from "./validation";

const app = express();

app.use(express.json());

const schemaUser = {
  username: {
    required: 'Username é obrigatório'
  },
  password: {
    min: 10,
    max: 12,
  },
  email: {
    type: "email",
    required: 'E-mail é obrigatório'
  }
}

app.post("/users", validate(schemaUser), (request, response) => {

  return response.json(request.body)
})


app.listen(3000, () => console.log("Server is running on PORT 3000"))