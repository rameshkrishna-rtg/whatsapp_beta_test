const express= require("express");
const axios = require("axios");
const router=express.Router();
const {sendMessage} = require("../controller/whatsapp.controller")

router.post("/send",sendMessage);

