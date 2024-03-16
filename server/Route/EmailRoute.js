import express from "express"
import { CreateSubscription } from "../controllers/emailController.js"
const route = express.Router()

route.post("/emailsend", CreateSubscription)

export default route