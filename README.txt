import ... from - Normally does not work in a node environment. It is an ES6 module system.
A node envrionment supports commonJS by default (require(...))
To be able to use import in a node environment, I had to compile with babel with the preset env that is in the .babelrc with nodemon
