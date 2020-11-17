#!/usr/bin/env node

const dasm = require('../src');
process.exit(require('yargs')
	.scriptName('dasm')
	.command(
		'$0',
		'the default command',
		() => {},
		argv => {
			console.log(dasm.hello(argv));
		}
	)
	.help().argv);
