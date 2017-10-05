import {Component, Input, OnInit} from '@angular/core';
import {PortalComponent} from '../portal/portal.component';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css']
})
export class BlueComponent implements PortalComponent, OnInit {
  @Input() config: any;

  constructor() { }

  ngOnInit() {
  }

}
