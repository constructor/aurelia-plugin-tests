import { inject, useShadowDOM, bindable } from 'aurelia-framework';

//https://discourse.aurelia.io/t/temporary-styling-for-viewmodels-without-injecting-into-head/177/4
//https://discourse.aurelia.io/t/vanilla-web-components-slots/1000/2

// With '@useShadowDOM()' the result of $('my-element h1') is 'null'

@useShadowDOM()
@inject(Element)
export class MyElement {
  @bindable value;

  constructor(ele) {
    this.ele = ele;
  }

  valueChanged(newValue, oldValue) {

  }

  attached() {

  }

}

