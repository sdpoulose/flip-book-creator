/*
    ##
    ## TODO - code server to facilitate creation of folders server side
    ##
*/
const os = require("os");
const path = require("path");
const home = os.homedir();
var fs = require("fs");

function createFolder() {
    alert(home);
    fs.mkdir(path.join(home, "newdir"));

}


