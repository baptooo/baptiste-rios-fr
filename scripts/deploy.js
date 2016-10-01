const Rsync = require('rsync');
const { readFileSync } = require('fs');
const { normalize } = require('path');
const root = normalize(__dirname + '/../');
const config = JSON.parse(readFileSync(`${root}/deploy.json`, 'utf-8'));

const deploy = Rsync.build(Object.assign(config, {
  source: `${root}/index.html`,
}));

deploy.execute((error, code, cmd) => {
  error && console.log(`error:${error}`);
  code && console.log(`code:${code}`);
  cmd && console.log(`cmd:${cmd}`);
});
