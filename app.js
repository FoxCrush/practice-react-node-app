const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const animalList = [
  { id: 1, name: "cat" },
  { id: 2, name: "dog" },
];

app.get("/", (req, res) => {
  res.send("This is home page");
});
//get all animals
app.get("/api/list", (req, res) => {
  res.send(animalList);
});
//get animal by id
app.get("/api/list/:id", (req, res) => {
  const animal = animalList.find((item) => item.id === parseInt(req.params.id));
  if (!animal) {
    res.status(404).send("NOT FOUND MESSAGE");
    return;
  }
  res.send(animal);
});

//post new item
app.post("/api/list", (req, res) => {
  const { error } = validateAnimal(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const animal = {
    id: animalList.length + 1,
    name: req.body.name,
  };
  animalList.push(animal);
  res.send(animal);
});

// update item
app.put("/api/list/:id", (req, res) => {
  //check if animal exists
  const animal = animalList.find((item) => item.id === parseInt(req.params.id));
  if (!animal) {
    res.status(404).send("NOT FOUND MESSAGE");
    return;
  }

  //validate
  const { error } = validateAnimal(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  animal.name = req.body.name;
  res.send(animal);
});
//from validation we need only error
function validateAnimal(animal) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
  });
  return schema.validate(animal);
}

app.delete("/api/list/:id", (req, res) => {
  const animal = animalList.find((item) => item.id === parseInt(req.params.id));
  if (!animal) {
    res.status(404).send("NOT FOUND MESSAGE");
    return;
  }

  const index = animalList.indexOf(animal);
  animalList.splice(index, 1);
  res.send(animal);
});

// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
