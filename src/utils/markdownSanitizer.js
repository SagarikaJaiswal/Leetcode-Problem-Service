const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown");

const turndownService = new TurndownService();
function sanitizeMarkdownContent(markdownContent) {
  // 1. Convert markdown to Html
  const convertedHtml = marked.parse(markdownContent);
  // 2. Clean the converted Html
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(["img"]),
    allowedAttributes: sanitizeHtmlLibrary.defaults.allowedAttributes,
  });
  // 3. Convert the clean html to markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
