import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertImageComponent } from './convert-image.component';

describe('ConvertImageComponent', () => {
  let component: ConvertImageComponent;
  let fixture: ComponentFixture<ConvertImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
