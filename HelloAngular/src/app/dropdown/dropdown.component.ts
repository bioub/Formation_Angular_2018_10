import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rte-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit {

  @Input() showNoValueLabel = true;
  @Input() noValueLabel = '-- Pas de Valeur --';
  @Input() items: string[] = [];
  @Input() selected: string;

  @Output() selectedChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handleChange(event: Event) {
    this.selectedChange.emit((<HTMLSelectElement>event.target).value);
  }
}
