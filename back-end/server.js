const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = express();
const cors = require('cors');
const userRouter = require('./routes/api/user');
app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);
const port = config.get("PORT");
const db = config.get("ATLAS_URI");
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("DB connected");
    })
    .catch(err => console.log(err));
app.listen(port, () => {
    console.log(`App started on port ${port}`);
});