'use strict';

let jobs = global.jobs;

module.exports = (req, res) => {
    let jobId = req.query;
    // console.log(req);
    console.log('Job Id', jobId);

    if(jobs[jobId]) {
        let jobName = jobs[jobId].name;
        let message = {
            id: jobId,
            name: jobName
        };
        res.send({
            status: 0,
            message: message
        }, 200);

    } else {
        res.send({
            status: -1,
            message: 'Job not Found!'
        }, 404);
    }
}