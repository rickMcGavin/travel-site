// /Users/rickmcgavin/Library/Mobile Documents/com~apple~CloudDocs/Code/git_web_dev_job/travel-site/app/temp/scripts/

module.exports = {
	entry: {
		App: './app/assets/scripts/App.js',
		Vendor: './app/assets/scripts/Vendor.js'
	},
	output: {
		path: "/Users/rickmcgavin/Library/Mobile Documents/com~apple~CloudDocs/Code/git_web_dev_job/travel-site/app/temp/scripts/",
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}