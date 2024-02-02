import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {
    faBriefcase,
    faGraduationCap,
    faPersonWalkingLuggage,
    faUserTie,
    faPhone,
    faEnvelope,
    faGlobe,
    faLocationDot,
    faLanguage,
    faLink,
    faCheck,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
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
    faPersonWalkingLuggage = faPersonWalkingLuggage
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
