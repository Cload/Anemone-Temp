import { sandboxOf } from 'angular-playground';
import { UnitCardComponent } from './unit-card.component';


export default sandboxOf(UnitCardComponent)
  .add('default', {
    template: `<app-unit-card></app-unit-card>`
  });
