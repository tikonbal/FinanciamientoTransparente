var keystone = require('keystone'),
	Types = keystone.Field.Types;

var TipoProveedores = new keystone.List('TipoProveedores', {
	autokey: { from: 'name', path: 'key' }
});

TipoProveedores.add({
	name: { type: String, required: true }
});

TipoProveedores.relationship({ ref: 'Proveedores', path: 'proveedores' });

TipoProveedores.track = true;
TipoProveedores.register();