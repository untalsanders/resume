import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {
    faBriefcase,
    faCheck,
    faEnvelope,
    faGlobe,
    faGraduationCap,
    faLanguage,
    faLink,
    faLocationDot,
    faPhone,
    faUserTie,
} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { NgOptimizedImage } from '@angular/common'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [FontAwesomeModule, NgOptimizedImage],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    faGraduationCap = faGraduationCap
    faUserTie = faUserTie
    faPhone = faPhone
    faEnvelope = faEnvelope
    faGlobe = faGlobe
    faLocationDot = faLocationDot
    faLinkedinIn = faLinkedinIn
    faTwitter = faTwitter
    faInstagram = faInstagram
    faYoutube = faYoutube
    faLanguage = faLanguage
    faLink = faLink
    faCheck = faCheck
    faBriefcase = faBriefcase
}
