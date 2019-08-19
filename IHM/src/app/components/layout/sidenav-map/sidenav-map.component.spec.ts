import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavMapComponent } from './sidenav-map.component';

describe('SidenavMapComponent', () => {
  let component: SidenavMapComponent;
  let fixture: ComponentFixture<SidenavMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
