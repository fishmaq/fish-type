import { Component } from '@angular/core';
import { Typewriter } from './typewriter/typewriter';

@Component({
  selector: 'app-root',
  imports: [Typewriter],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
