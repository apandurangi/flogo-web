import { ProfileSelectionComponent } from './profile-select.component';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { TranslateModule } from 'ng2-translate';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ProfilesAPIService } from '../../../common/services/restapi/v2/profiles-api.service';
import { MockProfilesAPIService } from '../../../common/services/restapi/v2/profiles-api.service.mock';
import { By } from '@angular/platform-browser';
import { FLOGO_PROFILE_TYPE } from '../../../common/constants';
describe('Component: ProfileSelectionComponent', () => {
  let comp: ProfileSelectionComponent;
  let service = null;
  let fixture: ComponentFixture<ProfileSelectionComponent>;

  function compileComponent() {
    return TestBed.compileComponents();
  }

  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [{ provide: ProfilesAPIService, useClass: MockProfilesAPIService }],
      declarations: [ProfileSelectionComponent, ModalComponent], // declare the test component
    })
      .compileComponents();
  });

  beforeEach(inject([ProfilesAPIService], (serviceAPI: ProfilesAPIService) => {
    service = serviceAPI;
    fixture = TestBed.createComponent(ProfileSelectionComponent);
    comp = fixture.componentInstance;
  }));

  it('Should emit \'microservice\' when selecting microservice profile', (done) => {
    comp.profileSelectionModal.open();
    fixture.detectChanges();
    comp.onAdd.subscribe((profileDetails) => {
      expect(profileDetails.profileType).toEqual(FLOGO_PROFILE_TYPE.MICRO_SERVICE);
      done();
    });
    const de = fixture.debugElement.queryAll(By.css('.flogo-profile__section'));
    de[1].nativeElement.click();
  });

  it('Should show 3 devices in the list when device is selected', (done) => {
    comp.profileSelectionModal.open();
    comp.showList = true;
    service.getProfilesList().then((res) => {
      comp.devicesList = res;
      fixture.detectChanges();
      const de = fixture.debugElement.queryAll(By.css('.flogo-profile__list-element'));
      expect(de.length).toEqual(3);
      done();
    });
  });

  it('Should emit \'Atmel AVR\' when selecting Atmel AVR device profile', (done) => {
    comp.profileSelectionModal.open();
    comp.onAdd.subscribe((profileDetails) => {
      expect(profileDetails.deviceType).toEqual('Atmel AVR');
      done();
    });
    comp.showList = true;
    service.getProfilesList().then((res) => {
      comp.devicesList = res;
      fixture.detectChanges();
      const de = fixture.debugElement.queryAll(By.css('.flogo-profile__list-element'));
      de[0].nativeElement.click();
    });
  });
});
