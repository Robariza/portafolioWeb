import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.css'
})
export class FormContactComponent {
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.close();
    }
  }
}
