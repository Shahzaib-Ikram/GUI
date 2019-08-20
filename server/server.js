var http = require('http');
var express = require('express');
var RED = require('node-red');

// Create an Express app
var app = express();

// Add a simple route for static content served from 'public'
app.use('/', express.static('public'));

// Create a server
var server = http.createServer(app);

// Create the settings object - see default settings.js file for other options
var settings = {
  httpAdminRoot: '/red',
  httpNodeRoot: '/api',
  userDir: '/home/nol/.nodered/',
  editorTheme: {
    projects: {
      enabled: true
    }
  },
  adminAuth: {
    type: 'credentials',
    users: [
      {
        username: 'admin',
        password:
          '$2b$08$lT4hFY4HkQ4PCCiJDV5Jl.kK3Hjw1VmNUNUyFOlX4I.NkGsthdVMu',
        permissions: '*'
      }
    ]
  },
  functionGlobalContext: {} // enables global context,
};

// Initialise the runtime with a server and settings
RED.init(server, settings);

// Serve the editor UI from /red
app.use(settings.httpAdminRoot, RED.httpAdmin);

// Serve the http nodes UI from /api
app.use(settings.httpNodeRoot, RED.httpNode);

// Start the runtime
RED.start();

app.get('/createproject', (req, res) => {
  // console.log(req);
  // console.log(RED.runtime.start());
  RED.runtime.settings
    .getRuntimeSettings({ username: 'admin' })
    .then(settings => {
      res.send(settings);
    });
});

server.listen(8000);
