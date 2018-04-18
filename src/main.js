import environment from './environment';
import { ComponentRegistry } from 'aurelia-web-components';

//https://developers.google.com/web/fundamentals/web-components/customelements

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .globalResources([
      'resources/elements/my-element'
    ])
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => {
    let registry = aurelia.container.get(ComponentRegistry);

    //The following line takes all global resource custom elements and registers them as web components.
    //Once the element is registered, in-page elements will begin rendering.
    registry.registerAllGlobalElements();

    aurelia.setRoot();
  });
}
