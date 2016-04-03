import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

const localOpts = {
  usernameField: 'username',
  passwordField: 'password'
}

passport.use(new LocalStrategy(localOpts, (username, password, done) => {
  if (username !== 'jasmine' || password !== 'jasmine') {
    return done(null, false, { msg: 'nope' })
  }
  done(null, {
    name: 'jasmine',
    role: 'admin'
  })
}))
