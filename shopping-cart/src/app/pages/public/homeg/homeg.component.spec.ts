import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomegComponent } from './homeg.component';


describe('HomegComponent', () => {
  let component: HomegComponent;
  let fixture: ComponentFixture<HomegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
