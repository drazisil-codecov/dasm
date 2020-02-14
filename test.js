const dasm = require('./src');

describe('Dasm', () => {
	test('hello should return hello', () => {
		expect(dasm.hello()).toEqual('hello');
	});
});
