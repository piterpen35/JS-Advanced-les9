import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-editor-bottom',
  templateUrl: './editor-bottom.component.html',
  styleUrls: ['./editor-bottom.component.scss']
})
export class EditorBottomComponent implements OnInit {
  @Input() editBoolean: boolean;
  @Input() finalEditValue: string;
  @Output() onSaveChanges: EventEmitter<string> = new EventEmitter<string>();
  @Output() onColor: EventEmitter<string> = new EventEmitter<string>();
  @Output() onBackgroundColor: EventEmitter<string> = new EventEmitter<string>();
  @Output() onFontSize: EventEmitter<string> = new EventEmitter<string>();
  @Output() onFontFamily: EventEmitter<string> = new EventEmitter<string>();
  @Output() onBoldText: EventEmitter<string> = new EventEmitter<string>();
  @Output() onItalicText: EventEmitter<string> = new EventEmitter<string>();
  @Output() onEddBooleanSet: EventEmitter<boolean> = new EventEmitter<boolean>();

  colorBoolean: boolean = null;
  boldTextBoolean: boolean;
  italicTextBoolean: boolean;

  saveChanges() {
    this.onSaveChanges.emit(this.finalEditValue);
  }
  setColor(event) {
    this.onColor.emit(event);
  }
  setBackgroundColor(event) {
    this.onBackgroundColor.emit(event);
  }
  setFontSize(event){
    this.onFontSize.emit(event.target.value);
  }
  setFontFamily(event){
    this.onFontFamily.emit(event.target.value)
  }
  setBoldText(event){
    this.onBoldText.emit(event.target.value);
  }
  setItalicText(event){
    this.onItalicText.emit(event.target.value);
  }
  eddBooleanSet(){
    this.onEddBooleanSet.emit();
  }

  constructor() {}
  ngOnInit(): void {}
}
