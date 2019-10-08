const db = require("./db/index");

const tokens = {};

// const user = {
//   user_id: 1,
//   user_name: "Nancy",
//   password: "NancyAdmin12345"
// };

export const authenticateUser = async (req, res, next) => {
  if (!req.query.email || !req.query.password) {
    console.log("error");
    return res.status(401).json({
      success: false,
      message: "username and password required"
    });
  }
  try {
    //console.log(req.query.username);
    const email = req.query.email;
    const password = req.query.password;
    const user = await db.oneUser(email, password);
    if (
      /* user.user_name !== req.query.username ||
      user.password !== req.query.password */
      !user
    ) {
      return res.status(401).json({
        success: false,
        message: "username or password incorrect"
      });
    }

    const token = Math.random() + "";
    tokens[token] = user.User_ID;
    return res.json({
      success: true,
      result: { token, user }
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const logout = (req, res, next) => {
  const { token } = req.query;
  if (!token) {
    return res.json({ success: true });
  }
  delete tokens[token];
  return res.json({ success: true });
};

export const isloggedIn = async (req, res, next) => {
  const { token } = req.query;
  if (!token || typeof tokens[token] == "undefined") {
    return res.status(401).json({
      success: false,
      message: "forbidden"
    });
  }

  const userId = tokens[token];
  //const user = await controller.findUserByID(userId);
  if (user.user_id === userId) {
    req.is_logged_in = true;
    req.user = user;
  } else throw new Error();
  next();
};
