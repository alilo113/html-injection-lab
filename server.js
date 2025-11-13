const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const fs = require("fs")
const app = express()
const port = 3000

const COMMENTS_FILE = path.join(__dirname, 'comments.json');
if (!fs.existsSync(COMMENTS_FILE)) fs.writeFileSync(COMMENTS_FILE, '[]');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(() => console.log(`This app listen to port ${port}`))