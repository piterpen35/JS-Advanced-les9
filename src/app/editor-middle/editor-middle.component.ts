import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-editor-middle',
  templateUrl: './editor-middle.component.html',
  styleUrls: ['./editor-middle.component.scss']
})
export class EditorMiddleComponent implements OnInit {
  @Input() editBoolean: boolean;
  @Output() onEditBoolean: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onStyleBoolean: EventEmitter<boolean> = new EventEmitter<boolean>();

  editBooleanFunction() {
    this.onEditBoolean.emit(true);
  }
  editStyleFunction() {
    this.onEditBoolean.emit(false);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
