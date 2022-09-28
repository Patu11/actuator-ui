const webpack = require('webpack');
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
	plugins: [
		new webpack.DefinePlugin({
			$ENV: {
				API_URL: JSON.stringify(process.env.API_URL)
			}
		})
	]
};
