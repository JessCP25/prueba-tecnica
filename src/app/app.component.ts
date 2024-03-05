import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    StepsModule,
    ToastModule,
    // BrowserAnimationsModule,
    // BrowserModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}
  items!: MenuItem[];

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      {
        label: 'Personal',
        routerLink: 'personal',
      },
      {
        label: 'Family',
        routerLink: 'family',
      },
      {
        label: 'Academic',
        routerLink: 'academic',
      },
    ];
  }
}
