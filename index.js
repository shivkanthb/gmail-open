#! /usr/bin/env node

var userArgs = process.argv.slice(2);


var command = process.platform === "win32" ? "cmd" :
                  process.platform === "darwin" ? "open" :
                  "xdg-open";


//https://mail.google.com/mail/u/0/#inbox

if(userArgs[0])
{
	mailUrl= 'https://mail.google.com/mail/u/'+userArgs[0]+'/';
}
else
mailUrl = 'https://mail.google.com/mail/u/0/#inbox';

var exec = require('child_process').exec;
var child = exec(command+' '+mailUrl);

