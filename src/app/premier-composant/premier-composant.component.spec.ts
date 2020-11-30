import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierComposantComponent } from './premier-composant.component';

describe('PremierComposantComponent', () => {
  let component: PremierComposantComponent;
  let fixture: ComponentFixture<PremierComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremierComposantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
