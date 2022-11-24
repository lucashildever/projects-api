const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({path: './config.env'})

const DB = process.env.DATABASE_URI.replace(
    '<PASSWORD>', 
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => {
        if(process.env.NODE_ENV === 'development')
            console.log('connected successfully')
        })
    .catch(err => console.log(err));

const port = process.env.PORT || 5555;

app.listen(port, () => {
    if(process.env.NODE_ENV === 'development')
        console.log(`Server is running on port ${port}`)
    });
