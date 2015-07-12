var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Ingresos = new keystone.List('Ingresos ');


Ingresos .add({
    Financista: { type: Types.Relationship, initial: true, ref: 'Financista', unique: true},//, index: true },
  	Banco: { type: Types.Relationship, initial: true, ref: 'Banco', unique: true},//, index: true },
    Monto: { type: Number, index: true },

});

Ingresos .track = true;
Ingresos .defaultColumns = 'Financista,Banco,Monto';
Ingresos .register();
