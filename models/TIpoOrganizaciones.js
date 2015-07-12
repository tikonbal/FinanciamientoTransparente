var keystone = require('keystone'),
	Types = keystone.Field.Types;

var TipoOrganizaciones = new keystone.List('TipoOrganizaciones', {
	autokey: { from: 'name', path: 'key' }
});

TipoOrganizaciones.add({
	name: { type: String, required: true }
});

TipoOrganizaciones.relationship({ ref: 'Organizaciones', path: 'organizaciones' });

TipoOrganizaciones.track = true;
TipoOrganizaciones.register();