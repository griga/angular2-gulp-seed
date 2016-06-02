import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: 'app',
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {}
