
const express = require('express')
const path = require('path')
const { dirname } = require('path')
const multer = require('multer')
const { mergepdf } = require('./pdf-merger')
const { clear } = require('console')
const upload = multer({ dest: 'uploads/' })
const app = express()
app.use('/static', express.static('public'))
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "templates/index.html"))
})

app.post('/merge', upload.array('pdfs', 12), async (req, res, next) => {
    console.log(req.files)
    await mergepdf(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
    // res.send({data: req.files})
    res.redirect(`http://localhost:3000/static/merged.pdf`);
    
    
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
})




app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})