const CustomError = require('../CustomError')

const GET = req => {
    // example for success (this is just to give you an example for async operations)
    return Promise.resolve({ name: 'Rio de Janeiro' })
}

const POST = req => {
    // example for unhandled error
    throw new Error('Some unexpected error, may also be thrown by a library or the runtime.')
}

const DELETE = req => {
    // example for handled error
    throw new CustomError('CITY_NOT_FOUND', 404, 'The city you are trying to delete could not be found.')
}

const PATCH = req => {
    // example for catching errors and using a CustomError
    try {
        // something bad happens here
        throw new Error('Some internal error')
    } catch (err) {
        console.error(err) // decide what you want to do here

        throw new CustomError(
            'CITY_NOT_EDITABLE',
            400,
            'The city you are trying to edit is not editable.'
        )
    }
}

module.exports = {
    GET,
    POST,
    DELETE,
    PATCH,
}
