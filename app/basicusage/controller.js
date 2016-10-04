import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

/**
   Mixin specifying validations for controller.
*/
const ValidationsMixin = buildValidations({
    /**
       Validator for the title property. Title should not be blank.
    */
    title: validator('presence', { presence: true }),

    /**
       Validators for the code property. Code should be between 4 and 8 characters.
    */
    code: [
        validator('presence', true),
        validator('length', {
            min: 4,
            max: 8,
            disabled: Ember.computed.not('model.enableCodeLengthValidator'),
        }),
    ],
});

/**
   The controller for the basic usage page.
*/
export default Ember.Controller.extend(ValidationsMixin, {

    /**
       The title.
    */
    title: null,

    /**
       The code.
    */
    code: null,

    /**
       True if code length validator should be enabled.
    */
    enableCodeLengthValidator: true,
});
