const net = require('net');
const Response = require('./helpers/Response');
const Request = require('./helpers/Request');
const routes = require('./routes.js').routes;

global.jobs = {
    '1': {
        id: '1',
        name: "Alpha Job"
    },
    '2': {
        id: '2',
        name: "Bravo Job"
    }
};

net.createServer(function (socket) {

    socket.on('data', function (data) {
        // console.log(data.toString());
        // console.log(routes);
        let req = new Request(data);
        let res = new Response(socket);

        // console.log(req);


        if(Object.keys(routes[req.method]).includes(req.endPoint)) {
            // console.log(`./lib${req.endPoint}`);
            // require(`./lib/${req.endPoint}`)(req, res);
            require(`${routes[req.method][req.endPoint]}`)(req, res);
        } else {
            res.send({status: -1, message: "Invalid endpoint"}, 200);
        }

        
        // console.log("WOrking", data.toString());    
    });
  
  }).listen(7000, () => {
      process.stdout.write('Server listening at http://localhost:7000 \n');
  }).on('error', (err) => {
      console.log('Server error: '+err.toString())
  });