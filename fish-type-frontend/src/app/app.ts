import { Component, inject, OnInit } from '@angular/core';
import { Typewriter } from './typewriter/typewriter';
import { TypeTextService } from './service/type-text.service';
import { TypeText } from '../models/type-text';

@Component({
  selector: 'app-root',
  imports: [Typewriter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  #typeTextService = inject(TypeTextService);
  data: TypeText[] = [];

  ngOnInit(): void {
    this.#typeTextService.getData().subscribe((data) => this.data = data);
  }

  receiveDone(data:TypeText): void {
    this.#typeTextService.updateData(data).subscribe()
  }
}
