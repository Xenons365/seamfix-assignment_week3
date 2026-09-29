import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoesandbagsComponent } from './shoesandbags-component';

describe('ShoesandbagsComponent', () => {
  let component: ShoesandbagsComponent;
  let fixture: ComponentFixture<ShoesandbagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoesandbagsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoesandbagsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
