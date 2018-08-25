'use strict';

let jobs = global.jobs;

module.exports = (req, res) => {

    let jobDetails = req.body;
    let jobId = (Object.keys(jobs).length+1).toString();
    let jobName = jobDetails.name;
    
    console.log('Job Id', jobId);

    if((jobId && jobName)) {
        
        jobs[jobId] = {};
        jobs[jobId] = jobDetails;
        global.jobs = jobs;
        
        console.log(jobs);
        let message = {
            status: 0,
            message: {
                id: jobId
            }
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