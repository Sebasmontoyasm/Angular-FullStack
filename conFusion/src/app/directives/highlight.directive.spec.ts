import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2} from '@angular/core';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective(new ElementRef("el"),null);
    expect(directive).toBeTruthy();
  });
});
