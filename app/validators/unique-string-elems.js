import Ember from 'ember';
import BaseValidator from 'ember-cp-validations/validators/base';

const UniqueStringElems = BaseValidator.extend({

    /**
       Ember CP Validations hook that is called to validate an array of strings. Returns true if
       the array has no duplicates and an error message otherwise.
       @method validate
       @param {Array} value The array value to validate.
       @param {Object} options The options provided to the validator.
       @return {Boolean|String}
    */
    validate: function(value, options) {
        let message = null;

        if (Ember.isArray(value)) {

            // Array has duplicates and it shouldn't
            if (this._hasStringDuplicates(value)) {
                message = options.message ? options.message : 'One or more elements is duplicated';
            }
        }
        else {
            message = 'Not an array';
        }

        return message ? message : true;
    },

    /**
       Utility to determine if array has any string duplicates. Implementation borrowed
       from SO Post: http://stackoverflow.com/questions/7376598/in-javascript-how-do-i-check-if-an-array-has-duplicate-values
       @method _hasStringDuplicates
       @param {Array} array The array of strings to check for duplicates.
       @return {Boolean}
    */
    _hasStringDuplicates: function(array) {
        const valuesSoFar = {};

        for (let index = 0; index < array.length; ++index) {
            const value = array[index].toLowerCase();

            if (Object.prototype.hasOwnProperty.call(valuesSoFar, value)) {
                return true;
            }
            valuesSoFar[value] = true;
        }
        return false;
    },
});

export default UniqueStringElems;
