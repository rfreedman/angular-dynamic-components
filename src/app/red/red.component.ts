import {Component, Input, OnInit} from '@angular/core';
import {PortalComponent} from '../portal/portal.component';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements PortalComponent, OnInit {
  @Input() config: any;

  constructor() {
  }

  ngOnInit() {
  }

}
