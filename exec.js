var exec = require('child_process').exec, cmd;


setTimeout(function () {
  process.exit();
}, 4000);


function e (cmd) {
  console.log('will try to exec `%s`', cmd);
  exec(cmd, function (e, so, se) {
    console.log(so);
    console.log(cmd);
    console.log('\n');
  });
}



e('node program.js < data.txt');
e('cat data.txt | node program.js');
e('node program.js');



