"use strict";

var htmml2html = require('htmml');
var makeThumbs = require('./makeThumbs');
var checkTemplateDefs = require('./checkTemplateDefs');
var fse = require('fs-extra');

var templates = [ { 
	'htmml': './template-def/template-versafix-1.htmml', 
	'html': './dist/template/template-versafix-1.html',
	'imgDir': './template-def/img/', 
	'destImgDir': './dist/template/img/', 
	'modelPrefix': './model/template-versafix-1'
},
];

for (var i = 0; i < templates.length; i++) {
	htmml2html(templates[i].htmml, templates[i].html);
	fse.copySync(templates[i].imgDir, templates[i].destImgDir);
	checkTemplateDefs(templates[i].html, templates[i].modelPrefix);
	makeThumbs(templates[i].html, './edres/', 680, 340);
}
