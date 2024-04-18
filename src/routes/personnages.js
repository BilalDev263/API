import express from "express";
import {
  createpersonnage,
  deletepersonnage,
  getpersonnage,
  getpersonnages,
  getError,
  udpatepersonnage,
} from "../controller/personnages.js";
import { body } from "express-validator";

const router = express.Router();

// GET http://localhost:3001/personnages
router.get("/", getpersonnages);

// GET http://localhost:3001/personnages/1
router.get("/:id", getpersonnage);

// POST http://localhost:3001/personnages
router.post(
  "/",
  [
    body("brand").trim().isLength({ max: 20, min: 2 }),
    body("model").trim().isLength({ min: 2, max: 100 }),
  ],
  createpersonnage
);

// PUT http://localhost:3001/personnages/1 creer une route qui
// permet de modiier une voiture
router.put("/:id", udpatepersonnage);

// DELETE http://localhost:3001/personnages/1 creer une route qui
// permet de supprimer une voiture
router.delete("/:id", deletepersonnage);

// ERROR
router.get("/error", getError);

// Ceci est un export default, on peut en avoir
// qu'un seul par fichier (module)
export default router;
