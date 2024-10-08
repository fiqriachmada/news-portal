import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsComponent } from './arts.component';

describe('ArtsComponent', () => {
  let component: ArtsComponent;
  let fixture: ComponentFixture<ArtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
