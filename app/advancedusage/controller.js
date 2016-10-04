import Ember from 'ember';
import moment from 'moment';
import { validator, buildValidations } from 'ember-cp-validations';

/**
   Mixin specifying validations for controller.
*/
const ValidationsMixin = buildValidations({
    /**
       Validator for the title property. Title should not be blank.
    */
    beginDate: {
        description: 'Begin date',
        validators: [
            validator('presence', true),
            validator('date', {
                before: function() {
                    return moment(this.get('model.endDate')).format('YYYY-MM-DD');
                }.property('model.endDate'),
                precision: 'day',
                format: 'YYYY-MM-DD',
                errorFormat: 'YYYY-MM-DD',
                message: '{description} must be before end date',
            }),
        ]
    },

    /**
       Validators for the begin date property. Begin date should be before end date.
    */
    endDate: {
        description: 'End date',
        validators: [
            validator('presence', true),
            validator('date', {
                after: function() {
                    return moment(this.get('model.beginDate')).format('YYYY-MM-DD');
                }.property('model.beginDate'),
                precision: 'day',
                format: 'YYYY-MM-DD',
                errorFormat: 'YYYY-MM-DD',
                message: '{description} must be before end date',
            }),
        ]
    },

    /**
       Validator for the nested user.name property.
    */
    'user.name': [
        validator('presence', {
            presence: true,
            ignoreBlank: true,
        }),
        validator('valid-name', {
            numParts: 2,
            value: (model, attribute) => model.get(attribute) ? model.get(attribute).trim() : null,
        }),
    ],

    /**
       Validator for the nested user.id property.
    */
    'user.id': validator('number', {
        allowString: true,
        integer: true,
        gt: 5,
        lte: 100
    }),
});

/**
   The controller for the basic usage page.
*/
export default Ember.Controller.extend(ValidationsMixin, {

    /**
       The begin date.
    */
    beginDate: null,

    /**
       The end date.
    */
    endDate: null,

    /**
       Some user object.
    */
    user: null,

    /**
       Method to initialize user.
    */
    init: function() {
        this._super(...arguments);

        this.set('user', {
            name: '',
            id: 0,
        });
    }
});
