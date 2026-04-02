
const axios = require("axios");
require("dotenv").config();

const TOKEN = "EAAM5xEXbiXUBQ6SEp0aYfdZBpO0IW678hGxbZAwZA8dz07ZAs0bKPzbV4p8pcBVovp4YhzOrZA8CF0sAUrvWchxnCFwUuvpRBBZBku6Hrh5uz8waSM7XDZCCQYb3MRZCX0y164e60i626u4E27IwQG8dLCwU6MN2K5MeRyt3vw5tOH2bbd6cm3B64KVVWFnVfLrfsoNWqzhz1pbO0LpPRqp14sFhZAshO7WAuigfbmCZAgk8veJAOUXhRD6n5vaBSJXZCE9M5h9J5sSF5krXniXq5gV";
const PHONE_NUMBER_ID = 975901048946656;

// console.log(TOKEN);
// console.log(PHONE_NUMBER_ID)
const sendMessage = async (req, res) => {
  try {
    const { to, message } = req.body;


    const response = await axios.post(
      `https://graph.facebook.com/v19.0/${PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: to,
        type: "text",
        text: {
          body: message
        }
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json(err.response?.data || err.message);
  }
};


