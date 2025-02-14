import { generateHash } from "@afnank19/express-auth-helper";
import { addUser } from "../services/userService.js";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const hash = await generateHash(password);

    const newUser = {
      name: name,
      email: email,
      hash: hash,
      role: role,
    };

    // Add this user to the db
    const newUserId = await addUser(newUser);

    if (newUserId === null) {
      res.status(500).json({ msg: "an error occured" });
    }

    res.status(200).json({ msg: "creation success" });
  } catch (error) {
    res.status(500).json({ msg: "an error occurred" });
  }
};
