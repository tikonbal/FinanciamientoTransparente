var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var User = new keystone.List('User');

User.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Usuario de Administrador', index: true }
	isTse: { type: Boolean, label: 'Usuario de Tse', index: true }
	isOp: { type: Boolean, label: 'Usuario de Op', index: true }
	isMediocom: { type: Boolean, label: 'Usuario de Medio de Comunicacion', index: true }
	isAsiosaciones: { type: Boolean, label: 'Usuario de Asiosaciones Civiles', index: true }
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});


/**
 * Registration
 */

User.defaultColumns = 'name,email, isAdmin';
User.register();
