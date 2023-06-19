import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCharacteristicsComponent } from './form-characteristics.component';

describe('FormCharacteristicsComponent', () => {
  let component: FormCharacteristicsComponent;
  let fixture: ComponentFixture<FormCharacteristicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCharacteristicsComponent]
    });
    fixture = TestBed.createComponent(FormCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
