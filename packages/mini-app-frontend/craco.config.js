const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// import dependencies from package.json, which includes react and react-dom
const { dependencies } = require("./package.json");

module.exports = {
    // ...
    webpack: {
      entry: "./src/entry",
      plugins: {
        add: [
          [  new ModuleFederationPlugin({
                name: "MiniApp",  // This application named 'HeaderApp'
                filename: "remoteEntry.js",  // output a js file
                exposes: { // which exposes
                  "./Header": "./src/App",  // a module 'Header' from './src/App'
                },
                shared: {  // and shared
                  ...dependencies,  // some other dependencies
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
  
  