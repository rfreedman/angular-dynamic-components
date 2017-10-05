import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {RedComponent} from './red/red.component';
import {GreenComponent} from './green/green.component';
import {BlueComponent} from './blue/blue.component';
import {PortalComponent} from './portal/portal.component';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h2>Dynamic Components</h2>
      <div #container style="display:flex;  align-items: flex-start;flex-wrap: wrap;height: 100%;"></div>
    </div>
  `,
  styles: [
  ]
})
export class AppComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  configs = [
    {
      'id': 1,
      'text': 'first component, blue',
      'type': 'blue'
    },
    {
      'id': 2,
      'text': 'second component, green',
      'type': 'green'
    },
    {
      type: 'unknown'
    },
    {
      'id': 3,
      'text': 'third component, red',
      'type': 'red'
    },
    {
      'id': 4,
      'text': 'fourth component, green',
      'type': 'green'
    },
    {
      'id': 5,
      'text': 'fith component, blue',
      'type': 'blue'
    },
    {
      'id': 6,
      'text': 'sixth component, green',
      'type': 'green'
    },
    {
      'id': 7,
      'text': 'seventh component, red',
      'type': 'red'
    },
    {
      'id': 8,
      'text': 'eighth component, green',
      'type': 'green'
    }
  ];

  constructor(private factoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.configs.forEach(config => {
        const componentType = this.componentType(config);
        if (componentType) {
          this.loadComponent(componentType, config);
        } else {
            console.error(`could not find component for config: ${new JsonPipe().transform(config)}`);
        }
      }
    );
  }

  private loadComponent(type: Type<PortalComponent>, config: any): void {
    const componentFactory = this.factoryResolver.resolveComponentFactory(type);
    const componentRef = this.container.createComponent(componentFactory);
    const inst = (<PortalComponent>componentRef.instance);
    inst.config = config;
  }

  private componentType(config) {
    if (config.type === 'red') {
      return RedComponent;
    }
    if (config.type === 'green') {
      return GreenComponent;
    }
    if (config.type === 'blue') {
      return BlueComponent;
    }
    return undefined;
  }
}
