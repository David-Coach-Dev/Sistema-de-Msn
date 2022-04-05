exports.success = (req, res, msn, status) => {
    res.status(status || 200).send({
        error: '',
        body:msn
    })
};
exports.error = (req, res, msn, status) => {
    res.status(status || 400).send({
        error: status,
        body: msn
    })
};
