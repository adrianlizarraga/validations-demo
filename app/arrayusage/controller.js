import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

/**
   Mixin specifying validations for controller.
*/
const ValidationsMixin = buildValidations({
    emailDomains: {
        validators: [
            validator('collection', true),
            validator('unique-string-elems', {
                value: (model, attribute) => model.get(attribute).map(domainObj => domainObj.get('domainValue')),
                dependentKeys: [ 'model.emailDomains.@each.domainValue' ],
            }),
            validator('elems-valid'),
        ],
    },
});

/**
   A mixin object provided by ember-cp-validations that encapsulates validation criteria for
   email domains.
*/
const EmailDomainValidationsMixin = buildValidations({
    domainValue: {
        validators: [
            validator('presence', {
                presence: true,
                ignoreBlank: true,
                message: 'Email domains cannot be blank',
            }),
            validator('format', {
                regex: /^(?!\-)(?:[a-zA-Z\d\-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}$/,
                message: 'Email domains must be valid',
            }),
        ],
    },
});

/**
   A model for an email domain.
*/
const EmailDomainModel = Ember.Object.extend(EmailDomainValidationsMixin, {
    domainValue: null,
});

/**
   The controller demonstrating array validation usage.
*/
export default Ember.Controller.extend(ValidationsMixin, {

    /**
       Array of email domains.
    */
    emailDomains: null,

    /**
       Method that initializes array of email domains.
    */
    init: function() {
        this._super(...arguments);

        this.set('emailDomains', [
            EmailDomainModel.create(Ember.getOwner(this).ownerInjection(), {
                domainValue: 'gmail.com',
            }),
            EmailDomainModel.create(Ember.getOwner(this).ownerInjection(), {
                domainValue: 'uni.edu',
            }),
        ]);
    }
});
