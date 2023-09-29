import Email from "../model/email.js";

export const saveSentEmails = async (req, res) => {
  try {
    const email = await new Email(req.body);
    email.save();
    response.status(200).json("Email saved successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
