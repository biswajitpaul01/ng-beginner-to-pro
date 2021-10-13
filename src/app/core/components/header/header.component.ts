import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showFormSubmenu = false;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  constructor(
    library: FaIconLibrary,
    public auth: AuthService
  ) {
    library.addIcons(faChevronDown, faChevronUp);
  }

  ngOnInit(): void {
  }

}
