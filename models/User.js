var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var User = new keystone.List('User', {
	label: 'Usuarios'
});

User.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Usuario de Administrador', index: true },
	isTse: { type: Boolean, label: 'Usuario del Tse ',noedit: true },
	isOrganizacionp: { type: Boolean,label: 'Usuario de una Organizacion', noedit: true },
	isMediocom: { type: Boolean,label: 'Usuario de Medios de Comunicacion', noedit: true },
	isAsociaciones: { type: Boolean,label: 'Usuario de Asociaciones', noedit: true }
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});

User.schema.virtual('canAccessKeystone').get(function() {
	return this.isTse;
});

User.schema.virtual('canAccessKeystone').get(function() {
	return this.isOrganizacionp;
});

User.schema.virtual('canAccessKeystone').get(function() {
	return this.isMediocom;
});

User.schema.virtual('canAccessKeystone').get(function() {
	return this.isAsociaciones;
});

/**
 * Registration
 */

User.defaultColumns = 'name,email,isAdmin,isTse,isOrganizacionp,isMediocom,isAsociaciones';
User.register();
