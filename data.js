var size = process.argv[2] || 100;

for (var i = 0; i < size; i++) {
  var n = 97 + Math.floor(Math.random() * 25);
  var s = String.fromCharCode(n);
  process.stdout.write(s);
}
