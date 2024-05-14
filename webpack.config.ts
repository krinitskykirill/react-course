import path from 'path'
import webpack from 'webpack'
import { buildLoaders } from './config/build/buildLoaders'
import { buildPlugins } from './config/build/buildPlugins'
import { buildResolves } from './config/build/buildResolves'

const config: webpack.Configuration = {
	mode: 'production',
	entry: path.resolve(__dirname, 'src/index.ts'),
	module: {
		rules: buildLoaders(),
	},
	resolve: buildResolves(),
	plugins: buildPlugins(),
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
}

export default config
