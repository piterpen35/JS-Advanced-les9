import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-background-color-block',
  templateUrl: './background-color-block.component.html',
  styleUrls: ['./background-color-block.component.scss']
})
export class BackgroundColorBlockComponent implements OnInit {
  @Output() onBackgroundColor: EventEmitter<string> = new EventEmitter<string>();

  colors = ['black', 'red', 'blue', 'yellow', 'brown', 'pink', 'grey', 'aqua', 'violet'];
  setBackgroundColor(event) {
    this.onBackgroundColor.emit(event.target.style.backgroundColor);
  }
  constructor() { }
  ngOnInit(): void {}
}
