// let routes = ;

module.exports = {
    routes: {
        'GET': {
            'health': './lib/health',
            'job': './lib/getJob'
        },
        'POST': {
            'job': './lib/createJob'
        },
        'PUT': {
            'job': './lib/updateJob'
        },
        'DELETE': {
            'job': './lib/deleteJob'
        }
    }
};