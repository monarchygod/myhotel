import express from "express";
//import controllers
import { showMessage } from "../controllers/auth.controller";

const router = express.Router();

router.get('/:message', showMessage);

module.exports = router;