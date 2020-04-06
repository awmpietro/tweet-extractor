const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const helmet = require("helmet");

const app = express();
const port = 4000;

const {TwitService} = require("./config")
const statistics = require('./services')

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.post("/api", (req, res, next) => {
    let {data} = req.body;
    data = data.replace(/\s*,\s*/g, ",").replace(/,/g, " ");
    TwitService.get('search/tweets', { q: data, count: 100 }, function(err, data, response) {
        if(err){
            res.status(500).json(err);
            return next();
        }
        const stats = statistics(data);
        res.json( {"data" : data.statuses, stats} );
        return next();
    })
});

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});