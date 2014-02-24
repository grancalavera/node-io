console.log('start');

process.stdin.setEncoding('utf8');
var data = [];

function carryOn () {
  process.stdin.removeAllListeners();
  // continue with normal program execution
  // and finally exit with the appropriate code
  if (data.length) {
    process.stdout.write(data.join(''));
  }
  console.log('\nend');
  process.exit(0);
}

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk === null && !data.length) {
    carryOn();
  } else {
    data.push(chunk);
  }
});

process.stdin.on('end', function() {
  carryOn();
});
