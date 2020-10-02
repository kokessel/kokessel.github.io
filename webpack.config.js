const path = require("path");

module.exports = {
	mode: "production",
	entry: "./js/main.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		path: path.resolve(__dirname, "js"),
		filename: "bundle.js",
	},
};
