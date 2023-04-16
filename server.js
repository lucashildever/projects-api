const app = require('./app/app');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'})

const port = process.env.PORT || 5555;

app.listen(port, () => {
    if(process.env.NODE_ENV === 'development')
        console.log(`Server is running on port ${port}`)
    });

module.exports = app;
