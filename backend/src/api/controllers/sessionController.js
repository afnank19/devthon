import {
  createAndSignTokens,
  verifyPassword,
} from "@afnank19/express-auth-helper";

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ msg: "no email or password provided" });
    }

    // fetch user hash from unique email

    const isMatch = await verifyPassword(password, hash); // hash returend by service

    if (!isMatch) {
      res.status(400).json({ msg: "error: check email or password" });
    }

    const time = {
      accessToken: "5min",
      refreshToken: "30min",
    };

    const payload = {
      name: "test-user",
      role: "instructor",
      id: "0123456",
    };

    const creds = {
      a_key: "galore", // should be in a .env
      r_key: "oklou",
    };

    const tokens = createAndSignTokens(payload, time, creds);

    const result = {
      id: payload.id,
      aTkn: tokens.aToken,
      rTkn: tokens.rToken,
    };

    res.status(200).json(result);
  } catch (error) {}
};
