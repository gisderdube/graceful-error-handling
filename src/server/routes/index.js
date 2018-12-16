const express = require('express')
const router = express.Router()
const CustomError = require('../CustomError')

router.use(async (req, res) => {
    try {
        const route = require(`.${req.path}`)[req.method]

        try {
            const result = await route(req) // We pass the request to the route function
            res.send(result) // We just send to the client what we get returned from the route function
        } catch (err) {
            /*
            This will be entered, if an error occurs inside the route function.
            */
            if (err instanceof CustomError) {
                /* 
                In case the error has already been handled, we just transform the error 
                to our return object.
                */

                return res.status(err.status).send({
                    error: err.code,
                    description: err.message,
                })
            } else {
                console.error(err) // For debugging reasons

                // It would be an unhandled error, here we can just return our generic error object.
                return res.status(500).send({
                    error: 'GENERIC',
                    description: 'Something went wrong. Please try again or contact support.',
                })
            }
        }
    } catch (err) {
        /* 
        This will be entered, if the require fails, meaning there is either 
        no file with the name of the request path or no exported function 
        with the given request method.
        */
        res.status(404).send({
            error: 'NOT_FOUND',
            description: 'The resource you tried to access does not exist.',
        })
    }
})

module.exports = router
