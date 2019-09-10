import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleventComponent } from './modalevent.component';

describe('ModaleventComponent', () => {
  let component: ModaleventComponent;
  let fixture: ComponentFixture<ModaleventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaleventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
