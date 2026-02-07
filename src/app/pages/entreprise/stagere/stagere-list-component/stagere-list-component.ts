import {ChangeDetectorRef, Component} from '@angular/core';
import {ConventionService} from '../../../../core/services/entreprise/convention/convention-service';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-stagere-list-component',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './stagere-list-component.html',
  styleUrl: './stagere-list-component.scss',
})
export class StagereListComponent {
  list: any[] = [];
  loading = true;

  constructor(
    private service: ConventionService,
     private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading = true;
    this.service.getStagere().subscribe(res => {
      this.list = res;
      console.log(res);

      this.loading = false;
      this.cdr.detectChanges();
    });
  }
}
