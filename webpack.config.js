module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		path: "/Users/rickmcgavin/Library/Mobile Documents/com~apple~CloudDocs/Code/git_web_dev_job/travel-site/app/temp",
		filename: "App.js"
	},
	module: {
		loaders: [
			{
				loader: 'babel',
				query: {
					presets: ['es2015']
				},
				test: /\.js%/,
				exclude: /node_modules/
			}
		]
	}
}