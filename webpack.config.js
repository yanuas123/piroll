const path = require("path");
const webpack = require("webpack");
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {
	BundleStatsWebpackPlugin
} = require('bundle-stats');
const auth = require("./auth.js");



const isDevelopment = process.env.NODE_ENV === 'development';



let dir_for_copy = [{
		from: "src/assets/fonts", // copy fonts
		to: "assets/fonts/"
	}, {
		from: "src/images/favicons", // copy favicons
		to: "images/favicons/"
	}, {
		from: "src/plugins", // copy plugins
		to: "plugins",
		ignore: ["version"]
	}, {
		from: "src/assets/css", // copy css
		to: "assets/css/",
		ignore: isDevelopment ? undefined : ["src/assets/css/test.css"]
	}, {
		from: "src/images/ico", // copy icons
		to: "images/ico"
	}];
if(isDevelopment) dir_for_copy[dir_for_copy.length] = {
		from: "src/images/mock", // copy mockups
		to: "images/mock"
	};
let dir_for_assets_tags = [{
		path: "assets/css/basic.css",
		attributes: {
			type: "text/css"
		}
	}, {
		path: "assets/css/style.css",
		attributes: {
			type: "text/css"
		}
	}];
if(isDevelopment) dir_for_assets_tags[dir_for_assets_tags.length] = {
		path: "assets/css/test.css",
		attributes: {
			type: "text/css"
		}
	};


let css_module_loader = [
	MiniCssExtractPlugin.loader,
	{
		loader: 'css-loader',
		options: {
			sourceMap: isDevelopment,
			modules: {
				localIdentName: "[name]__[local]"
			}
		}
	}];
if(!isDevelopment) css_module_loader[css_module_loader.length] = {
		loader: 'postcss-loader'
	};
css_module_loader[css_module_loader.length] = {
	loader: 'sass-loader',
	options: {
		sourceMap: isDevelopment
	}
};

let css_module = [{
		loader: 'file-loader',
		options: {
			name: 'assets/css/style.css',
			sourceMap: isDevelopment
		}
	}, {
		loader: 'extract-loader',
		options: {
			sourceMap: isDevelopment
		}
	}, {
		loader: 'css-loader?-url',
		options: {
			sourceMap: isDevelopment
		}
	}];
if(!isDevelopment) css_module[css_module.length] = {
		loader: 'postcss-loader'
	};
css_module[css_module.length] = {
	loader: 'sass-loader',
	options: {
		sourceMap: isDevelopment
	}
};



module.exports = {
	mode: isDevelopment ? "development" : "production",
	entry: ["./src/app.jsx", "./src/style.scss"],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: "app.js"
	},
	module: {
		rules: [{ // compile react
				test: /\.jsx$/,
				exclude: [/node_modules/, /nbproject/],
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env", "@babel/preset-react"]
				}
			}, { // module css loader
				test: /\.module\.scss$/,
				loader: css_module_loader
			}, { // common css loader
				test: /\.scss$/,
				exclude: [/\.module\.scss$/, /node_modules/, /nbproject/, /instruction/, /public/],
				loader: css_module
			}, { // images loader
				test: /\.(jpe?g|png|gif)$/i,
				exclude: [/node_modules/, /nbproject/, /instruction/, /public/],
				use: [{
						loader: 'file-loader',
						options: {
							publicPath: "../../images/images/",
							outputPath: "images/images",
							name: "[name].[ext]"
						}
					}, {
						loader: 'kraken-loader',
						options: {
							enabled: !isDevelopment,
							secret: auth.kraken.secret,
							lossy: true,
							key: auth.kraken.key
						}
					}]
			}, { // svg loader
				test: /\.svg$/i,
				exclude: [/node_modules/, /nbproject/, /instruction/, /public/],
				use: [{
						loader: 'file-loader',
						options: {
							publicPath: "../../images/ico/",
							outputPath: "images/ico/",
							name: "[name].[ext]"
						}
					}]
			}]
	},
	plugins: [
		new CleanWebpackPlugin({
			dry: true,
			cleanOnceBeforeBuildPatterns: ["**/*"]
		}),
		new CopyPlugin(dir_for_copy),
		new HtmlWebpackPlugin({
			template: "src/index.ejs"
		}),
		new HtmlWebpackTagsPlugin({
			append: false,
			jsExtensions: ['.js'],
			cssExtensions: ['.css'],
			usePublicPath: false,
			links: dir_for_assets_tags
		}),
		new MiniCssExtractPlugin({
			filename: "assets/css/app.css"
		}),
		new BundleStatsWebpackPlugin({
			baseline: true,
			stats: {
				assets: true,
				entrypoints: true,
				chunks: true,
				modules: true
			}
		})
	],
	devtool: isDevelopment ? "inline-source-map" : "none",
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				parallel: true
			})
		]
	},
	performance: {
		hints: false
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss']
	},
	watchOptions: {
		ignored: [/node_modules/, /nbproject/, /instruction/]
	}
};