'use strict';

let jobs = global.jobs;

module.exports = (req, res) => {
    let jobDetails = req.body;
    let jobId = req.query;
    let jobName = jobDetails.name;
    // console.log('Job Id', jobId);

    if(jobs[jobId]) {
        jobs[jobId].name = jobName;
        global.jobs = jobs;

        res.send({
            status: 0,
            message: "Updated the job name"
        }, 200);

    } else {
        res.send({
            status: -1,
            message: 'Job not Found!'
        }, 404);
    }
}