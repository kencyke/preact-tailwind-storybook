const preactCliPostCSS = require("preact-cli-postcss");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob");

// Custom PurgeCSS extractor for special characters in Tailwind's classnames
class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:\/]+/g) || [];
    }
}

// PurgeCSS webpack plugin
const purgeCssPlugin = new PurgecssPlugin({
    paths: glob.sync("./src/**/*.ts"),
    extractors: [
        {
            extractor: TailwindExtractor,
            extensions: ["ts", "tsx"]
        }
    ]
});

export default function(config, env, helpers) {
    // Use postcss.config.js instead of default postCSS config
    preactCliPostCSS(config, helpers);

    config.module.rules.push({
        test: /\.tsx?$/,
        loader: require.resolve("ts-loader")
    });

    // Run styles through purgeCSS for production only
    if (env.production) {
        config.plugins.push(purgeCssPlugin);
    }
    
    return config;
}