import { ElementRef } from '@angular/core';
import { Highlight } from './highlight';

describe('Highlight', () => {

  it('should create', () => {

    const element = new ElementRef(document.createElement('div'));

    const directive = new Highlight(element);

    expect(directive).toBeTruthy();

  });

});