import {ChangeDetectorRef, Component} from '@angular/core';
import {ConventionService} from '../../../../core/services/etudiant/convention/convention-service';
import {CommonModule} from '@angular/common';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-convention-list-component',
  imports: [CommonModule],
  templateUrl: './convention-list-component.html',
  styleUrl: './convention-list-component.scss',
})
export class ConventionListComponent {

  list: any[] = [];
  loading = true;

  constructor(private service: ConventionService,  private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getMine().subscribe(res => {
      this.list = res;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
  signer(id: number) {
    this.service.signerEtudiant(id).subscribe(
      {
        next: res => {
          this.load();
        },
        error: err => {
          console.error(err.error.error);
        }
      }
    );
  }
}
