import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsInfraComponent } from './aws-infra.component';

describe('AwsInfraComponent', () => {
  let component: AwsInfraComponent;
  let fixture: ComponentFixture<AwsInfraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsInfraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
