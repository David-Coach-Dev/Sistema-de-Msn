//CONST
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
//GET
router.get('/', (req, res) => {
    const filterOpC = req.query.chat || null;
    const filterOpU = req.query.user || null;
    if (filterOpC !== null) {
        filterOp = filterOpC;
        op = "c"
    }
    if (filterOpU!==null)
    {
        filterOp = filterOpU;
        op = "u"
    }
    if (filterOpC == null && filterOpU == null)
    {
        filterOp = "a" ;
        op = "a"
    }
    console.log(filterOp + " - " + op);
    controller.getMessage(filterOp, op)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error.', 500, e)
        })
});
//  POST
router.post('/', (req, res) => {
    controller.addMessage(req.body.chat , req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 200);
        })
        .catch(e => {
            response.error(req, res, 'Informacion no valida.', 400, e)
        })
});
//PACTH
router.patch('/:id', (req, res) => {
    console.log(req.params.id);
    controller.updateMessage(req.params.id, req.body.message)
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
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `El mensaje con el id ${req.params.id} fue eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno.', 500, e)
        })
});

//EXPORTS
module.exports = router;