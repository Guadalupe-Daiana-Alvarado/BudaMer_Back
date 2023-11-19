import User from "../../models/User.js";

const signOutController = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: 'User not authenticated',
      });
    }

    await User.findOneAndUpdate(
      { email: req.user.email },
      { online: false }
    );

    return res.status(200).json({
      message: 'User signout!',
    });
  } catch (error) {
    console.log(error);
    // Handle the error appropriately
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};


export default signOutController