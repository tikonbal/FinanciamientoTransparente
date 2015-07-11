// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone');

keystone.init({

	'name': 'FinanciamientoTransparente',
	'brand': 'FinanciamientoTransparente',
	
	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',
	
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'p!t1:3u?W+?tS#]Ao/pr,*I.0uyr||h]P;.1:<+7.5%tpTHy-vWv8a5FsbJ)/heZ'

});

keystone.import('models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('routes', require('./routes'));

keystone.set('nav', {
	'enquiries': 'enquiries',
	'users': 'users'
});

keystone.start();
