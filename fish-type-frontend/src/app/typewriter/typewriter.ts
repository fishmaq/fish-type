import { Component, ElementRef, HostListener, input, output, viewChild } from '@angular/core';
import { TypeText } from '../../models/type-text';

@Component({
  selector: 'app-typewriter',
  imports: [],
  templateUrl: './typewriter.html',
  styleUrl: './typewriter.scss'
})
export class Typewriter {
  input = viewChild<ElementRef<HTMLInputElement>>('input');

  keepFocus = false;
  inputOverflow = '';
  firstInput = true;
  typeText = input<TypeText>();
  doneOutput = output<TypeText>();

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
      if (this.input()!.nativeElement.value.trim() === this.typeText()!.content.replace('\r\n', '\n')) {
        this.input()!.nativeElement.value = '';
        this.inputOverflow = '';
        window.alert('you done bro');
        this.doneOutput.emit({ ...this.typeText()!, done: true });
      } else {
        // set inputOverflow
        const inputValue = this.input()!.nativeElement.value;
        this.inputOverflow = inputValue.substring(this.typeText()!.content.length, inputValue.length);
      }
    }
  }
}
