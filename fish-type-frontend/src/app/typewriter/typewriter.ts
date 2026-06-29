import { Component, ElementRef, HostListener, viewChild } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  imports: [],
  templateUrl: './typewriter.html',
  styleUrl: './typewriter.scss',
})
export class Typewriter {
  input = viewChild<ElementRef<HTMLInputElement>>('input');

  text = '## Kapitel 32\n' + 'Durchführen von Penetrationstests';
  keepFocus = false;
  inputOverflow = '';
  firstInput = true;

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.firstInput) {
      this.keepFocus = true;
      this.firstInput = false;
    }
    if (this.keepFocus && document.activeElement !== this.input()!.nativeElement) {
      this.input()!.nativeElement.focus();
    }
  }

  onKeyUp(key: string) {
    // dont move the cursor
    if (key === 'ArrowRight' || key === 'ArrowLeft' || key === 'End' || key === 'Home') {
      // move cursor to end
      this.input()!.nativeElement.selectionEnd = 999999;
    } else {
      if (this.input()!.nativeElement.value.trim() === this.text.replace('\r\n', '\n')) {
        this.input()!.nativeElement.value = '';
        this.inputOverflow = '';
        window.alert('you done bro');
      } else {
        // set inputOverflow
        const inputValue = this.input()!.nativeElement.value;
        this.inputOverflow = inputValue.substring(this.text.length, inputValue.length);
      }
    }
  }
}
