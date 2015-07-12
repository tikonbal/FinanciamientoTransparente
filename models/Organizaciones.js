var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Organizaciones = new keystone.List('Organizaciones', {
	map: { name: 'nombre_organizacion' },
	autokey: { path: 'slug', from: 'nombre_organizacion', unique: true }
});

Organizaciones.add({
	nombre_organizacion: { type: String, required: true },
	slug: { type: String, index: true },
	siglas: { type: String, index: true },
	secretario_general: { type: String, index: true },
	direccion_org: { type: String, index: true },
	telefono_org: { type: String, index: true },
	
	organizaciones: { type: Types.Relationship, ref: 'TipoOrganizaciones', many: false }
});

Organizaciones.track = true;
Organizaciones.defaultColumns = 'nombre_organizacion';
Organizaciones.register();