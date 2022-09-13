const createError = require('http-error')

function notFoundHandler(req, res, next){
    next(createError(404, "Not found"));
}

function errorHandler(err, req, res, next){
    res.render('error');
}