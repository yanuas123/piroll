module.exports = {
	plugins: [
		require('cssnano')({
			autoprefixer: {
				browsers: ['> 0%'],
				overrideBrowserslist: ['> 0%']
			},
			zindex: false
		}),
		require('autoprefixer')({
			add: true,
			overrideBrowserslist: ['> 0%']
		})
	]
};