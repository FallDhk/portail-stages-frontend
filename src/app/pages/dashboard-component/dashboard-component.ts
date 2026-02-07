import {ChangeDetectorRef, Component} from '@angular/core';
import {AuthService} from '../../core/services/auth-service';
import {StatsService} from '../../core/services/stats/stats-service';

@Component({
  selector: 'app-dashboard-component',
  imports: [],
  standalone: true,
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.scss',
})
export class DashboardComponent {

  stats: any = {};
  loading = true;
  role='';

  constructor(private auth: AuthService,private statsService: StatsService,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.load();
  }

  load(){
    if (this.auth.getRole() == "ADMIN"){
      this.statsService.adminStats().subscribe(res => {
        this.stats = res;
        this.role = "ADMIN";
        this.cdr.detectChanges();
      });
    }else if (this.auth.getRole() == "ENTREPRISE"){
      this.statsService.entrepriseStats().subscribe(res => {
        this.stats = res;
        this.role = "ENTREPRISE";
        this.cdr.detectChanges();
      });
    }else if(this.auth.getRole() == "ETUDIANT"){
      this.statsService.etudiantStats().subscribe(res => {
        this.stats = res;
        this.role = "ETUDIANT";
        this.cdr.detectChanges();
      });
    }else {

    }
  }
  // constructor(private auth: AuthService) {
  //   // console.log(this.auth.getToken());
  //   // console.log(this.auth.getUser());
  //   console.log(this.auth.getRole());
  // }

}
