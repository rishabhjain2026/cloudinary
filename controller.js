const cloudinary = require("./cloudinary")

const model=require("./model");
exports.uploadIdProof = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
      {
        folder: "vendor-idproofs",
      }
    );
    console.log(result.secure_url);

    const model1 = new model({
        url: result.secure_url,
        public_id: result.public_id,
        });

    await model1.save();
    
    res.status(201).json({
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
