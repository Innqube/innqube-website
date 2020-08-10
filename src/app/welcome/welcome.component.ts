import {Component, OnInit} from '@angular/core';
import {tsParticles} from 'tsparticles';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    options = {
        ratio: -.1
    };

    constructor() {
    }

    ngOnInit() {
        tsParticles
            .load("tsparticles", {
                particles: {
                    color: {
                        value: ['rgba(255,255,255,0.5)']

                    },
                    lineLinked: {
                        enable: true,
                        color: 'random'
                    },
                    links: {
                        color: "#ffffff",
                        distance: 400,
                        enable: true,
                        opacity: 0.1,
                        width: 1
                    },
                    collisions: {
                        enable: true
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 4,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 1500
                        },
                        value: 30
                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        image: {
                            src: '../../assets/images/logo_dark.png',
                            width: 44,
                            height: 44
                        }
                    },
                    size: {
                        random: true,
                        value: 5
                    }
                },
                detectRetina: true
            })
            .then(value => console.log('Success', value))
            .catch(error => console.log('Error', error));
    }

}
