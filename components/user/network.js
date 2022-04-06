//CONST
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
//GET
router.get('/', (req, res) => {
    const filterName = (req.query.name || null);
    console.log(filterName);
    controller.getUser(filterName)
        .then((userList) => {
            response.success(req, res, userList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error.', 500, e)
        })
});
//  POST
router.post('/', (req, res) => {
    controller.addUser(req.body.name)
        .then((data) => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Interna Error.', 400, e)
        })
});

//PACTH
router.patch('/:id', (req, res) => {
    console.log(req.params.id);
    controller.updateUser(req.params.id, req.body.name)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno.', 500, e)
        })
});
//DELETE
router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    controller.deleteUser(req.params.id)
        .then(() => {
            response.success(req, res, `El usuario con el id  ${req.params.id} fue eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno.', 500, e)
        })
});
//EXPORTS
module.exports = router;