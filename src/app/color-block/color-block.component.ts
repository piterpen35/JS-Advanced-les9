import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-color-block',
  templateUrl: './color-block.component.html',
  styleUrls: ['./color-block.component.scss']
})
export class ColorBlockComponent implements OnInit {
  @Output() onColor: EventEmitter<string> = new EventEmitter<string>();
  colors = ['black', 'red', 'blue', 'yellow', 'brown', 'pink', 'grey', 'aqua', 'violet'];
  setColor(event) {
    this.onColor.emit(event.target.style.backgroundColor);
  }

  constructor() { }
  ngOnInit(): void {}
}
