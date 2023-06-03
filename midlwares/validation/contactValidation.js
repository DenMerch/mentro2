const Joi = require("joi")

const schema = Joi.object({
    name: Joi.string().required().min(4),
    number: Joi.string().required().min(4)
})
const FIELDS = ['name', 'number']

const contactWalidation = (req, res, next) => {

    if (!Object.keys(req.body).length) {
        res.status(400).json({ message: "Missing field" })
        return
    }
    for (const field of FIELDS) {

        if (req.body[field] === undefined) {
            res.status(400).json({ message: `feild ${field} must be filled` })
            return
        }
    }
    const { error } = schema.validate(req.body)

    if (error) {
        res.status(400).json({ message: error.message })
        return
    }

    next()
}
module.exports = contactWalidation;