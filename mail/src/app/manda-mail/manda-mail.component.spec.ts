import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandaMailComponent } from './manda-mail.component';

describe('MandaMailComponent', () => {
  let component: MandaMailComponent;
  let fixture: ComponentFixture<MandaMailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MandaMailComponent]
    });
    fixture = TestBed.createComponent(MandaMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


