import {ChangeDetectorRef, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SoutenanceService} from '../../../../core/services/admin/soutenance/soutenance-service';
import {ConventionService} from '../../../../core/services/admin/convention/convention-service';

@Component({
  selector: 'app-soutenance-list-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './soutenance-list-component.html',
  styleUrl: './soutenance-list-component.scss',
})
export class SoutenanceListComponent {
  list: any[] = [];
  loading = true;

  constructor(private service: SoutenanceService,
              private cdr: ChangeDetectorRef,
              private serviceConvention: ConventionService) {}

  ngOnInit() {
    this.serviceConvention.getReady().subscribe(res => {
      this.list = res;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
}
