import {
  it,
  describe,
  expect
} from '@angular/core/testing';
import {Home} from './home';

describe('HomeComponent component', () => {
  it('should be able to create', () => {
    var homeComponent = new Home();
    expect(homeComponent).toBeDefined();
  });
});
