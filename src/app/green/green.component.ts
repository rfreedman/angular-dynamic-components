import {Component, Input, OnInit} from '@angular/core';
import {PortalComponent} from '../portal/portal.component';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent implements PortalComponent, OnInit {
  @Input() config: any;

  constructor() { }

  ngOnInit() {
  }

}
