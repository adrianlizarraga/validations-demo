import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

/**
   Mixin specifying validations for controller.
*/
const ValidationsMixin = buildValidations(
    {
        /**
         Validator for the title property. Title should not be blank.
         */
        title: validator('presence', { presence: true, disabled: Ember.computed.not('model.focusedOnInput.title') }),

        /**
         Validators for the code property. Code should be between 4 and 8 characters.
         */
        code: {
            disabled: Ember.computed.not('model.focusedOnInput.code'),
            validators: [
                validator('presence', true),
                validator('length', {
                    min: 4,
                    max: 8,
                    dependentKeys: [ 'model.focusedOnInput.code' ],
                }),
            ],
        },
    },
);

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
    enableCodeLengthValidator: false,

    /**
       Keeps track of inputs that have received focus. Maps a property name to a boolean value
       indicating if the input's focus-out event has been processed.
    */
    focusedOnInput: null,

    /**
       Initializes controller.
    */
    init: function() {
        this._super(...arguments);

        this.set('focusedOnInput', Ember.Object.create({}));
    },

    actions: {
        focusOut: function(name) {
            this.get('focusedOnInput').set(name, true);
        },
    },
});
