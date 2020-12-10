import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyAreasComponent } from './technology-areas.component';

describe('TechnologyAreasComponent', () => {
  let component: TechnologyAreasComponent;
  let fixture: ComponentFixture<TechnologyAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
