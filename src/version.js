const { resolve } = require('path');
const { writeFileSync } = require('fs-extra');
const packageFile = require('../package.json');

let version = {
  version: packageFile.version
};

if (process.env.TRAVIS) {
  version.commit = process.env.TRAVIS_COMMIT;
  version.buildId = process.env.TRAVIS_BUILD_ID;
  version.buildNumber = process.env.TRAVIS_BUILD_NUMBER;
}

const file = resolve(__dirname, '..', 'src', 'environments', 'version.ts');
writeFileSync(file,
  `// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
/!* tslint:disable *!/
export const version = ${JSON.stringify(version, null, 4)};
/!* tslint:enable *!/
`, { encoding: 'utf-8' });
