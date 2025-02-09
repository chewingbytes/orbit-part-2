module.exports = {
    apps: [
      {
        name: 'rms',
        script: 'index.js',  // entry file of your Node.js app
        instances: 'max',   // 'max' will run as many instances as CPU cores
        exec_mode: 'cluster', // Running in cluster mode for better scalability
        watch: true, // optional: auto-restart on code changes
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  