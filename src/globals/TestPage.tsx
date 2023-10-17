


import { GlobalConfig } from 'payload/types'

const TestPage : GlobalConfig = {
	slug: 'TestGlobal',
	access: {
		read   : () => true,
	},
	fields: [
		{
			name         : "name",
			type         : "text",
			label        : "Label",
			//defaultValue : "Default value",
			required     : false,
			minLength    : 0,
			maxLength    : 100,
		},
	],
}

export default TestPage



