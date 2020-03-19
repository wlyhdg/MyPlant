const express = require('express');
const app = express();
const tkh = require('../../middleware/tokenHandler')

const router = express.Router();

router.get("/", tkh, (req, res) => {
  res.send("");
});

module.exports = router;