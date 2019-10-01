const tokens = {};

const user = {
  user_id: 1,
  user_name: "Nancy",
  password: "NancyAdmin12345"
};

export const authenticateUser = async (req, res, next) => {
  if (!req.query.username || !req.query.password) {
    console.log("error");
    return res.status(401).json({
      success: false,
      message: "username and password required"
    });
  }
  try {
    //console.log(req.query.username);
    // const user = await controller.findUser({username:req.query.username,password: req.query.password});
    if (
      user.user_name !== req.query.username ||
      user.password !== req.query.password
    ) {
      return res.status(401).json({
        success: false,
        message: "username or password incorrect"
      });
    }

    const token = Math.random() + "";
    tokens[token] = user.user_id;
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
