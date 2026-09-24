import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { PROJECTS } from './data/projects';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('renders the hero heading', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const h1 = (fixture.nativeElement as HTMLElement).querySelector('h1');
    expect(h1?.textContent).toContain('Noelia Romero');
  });

  it('renders one card per project', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('#projects .card');
    expect(cards.length).toBe(PROJECTS.length);
  });

  it('filters projects by technology', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const sassChip = [...el.querySelectorAll<HTMLButtonElement>('.chip')].find(
      (b) => b.textContent?.trim() === 'Sass',
    );
    sassChip!.click();
    await fixture.whenStable();
    const expected = PROJECTS.filter((p) => p.tech.includes('Sass')).length;
    expect(el.querySelectorAll('#projects .card').length).toBe(expected);
  });
});
