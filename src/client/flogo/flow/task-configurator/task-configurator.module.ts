import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { SharedModule as FlogoSharedModule } from '@flogo/shared';
import { MapperModule } from '../shared/mapper';

import { TaskConfiguratorComponent } from './task-configurator.component';
import { InputMapperComponent } from './input-mapper';
import { IteratorComponent } from './iterator/iterator.component';

@NgModule({
  imports: [// module dependencies
    NgCommonModule,
    FlogoSharedModule,
    MapperModule,
  ],
  declarations: [
    InputMapperComponent,
    IteratorComponent,
    TaskConfiguratorComponent,
  ],
  exports: [
    TaskConfiguratorComponent,
  ],
  providers: []
})
export class TaskMapperModule {
}
