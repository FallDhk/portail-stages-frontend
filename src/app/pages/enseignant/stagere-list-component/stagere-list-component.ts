import {ChangeDetectorRef, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ConventionService} from '../../../core/services/enseignant/convention/convention-service';
import {SuiviService} from '../../../core/services/etudiant/suivi/suivi-service';

@Component({
  selector: 'app-stagere-list-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './stagere-list-component.html',
  styleUrl: './stagere-list-component.scss',
})
export class StagereListComponent {
  list: any[] = [];
  loading = true;
  progress = 0;

  constructor(private service: ConventionService,private cdr: ChangeDetectorRef,private serviceSuivi: SuiviService,) {}

  ngOnInit() {
    this.service.getStagere().subscribe(res => {
      this.list = res;
      this.loading = false;
      this.list.forEach(c => {
        this.loadProgress(c);
      });
      console.log(this.list)
      this.cdr.detectChanges();
    });
  }

  // loadProgress(conventionId: number) {
  //   this.serviceSuivi.getProgressConvention(conventionId)
  //     .subscribe(p => this.progress = p);

  loadProgress(c: any) {
    this.serviceSuivi.getProgressConvention(c.id)
      .subscribe(p => {
        c.progress = p;
        this.cdr.detectChanges();
      });
  }
}
