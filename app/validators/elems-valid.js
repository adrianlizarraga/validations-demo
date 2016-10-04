import Ember from 'ember';
import BaseValidator from 'ember-cp-validations/validators/base';

const ElemsValid = BaseValidator.extend({

    /**
       Ember CP Validations hook that is called to validate an array of elements that also implement a validations mixin.
       The goal of this validator is to link element validation to the validation of the containing array. Thus, any
       element validation errors will be forwarded to the containing array. Functions similar to the built-in belongs-to
       validator, but works for Ember Objects.
       @method validate
       @param {Array} value The array value to validate.
       @return {Boolean|String}
    */
    validate: function(value) {
        let message = null;

        if (Ember.isArray(value)) {

            // Check if any element is invalid and set the error message
            const invalid = value.any(elem => {
                if (!elem.get('validations.isValid')) {
                    message = elem.get('validations.messages') ? elem.get('validations.messages')[0] : null;
                    return true;
                }

                return false;
            });

            if (invalid && !message) {
                message = 'An element is invalid';
            }
        }
        else {
            message = 'Not an array';
        }

        return message ? message : true;
    },
});


export default ElemsValid;
