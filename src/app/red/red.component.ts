import {Component, ComponentRef, Input, OnInit} from '@angular/core';
import {PortalComponent} from '../portal/portal.component';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements PortalComponent, OnInit {
  config: any;
  componentRef: ComponentRef<PortalComponent>;

  constructor() {
  }

  ngOnInit() {
  }

  public remove() {
    this.componentRef.destroy();
  }
}
