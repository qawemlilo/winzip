
var fs = require('fs'),
    zlib = require('zlib'),
    gzipper = zlib.createGzip(),    
    archiver = require('archiver');


/*
    Creates Archives
    
    @param: src - (String) source to be archived
    @param: dest - (String) archive destination path
    @param: action - (String) archive format
*/    
module.exports = function (src, dest, action) {
    "use strict";
    
    var output = fs.createWriteStream(dest), archive;
    
    if (action === 'tgz') {
        archive = archiver('tar');
    }
    else {
        archive = archiver(action);
    }
    
    output.on('close', function() {
      console.log();
      console.log('Success');
      console.log(' > ' + archive.pointer() + ' total bytes');
      console.log(' > ' + dest + ' created!');
    });
    
    archive.on('error', function(err) {
      throw err;
    });
    
    
    if (action === 'tgz') {
        archive.pipe(gzipper).pipe(output);
    }
    else {
        archive.pipe(output);
    }
    
    
    archive.bulk([
      { expand: true, cwd: src, src: ['**'] }
    ]);
    
    archive.finalize();
};


