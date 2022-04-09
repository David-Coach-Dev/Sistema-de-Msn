exports.success = (req, res, msn, status) => {
    res.status(status || 200).send({
        status: status,
        boby:msn
    })
};
exports.error = (req, res, msn, status, details) => {
    console.error('[Responsee error] -> '+details);
    res.status(status).send({
        status: status,
        error:  msn
    })
};