import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolves } from './buildResolves'
import { BuildOptions } from './types/config'

export function buildWebpackConfig(
	options: BuildOptions
): webpack.Configuration {
	const { mode, paths } = options

	return {
		mode: mode,
		entry: paths.entry,
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolves(),
		plugins: buildPlugins(options),
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		devtool: options.isDev ? 'inline-source-map' : undefined,
		devServer: options.isDev ? buildDevServer(options) : undefined,
	}
}
