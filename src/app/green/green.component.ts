import {Component, ComponentRef, Input, OnInit} from '@angular/core';
import {PortalComponent} from '../portal/portal.component';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent implements PortalComponent, OnInit {
  config: any;
  componentRef: ComponentRef<PortalComponent>;

  constructor() { }

  ngOnInit() {
  }

  public remove() {
    this.componentRef.destroy();
  }
}
