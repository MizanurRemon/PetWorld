import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagWisePostComponent } from './tag-wise-post.component';

describe('TagWisePostComponent', () => {
  let component: TagWisePostComponent;
  let fixture: ComponentFixture<TagWisePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagWisePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagWisePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
