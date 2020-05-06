import { Directive, Inject, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[isBrowser]'
})
export class IsBrowserDirective implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}
