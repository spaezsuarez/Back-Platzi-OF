module.exports.succes = (res,status,data) => {
    res.status(status).json({
        status:status,
        info:data
    });
}

module.exports.error = (res,status,error) => {
    res.status(status).json({
        status:status,
        info:error
    });
}