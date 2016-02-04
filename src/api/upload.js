import multer from 'multer'
import shortid from 'shortid'
import mime from 'mime'

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const name = `${shortid.generate()}.${mime.extension(file.mimetype)}`
    cb(null, name)
  }
})

const upload = multer({ storage })

export default upload
