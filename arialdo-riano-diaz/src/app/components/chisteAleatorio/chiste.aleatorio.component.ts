import { Component, OnInit } from '@angular/core';
import { ChisteAleatorioModel } from 'src/app/models/chiste.aleatorio.model';
import { ChisteAleatorioService } from 'src/app/services/chiste.aleatorio.service';

@Component({
  selector: 'app-chiste-aleatorio',
  templateUrl: './chiste.aleatorio.component.html',
  styleUrls: ['./chiste.aleatorio.component.css'],
})
export class ChisteAleatorioComponent implements OnInit {
  chiste: ChisteAleatorioModel | null = null;

  loading = false;
  error = '';

  constructor(private chisteAleatorioService: ChisteAleatorioService) {}

  ngOnInit(): void {}

  load() {
    this.loading = true;

    setTimeout(() => {
      this.chisteAleatorioService.getChisteAleatorio().subscribe({
        next: (data) => {
          this.chiste = data; // 👈 AQUÍ RECIBES UN OBJETO
          this.loading = false;
        },
        error: () => {
          this.error = 'Error cargando datos';
          this.loading = false;
        },
      });
    }, 2000);
  }
}
