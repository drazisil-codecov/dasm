const dasm = require('./src');

test('hello should return hello', () => {
	expect(dasm.hello()).toEqual('hello');
});
