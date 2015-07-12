var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Financista = new keystone.List('Financista');

Financista.add({
	Nit: { type: String}, //,index: true },
	DPI: { type: String},//, index: true },
	Nombre: { type: String},//, index: true },
	Tel: { type: String},//, index: true },
	Direccion: { type: String},//, index: true },

});

Financista.track = true;
Financista.defaultColumns = 'Nit,DPI,Nombre,Tel,Direccion';
Financista.register();
