import path from 'path'

const env = process.env.NODE_ENV || 'development'
const config = require(`./${env}`).default

export default {

  env,
  port: 3000,
  socketPort: 3002,

  assetsFolder: path.join(__dirname, '../assets'),
  distFolder: path.join(__dirname, '../../dist'),

  ...config

}
