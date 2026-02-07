import {ChangeDetectorRef, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ConventionService} from '../../../core/services/etudiant/convention/convention-service';

@Component({
  selector: 'app-stage-list-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './stage-list-component.html',
  styleUrl: './stage-list-component.scss',
})
export class StageListComponent {
  list: any[] = [];
  loading = true;

  constructor(private service: ConventionService,private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.service.getMesStages().subscribe(res => {
      this.list = res;
      this.loading = false;
      this.cdr.detectChanges();
      console.log(this.list);
    });
  }
}
