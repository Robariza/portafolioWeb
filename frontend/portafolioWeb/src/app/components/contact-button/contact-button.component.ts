import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-contact-button',
  standalone: true,
  imports: [],
  templateUrl: './contact-button.component.html',
  styleUrl: './contact-button.component.css'
})
export class ContactButtonComponent {
  @Output() openModalEvent = new EventEmitter<void>();

  openModal() {
    this.openModalEvent.emit();
  }
}
