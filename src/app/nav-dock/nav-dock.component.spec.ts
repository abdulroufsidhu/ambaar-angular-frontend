import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDockComponent } from './nav-dock.component';

describe('NavDockComponent', () => {
  let component: NavDockComponent;
  let fixture: ComponentFixture<NavDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavDockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
