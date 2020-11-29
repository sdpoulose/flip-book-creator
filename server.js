/*
    ##
    ## TODO - code server to facilitate creation of folders server side
    ##
*/

const fs = require('fs-extra');

const dir = '/tmp/this/path/does/not/exist';
fs.ensureDirSync(dir);