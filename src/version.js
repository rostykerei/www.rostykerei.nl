const { resolve, relative } = require('path');
const { writeFileSync } = require('fs-extra');
const packageFile = require('../package.json');

let version = {
  version: packageFile.version
};

if (process.env.TRAVIS) {
  version.commit = process.env.TRAVIS_COMMIT;
  version.buildId = process.env.TRAVIS_BUILD_ID
  version.buildNumber = process.env.TRAVIS_BUILD_NUMBER
}

const file = resolve(__dirname, '..', 'src', 'environments', 'version.ts');
writeFileSync(file,
  `// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
/!* tslint:disable *!/
export const version = ${JSON.stringify(version, null, 4)};
/!* tslint:enable *!/
`, { encoding: 'utf-8' });


/*
const { gitDescribeSync } = require('git-describe');
const { version } = require('../package.json');
const { resolve, relative } = require('path');
const { writeFileSync } = require('fs-extra');

const gitInfo = gitDescribeSync({
  dirtyMark: false,
  dirtySemver: false
});

let version = {};

process.env.TRAVIS = true;
process.env.TRAVIS_COMMIT
process.env.TRAVIS_COMMIT


gitInfo.version = version;

const file = resolve(__dirname, '..', 'src', 'environments', 'version.ts');
writeFileSync(file,
  `// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
/!* tslint:disable *!/
export const VERSION = ${JSON.stringify(gitInfo, null, 4)};
/!* tslint:enable *!/
`, { encoding: 'utf-8' });

console.log(`Wrote version info ${gitInfo.raw} to ${relative(resolve(__dirname, '..'), file)}`);
*/
