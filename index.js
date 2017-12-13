/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-2-legacy',

  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/ember-k.js');
    this.import('vendor/safe-string.js');
    this.import('vendor/enumerable-contains.js');
    this.import('vendor/underscore-actions.js');
    this.import('vendor/reversed-observer.js');
    this.import('vendor/initializer-arity.js');
    this.import('vendor/router-resource.js');
    this.import('vendor/current-when.js');
  }
};
