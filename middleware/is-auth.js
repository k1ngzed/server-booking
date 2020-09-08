const jwt = require('jsonwebtoken')
// const User = require('../models/user')

module.exports = async (req) => {
  const authHeader = req.get('Authorization')

  if (!authHeader) {
    return { isAuth: false }
  }
  const token = authHeader.split(' ')[1]
  if (!token || token === '') {
    return { isAuth: false }
  }

  let decodedToken
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET)
  } catch (err) {
    return { isAuth: false }
  }
  if (!decodedToken) return { isAuth: false }

  // const checkUser = await User.findById(decodedToken.userId)
  // if (!checkUser) return { isAuth: false }

  // if (decodedToken.status === process.env.ADMIN_STATUS_NAME) {
  //   const checkAdmin = await User.findById('5e59041a4c8d530320433987')
  //   if (!checkAdmin) return { isAuth: false }
  // }

  return {
    isAuth: true,
    userId: decodedToken.userId,
    // rights: decodedToken.rights,
  }
}
