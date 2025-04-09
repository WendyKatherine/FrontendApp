import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowLongLeft, heroArrowLongRight } from '@ng-icons/heroicons/outline';

@Component({
  standalone: true,
  selector: 'app-slider',
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ heroArrowLongLeft, heroArrowLongRight })],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('sliderContainer') sliderContainer!: ElementRef<HTMLDivElement>;

  cards = [
    { title: 'Card 1', description: 'Texto de la primera tarjeta.' },
    { title: 'Card 2', description: 'Texto de la segunda tarjeta.' },
    { title: 'Card 3', description: 'Texto de la tercera tarjeta.' },
    { title: 'Card 4', description: 'Texto de la cuarta tarjeta.' },
  ];

  currentIndex = 0;
  cardWidth = 900;
  translateX = 0;

  ngAfterViewInit(): void {
    this.startAutoplay();
  }

  updatePosition() {
    this.translateX = -this.currentIndex * this.cardWidth;
    gsap.to(this.sliderContainer.nativeElement, {
      x: this.translateX,
      duration: 0.8,
      ease: 'power2.out'
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    this.updatePosition();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    this.updatePosition();
  }

  startAutoplay() {
    setInterval(() => {
      this.next();
    }, 4000);
  }
}
