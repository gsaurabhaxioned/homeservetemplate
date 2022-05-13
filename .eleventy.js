
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItContainer = require("markdown-it-container");

module.exports = function (config) {
    config.addPassthroughCopy("./main.js");
    config.addWatchTarget('./main.js');
    config.addPassthroughCopy("./assets/css/");
    config.addWatchTarget("./assets/css/");
    config.addPassthroughCopy("./assets/font-awesome-4.7.0/");
    config.addWatchTarget("./assets/font-awesome-4.7.0/");
    config.addShortcode('serviceinfo', function() {
        return `<p>As more and more homes have modernized over the last 30 years, the demand for bigger and better appliances has increased as well. It was not long ago</p>`;
      })

    config.addShortcode('image', function() {
        return `<img src="http://placehold.jp/329x194.png" alt="Homeserve" class="homeserve-img">`;
      })

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
    .use(markdownItContainer, "service-icon")
    .use(markdownItContainer, "service-content")
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