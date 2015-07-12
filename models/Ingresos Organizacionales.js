var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Ingresos = new keystone.List('Ingresos');


Ingresos .add({
		Referencia: { type: String, initial: true, unique: true },
    Financista: { type: Types.Relationship, initial: false, ref: 'Financista', unique: true},//, index: true },
  	Banco: { type: Types.Relationship, initial: false, ref: 'Banco', unique: true},//, index: true },
		TipoIngreso: { type: Types.Relationship, initial: false, ref: 'TipoIngreso', unique: true},//, index: true },
		Monto: { type: String, initial: false},

});

Ingresos .track = true;
Ingresos .defaultColumns = 'Financista, Monto, Referencia, TipoIngreso';
Ingresos .register();
