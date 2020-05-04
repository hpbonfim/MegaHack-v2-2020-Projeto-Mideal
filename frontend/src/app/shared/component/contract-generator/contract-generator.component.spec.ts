import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractGeneratorComponent } from './contract-generator.component';

describe('ContractGeneratorComponent', () => {
  let component: ContractGeneratorComponent;
  let fixture: ComponentFixture<ContractGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
