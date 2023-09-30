const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// import dependencies from package.json, which includes react and react-dom
const { dependencies } = require("./package.json");

module.exports = {
    // ...
    webpack: {
      entry: "./src/entry",
      plugins: {
        add: [
            [new ModuleFederationPlugin({
                name: "MainApp",  // This application named 'HomeApp'
                // This is where we define the federated modules that we want to consume in this app. 
                // Note that we specify "Header" as the internal name 
                // so that we can load the components using import("Header/"). 
                // We also define the location where the remote's module definition is hosted: 
                // Header@[http://localhost:3001/remoteEntry.js]. 
                // This URL provides three important pieces of information: the module's name is "Header", it is hosted on "localhost:3001", 
                // and its module definition is "remoteEntry.js".
                remotes: { 
                    "MiniApp": "MiniApp@http://localhost:3001/remoteEntry.js",            
                },
                shared: {  // and shared
                    ...dependencies,  // other dependencies
                    react: { // react
                        singleton: true,
                    requiredVersion: dependencies["react"],
                    },
                    "react-dom": { // react-dom
                        singleton: true,
                    requiredVersion: dependencies["react-dom"],
                    },
                },
            }),'append']
        ]
      }
    },
  };
  
  