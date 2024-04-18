import { Router } from "express";

import authRouter from "./auth.js";
import personnagesRouter from "./personnages.js";
import fileRouter from "./file.js";

const router = Router();

router.use("/auth", authRouter);

router.use("/personnages", personnagesRouter);

router.use("/uploads", fileRouter);

export default router;
