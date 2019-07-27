import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Font} from '../../common/font';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass'],
  animations: [
    trigger('fadeInFadeOut', [
      state('fadeIn', style({
        opacity: 1
      })),
      state('fadeOut', style({
        opacity: 0
      })),
      transition('fadeIn => fadeOut', [
        animate('1s')
      ]),
      transition('fadeOut => fadeIn', [
        animate('1s')
      ])
    ])
  ]
})
export class LandingPageComponent implements OnInit {

  fontFadeIn = false;

  fonts = [
    new Font('Aguafina Script', 'font-aguafina-script'),
    new Font('Libre Barcode 128 Text', 'font-libra-barcode-128-text'),
    new Font('Major Mono Display', 'font-major-mono-display'),
    new Font('Press Start 2P', 'font-press-start-2p'),
    new Font('Sacramento', 'font-sacramento'),
    new Font('Sue Ellen Francisco', 'font-sue-ellen-francisco'),
    new Font('Libre Baskerville', 'libre-baskerville'),
    new Font('Arbutus Slab', 'arbutus-slab'),
    new Font('Noto Serif', 'noto-serif'),
    new Font('Cutive Mono', 'cutive-mono'),
    new Font('Gloria Hallelujah', 'gloria-hallelujah'),
    new Font('Shadows Into Light', 'shadows-into-light'),
    new Font('Patrick Hand', 'patrick-hand'),
    new Font('Nanum Pen Script', 'nanum-pen-script'),
    new Font('Staatliches', 'staatliches'),
    new Font('ZCool KuaiLe', 'zcool-kuaile'),
    new Font('Concert One', 'concert-one'),
    new Font('Special Elite', 'special-elite'),
    new Font('Poiret One', 'poiret-one'),
    new Font('ZCool QingKe-HuangYou', 'zcool-qingke-huangyou'),
    new Font('Fredericka the Great', 'fredericka-the-great'),
    new Font('Pompiere', 'pompiere')
  ];

  name = ['A', 'u', 'd', 'i', 'o', 'Z', 'o', 'a'];

  chosenFont: Font = this.fonts[Math.floor(Math.random() * this.fonts.length)];

  constructor() { }

  ngOnInit() {
  }

  unlockFontChange() {
    this.fontFadeIn = !this.fontFadeIn;
  }

}
