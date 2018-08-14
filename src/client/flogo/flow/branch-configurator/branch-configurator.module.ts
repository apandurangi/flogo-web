import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { SharedModule as FlogoSharedModule } from '@flogo/shared';
import { MapperModule } from '../shared/mapper';
import {BranchConfiguratorComponent} from '@flogo/flow/branch-configurator/branch-configurator.component';


@NgModule({
  imports: [// module dependencies
    NgCommonModule,
    FlogoSharedModule,
    MapperModule,
  ],
  declarations: [
    BranchConfiguratorComponent,
  ],
  exports: [
    BranchConfiguratorComponent,
  ],
  providers: []
})
export class BranchMapperModule {
}
