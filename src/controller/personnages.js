import { mockPersonnages } from "../data/mock.js";
import personnage from "../models/personnage.js"; // Import the personnage model
import { validationResult } from "express-validator";

export const getpersonnages = (req, res) => {
  personnage.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
      // res.status(400).json({ message: error.message });
    });
};

export const getpersonnage = (req, res) => {
  const id = req.params.id;
  personnage.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
      // res.status(400).json({ message: error.message });
    });
};

export const getError = (req, res) => {
  throw new Error("This is an error");
};

export const createpersonnage = (request, response) => {
  const bodyContent = request.body;
  const errors = validationResult(request);
  console.log(errors);
  // on cree un nouvelle instance de personnage
  const newpersonnage = new personnage(bodyContent);

  // on sauvegarde la nouvelle instance de personnage
  newpersonnage
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
      // response.status(400).json({ message: error.message });
    });
  // const id = mockPersonnages.length + 1;
  // const newpersonnage = { id, ...bodyContent };
  // mockPersonnages.push(newpersonnage);
  // response.status(201).json(newpersonnage);
};

export const udpatepersonnage = (request, response) => {
  const id = parseInt(request.params.id, 10);
  const bodyContent = request.body;
  const personnage = mockPersonnages.find((personnage) => personnage.id === id);
  if (personnage) {
    const updatedpersonnage = { ...personnage, ...bodyContent };
    const index = mockPersonnages.findIndex((personnage) => personnage.id === id);
    mockPersonnages[index] = updatedpersonnage;
    response.json(updatedpersonnage);
  } else {
    response.status(404).json({ message: "personnage not found" });
  }
};

export const deletepersonnage = (request, response) => {
  const id = parseInt(request.params.id);
  const personnage = mockPersonnages.find((personnage) => personnage.id === id);
  if (personnage) {
    mockPersonnages = mockPersonnages.filter((personnage) => personnage.id !== id);
    response.status(204).end();
  } else {
    response.status(404).json({ message: "personnage not found" });
  }
};
