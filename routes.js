const express = require("express");
const router = express.Router();
const upload = require("./multer");
const { uploadIdProof } = require("./controller");

router.post("/upload", upload.single("file"), uploadIdProof);

module.exports = router;
