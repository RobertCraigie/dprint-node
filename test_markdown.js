const dprint = require('./');

let input = `
# Foo








# Bar
`;

console.log(dprint.formatMarkdown(input, {lineWidth: 80}));
