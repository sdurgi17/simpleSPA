document.querySelector('p').textContent = 'this is index page';
var page = require('page');
page('/Link1', function () { 
	a = require('./link1.js');
	document.querySelector('p').textContent = a.getContent();
});
page('/Link2', function() { document.querySelector('p').textContent = 'this is link2';});
page('/Link3', function() { document.querySelector('p').textContent = 'this is link3';});
page('/Link4', function() { document.querySelector('p').textContent = 'this is link4';});
page('/Link5', function() { document.querySelector('p').textContent = 'this is link5';});
page();