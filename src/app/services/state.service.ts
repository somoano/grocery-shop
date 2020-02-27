import { Injectable } from '@angular/core';

@Injectable()

export class StateService {
  private IsDesktop: boolean;

  constructor() {
    if (window.innerWidth >= 768) {
      this.IsDesktop = true;
    } else {
      this.IsDesktop = false;
    }
  }

  public getIsDesktop(): boolean {
    return this.IsDesktop;
  }
}