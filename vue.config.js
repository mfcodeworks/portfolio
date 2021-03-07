module.exports = {
    pluginOptions: {
        webpackBundleAnalyzer: {
            analyzerMode: 'static',
            reportFilename: '../report.html',
            generateStatsFile: process.env.NODE_ENV !== 'production'
        }
    }
};
