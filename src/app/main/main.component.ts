import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  title = 'Toyota';
  isCollapsed = false;
  celular = false;
  endereco = 'Sof Sul Quadra 9 Conj B Lote 5/7 - Brasilia/DF';



  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 992) {
      this.isCollapsed = true;
      this.celular = true;
      this.endereco = 'SOF Sul Quadra 9 Conj B Lote 5/7 DF';
    } else {
      this.isCollapsed = false;
      this.celular = false;
      this.endereco = 'Sof Sul Quadra 9 Conj B Lote 5/7 - Brasilia/DF';
    }
  }

  ngOnInit(): void {
    this.fecharMoblie();

  }

  fecharMoblie() {
    if (window.screen.width < 992) {
      this.isCollapsed = true;
      this.celular = true;
      this.endereco = 'SOF Sul Quadra 9 Conj B Lote 5/7 DF';
    }
  }




}
