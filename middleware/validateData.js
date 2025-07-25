export const validateData = (req, res, next) => {
  const { title, desc, price } = req.body;
  if (!title || title.trim().length === 0 || !desc || desc.trim() === 0 || typeof price !== "number") {
    res.status(401).json({ message: "inputan tidak boleh kosong dan price harus berupa number" });
    console.log("inputan tidak valid");
  }
  next();
};
