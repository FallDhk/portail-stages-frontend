import {ChangeDetectorRef, Component} from '@angular/core';
import {CandidatureService} from '../../../../core/services/etudiant/candidature/candidature-service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-candidature-list-component',
  imports: [
    RouterLink
  ],
  templateUrl: './candidature-list-component.html',
  styleUrl: './candidature-list-component.scss',
})
export class CandidatureListComponent {
  list: any[] = [];
  loading = true;

  constructor(private service: CandidatureService,  private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getCandidatures().subscribe(res => {
      this.list = res;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
}
