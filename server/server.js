const express = require('express');
    const cors = require('cors');
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    require('./config/mongoose.config');
    require('./routes/routes.js')(app);

    app.listen(3000, () => console.log("Now listening on port 3000"));