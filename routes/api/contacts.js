const express = require('express')

const router = express.Router()
const { cntrGetAll, addContact } = require("../../controllers/contactControllers")
const contactWalidation = require("../../midlwares/validation/contactValidation")

router.get('/', cntrGetAll)

router.post('/', contactWalidation, addContact)

router.delete('/:contactId',)

router.put('/:contactId',)

module.exports = router
