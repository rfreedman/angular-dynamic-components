import {Component, ComponentRef, Input, OnInit} from '@angular/core';
import {PortalComponent} from '../portal/portal.component';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css']
})
export class BlueComponent implements PortalComponent, OnInit {
  config: any;
  componentRef: ComponentRef<PortalComponent>;

  constructor() { }

  ngOnInit() {
  }

  public remove() {
    this.componentRef.destroy();
  }
}
