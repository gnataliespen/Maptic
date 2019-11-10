const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.OAUTH_CLIENT_ID);
module.exports = async (req, res, next) => {
  //Get token
  const token = req.header("x-auth-token");
  //Check for token
  if (!token) {
    return next();
  }
  //Verify token
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
    });
    req.user = ticket.getPayload();
    next();
  } catch (err) {
    next();
  }
};
