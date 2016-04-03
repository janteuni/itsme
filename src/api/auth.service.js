import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import compose from 'composable-middleware'

const secret = 'yolo-secret'
const validateJwt = expressJwt({ secret })

/**
 * Attach the user object to the request if authenticated
 * Otherwise returns 403
 */
export const isAuthenticated = () => compose()
  .use(validateJwt)

/**
 * Returns a jwt token, signed by the app secret
 */
export const signToken = name => jwt.sign(
  { name },
  secret,
  { expiresIn: 60 * 60 * 5 }
)
