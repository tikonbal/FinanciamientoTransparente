var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Proveedores = new keystone.List('Proveedores', {
	map: { name: 'nombre_comercial' },
	autokey: { path: 'slug', from: 'nombre_comercial', unique: true }
});

Proveedores.add({
	nombre_comercial: { type: String, required: true },
	slug: { type: String, index: true },
	razon_social: { type: String, index: true },
	direccion: { type: String, index: true },
	telefono: { type: String, index: true },
	email: { type: String, index: true },
	responsable: { type: String, index: true },
	proveedores: { type: Types.Relationship, ref: 'TipoProveedores', many: false }
});

Proveedores.track = true;
Proveedores.defaultColumns = 'nombre_comercial';
Proveedores.register();