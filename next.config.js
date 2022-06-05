const path = require('path');

const urlPrefix = process.env.URL_PREFIX ? process.env.URL_PREFIX : '';

module.exports = {
	assetPrefix: urlPrefix,
	basePath: urlPrefix,
	trailingSlash: true,
	webpack(config, options) {
		config.resolve.alias = {
			...config.resolve.alias,
			['@']: './src',
		};

		return config;
	},
};
