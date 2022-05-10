
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItContainer = require("markdown-it-container");

module.exports = function (config) {

    // Watch our compiled assets for changes
    config.addWatchTarget('./compiled-assets/main.js');
    // Copy /compiled-assets to /assets
    config.addPassthroughCopy({ 'compiled-assets': 'assets/js' });
    config.addPassthroughCopy("./assets/css/");
    config.addWatchTarget("./assets/css/");

    config.addPassthroughCopy("_redirects");
    // config.addPassthroughCopy("assets");


    let options = {
        html: true,
        breaks: true,
        linkify: true
      };

    let markdownLib = markdownIt(options)
    .use(markdownItAttrs)
    .use(markdownItContainer, "wrapper")
    .use(markdownItContainer, "banner")
    .use(markdownItContainer, "banner-slider")
    .use(markdownItContainer, "homeserve-contents")
    .use(markdownItContainer, "the-leader-in-home")
    .use(markdownItContainer, "homeserve-features")
    .use(markdownItContainer, "feature")
    .use(markdownItContainer, "red-text")
    .use(markdownItContainer, "homeserve-services")
    .use(markdownItContainer, "service")
    .use(markdownItContainer, "get-instant-quote")
    .use(markdownItContainer, "get-instant-quote-upper")
    .use(markdownItContainer, "get-instant-quote-lower")
    .use(markdownItContainer, "about-us")
    .use(markdownItContainer, "about-us-left")
    .use(markdownItContainer, "about-us-right");

    config.setLibrary("md", markdownLib);

    config.addFilter('markdown', function(value) {
        return markdownLib.render(value);
    });

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html","njk","md"], 
        dir: {
            input: "src",
            output: "_site",
            include: "_includes"
        }
    }
}