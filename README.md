# Example of dynamic Component creation in Angular 4+ 

## Demo at https://rfreedman.github.io/angular-dynamic-components/

The important bits are:
 1. Register your dynamic components in the 'entryComponents' section of your module
 2. Create a ViewChild of type ViewContainerRef in the parent Component - this is where the dynamically created Components will be placed.
 3. Inject a ComponentFactoryResolver into the parent component - this is used to dynamically create components and place them in the ViewContainerRef.
