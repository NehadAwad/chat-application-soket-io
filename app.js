const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const { urlencoded } = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const loginRouter = require('./router/loginRouter');
const usersRouter = require('./router/usersRouter');
const inboxRouter = require('./router/inboxRouter');
//internal imports
const { notFoundHandler, errorHandler } = require('./middlewares/common/errorHandler');

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('database connection successfully'))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

//static folder
app.use(express.static(path.join(__dirname, "public")));

//cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing

app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

//error handling
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(process.env.PORT, () =>{
    console.log(`app is listening to ${process.env.PORT}`);
});

