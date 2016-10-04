import BaseValidator from 'ember-cp-validations/validators/base';

const ValidName = BaseValidator.extend({

    /**
       Ember CP Validations hook that is called to validate a name. Returns true if
       the name is valid and an error message otherwise.
       @method validate
       @param {String} value The string name to validate.
       @param {Object} options The options provided to the validator.
       @param {Object} model The model containing the validated property.
       @param {String} attribute The name of the validated property.
       @return {Boolean|String}
    */
    validate(value, options) {
        let message = null;
        const numParts = options.numParts ? options.numParts : 2;

        if (value) {
            const nameParts = value.split(' ');

            // Check if name has the expected number of words
            if (nameParts.length !== numParts) {
                message = options.message ? options.message : `The name must have ${numParts} word(s)`;
            }
        }
        else {
            message = options.message ? options.message : 'The name is empty buddy';
        }

        return message ? message : true;
    }
});

export default ValidName;
