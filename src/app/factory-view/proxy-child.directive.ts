import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appProxyChild]'
})
export class ProxyChildDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
