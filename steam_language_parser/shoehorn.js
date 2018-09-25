// This file shoehorns SteamKit's .steamd files to fit the parser's format.

var fs = require('fs');
fs.readdirSync(__dirname + '/../steam_language').forEach((filename) => {
  if (!filename.match(/\.steamd$/)) {
    return;
  }

  const file = fs
    .readFileSync(__dirname + '/../steam_language/' + filename)
    .toString('ascii');
  const fixedFile = file
    .replace(/; removed/g, '; obsolete')
    .replace(/\> removed/g, '>');
  fs.writeFileSync(__dirname + '/../steam_language/' + filename, fixedFile);
});
