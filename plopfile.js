module.exports = function(plop) {
	// create your generators here

	plop.addHelper('splitOnCaps', splitOnCaps);

	plop.setGenerator('component', {
		description: 'this generates an entirely new component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'the name of the component (PascalCase, no Component at the end)',
				validate: isPascalCased,
			},
			{
				type: 'confirm',
				name: 'isFetching',
				message: 'Will the component fetch data over the network?',
			},
		],
		actions: (answers) => {
			const fetching = answers.isFetching ? '.fetching' : '';

			return [
				{
					type: 'add',
					path:
						'src/components/{{dashCase name}}.ts',
					templateFile: `templates/component${fetching}.hsb`,
				},
				{
					type: 'modify',
					path: 'src/index.ts',
					pattern: /(import)/i,
					template:
						"import { {{camelCase name}}Component } from './components/{{dashCase name}}';\n$1",
				},
				{
					type: 'modify',
					path: 'src/index.ts',
					pattern: /(\/\/log components)/i,
					template:
						"$1\nconsole.log({{camelCase name}}Component('cool value'));",
				},
				() => `Component creation succesful!`,
			];
		},
	});
};

/** Helper Functions */
const isPascalCased = input => {
	if (isUpperCase(input.charAt(0))) {
		return true;
	}
	return `string ${input} must be PascalCased.`;
};

const isUpperCase = myString => {
	return myString === myString.toUpperCase();
};

const splitOnCaps = txt => {
	return txt.split(/(?=[A-Z])/).join(' ');
};
