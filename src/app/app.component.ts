import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: '#root',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    faBookOpen = faBookOpen
}
