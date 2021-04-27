import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAlertasComponent } from './produto-alertas.component';

describe('ProdutoAlertasComponent', () => {
  let component: ProdutoAlertasComponent;
  let fixture: ComponentFixture<ProdutoAlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoAlertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
