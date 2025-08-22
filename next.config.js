module.exports = {
	images: {
		domains: [
			'courses-top.ru',
			'old-images.hb.ru-msk.vkcs.cloud'
		]
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				and: [/\.(js|ts)x?$/]
			},
			use: ['@svgr/webpack']
		});
		return config;
	}
};
