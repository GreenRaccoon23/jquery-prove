!function ($) {
	"use strict";

	$.fn.proveRequired = function(options){

		var input = $(this);
		var value = input.vals();
		var enabled = $('body').booleanator(options.enabled);
		var has = input.hasValue(options.prefix)? 'success' : 'danger';
		var validation = (enabled)? has : 'reset';
		var message = (has === 'danger')? options.message : undefined;

		if (options.debug){
			console.groupCollapsed('Validator.proveRequired()', options.field, options.initiator);
				console.log('options', options);
				console.log('input', input);
				console.log('value', value);
				console.log('enabled', enabled);
				console.log('validation', validation);
				console.log('message', message);
			console.groupEnd();
		}

		return {
			field: options.field,
			validator: options.validator,
			status: 'validated',
			validation: validation,
			message: message
		};
	};
}(window.jQuery);
