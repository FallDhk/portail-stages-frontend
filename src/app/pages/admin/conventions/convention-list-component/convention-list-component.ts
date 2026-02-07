import {ChangeDetectorRef, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, Validators} from '@angular/forms';
import {ConventionService} from '../../../../core/services/admin/convention/convention-service';


class UserService {
}

@Component({
  selector: 'app-convention-list-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './convention-list-component.html',
  styleUrl: './convention-list-component.scss',
})
export class ConventionListComponent {
  list: any[] = [];
  enseignants: any[] = [];
  loading = true;

  constructor(
    private service: ConventionService,
    //private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getAllPending().subscribe(res => {
      this.list = res;
      this.loading = false;
      this.cdr.detectChanges();
    });
    this.service.getEnseignants().subscribe(res => {
      this.enseignants = res;
    });
  }
  valider(conventionId: number, encadrantId: number) {
    this.service.valider(conventionId, encadrantId).subscribe(() => {
      const c = this.list.find(x => x.id === conventionId);
      if (c) {
        c.validée = true;
        c.encadrantId = encadrantId;
      }
      this.load();
    });

  }
}
