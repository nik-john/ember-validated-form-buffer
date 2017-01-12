import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';

const { assign: emberAssign, merge } = Ember;
const assign = emberAssign || merge;

export default function startApp(attrs) {
  let application;

  // use defaults, but you can override
  let attributes = assign({}, config.APP, attrs);

  Ember.run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
