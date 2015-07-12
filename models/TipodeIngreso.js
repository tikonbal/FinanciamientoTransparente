var keystone = require('keystone'),
	Types = keystone.Field.Types;

var TipoIngreso = new keystone.List('TipoIngreso', {
	autokey: { from: 'name', path: 'key' }
});

TipoIngreso.add({
	name: { type: String, required: true }
});

TipoIngreso.relationship({ ref: 'Ingresos', path: 'ingresos' });

TipoIngreso.track = true;
TipoIngreso.register();
