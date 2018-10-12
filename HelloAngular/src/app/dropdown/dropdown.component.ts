import { Component, Input, OnInit, Output, EventEmitter, Attribute } from '@angular/core';

@Component({
  selector: 'rte-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit {

  @Input() showNoValueLabel = true;
  @Input() items: string[] = [];
  @Input() selected: string;

  @Output() selectedChange = new EventEmitter<string>();

  constructor(@Attribute('noValueLabel') public noValueLabel = '-- Pas de Valeur --') { }

  ngOnInit() {
  }

  handleChange(event: Event) {
    this.selectedChange.emit((<HTMLSelectElement>event.target).value);
  }
}
