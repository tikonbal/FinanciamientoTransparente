var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Banco = new keystone.List('Banco');

Banco.add({
	Nombre: { type: String, index: true },

});

Banco.track = true;
Banco.defaultColumns = 'Nombre';
Banco.register();
