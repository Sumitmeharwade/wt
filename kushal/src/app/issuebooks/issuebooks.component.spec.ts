import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuebooksComponent } from './issuebooks.component';

describe('IssuebooksComponent', () => {
  let component: IssuebooksComponent;
  let fixture: ComponentFixture<IssuebooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssuebooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IssuebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
