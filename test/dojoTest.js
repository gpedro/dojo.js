const dojo = require('../src/index');
const test = require('ava');

// https://github.com/avajs/ava#assertions
test('Coding Dojo', t => {
    t.falsy(dojo.yo);
});
