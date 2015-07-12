var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Ingresos_Pp = new keystone.List('Ingresos_Pp');


Ingresos_Pp.add({
    Financista: { type: Types.Relationship, initial: true, ref: 'Financista', unique: true},//, index: true },
  	Banco: { type: Types.Relationship, initial: true, ref: 'Banco', unique: true},//, index: true },
    Monto: { type: Number, index: true },

});

Ingresos_Pp.track = true;
Ingresos_Pp.defaultColumns = 'Financista,Banco,Monto';
Ingresos_Pp.register();
