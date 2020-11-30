import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilComposantComponent } from './appareil-composant.component';

describe('AppareilComposantComponent', () => {
  let component: AppareilComposantComponent;
  let fixture: ComponentFixture<AppareilComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppareilComposantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppareilComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
