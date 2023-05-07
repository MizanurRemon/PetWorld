import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerProfileComponentComponent } from './owner-profile-component.component';

describe('OwnerProfileComponentComponent', () => {
  let component: OwnerProfileComponentComponent;
  let fixture: ComponentFixture<OwnerProfileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerProfileComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
