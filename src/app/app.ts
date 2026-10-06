import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TercerComponente } from './components/tercer-componente/tercer-componente';
import { CuartoComponente } from './components/cuarto-componente/cuarto-componente';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TercerComponente, CuartoComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }