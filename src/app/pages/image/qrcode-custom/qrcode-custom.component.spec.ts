import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeCustomComponent } from './qrcode-custom.component';

describe('QrcodeCustomComponent', () => {
  let component: QrcodeCustomComponent;
  let fixture: ComponentFixture<QrcodeCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrcodeCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
