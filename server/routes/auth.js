import express from "express";
//import controllers
import { showMessage, register } from "../controllers/auth.controller";

const router = express.Router();

router.get('/:message', showMessage);
router.post('/register', register);

module.exports = router;