import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import TestPage from './globals/TestPage'


const globals = [
	TestPage

]
export default buildConfig({
	admin: {
		user       : Users.slug,
		bundler    : webpackBundler(),
		livePreview: {
			url: process.env.PAYLOAD_PUBLIC_NEXT_URL, // The URL to your front-end, this can also be a function (see below)
			globals    : ['TestGlobal'],
		},
	},
		globals     : globals,


	editor: slateEditor({}),
	collections: [Users],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	},
	plugins: [payloadCloud()],
	db: mongooseAdapter({
		url: process.env.DATABASE_URI,
	}),
})
