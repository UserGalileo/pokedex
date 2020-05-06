import { Directive, Inject, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[isServer]'
})
export class IsServerDirective implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}
