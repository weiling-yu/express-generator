const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotions to you');
})
.post((req, res, next) => {
    res.end(`Will add the promotion: ${req.body.name} with detail:${req.body.description}`);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});

promoRouter.route('/:promotionId')
.get((req, res) => {
    res.end(`Will send promotion detail: ${req.params.promotionId} to you`);
})
.post((req, res, next) => {
    res.end(`POST operation not supported on /promotions/${req.params.promotionId}`);
})
.put((req, res, next) => {
    res.write(`Updating promotion ${req.params.promotionId}\n`)
    res.end(`Will update the promotion ${req.body.name} with details: ${req.body.description}`);
})
.delete((req, res, next) => {
    res.end(`Deleting the promotion ${req.params.promotionId}`);
});





module.exports = promoRouter;
