
import { PolarPoint } from './index.js';

describe('PolarPoint クラスのテスト', () => {
  test('x, y の getter が正しく動作する', () => {
    const point = new PolarPoint(5, Math.PI / 4);
    expect(point.x).toBeCloseTo(5 * Math.cos(Math.PI / 4));
    expect(point.y).toBeCloseTo(5 * Math.sin(Math.PI / 4));
  });

  test('x の setter が r, theta を更新する', () => {
    const point = new PolarPoint(5, Math.PI / 4);
    point.x = 3;
    expect(point.r).toBeCloseTo(Math.sqrt(3 ** 2 + point.y ** 2));
    expect(point.theta).toBeCloseTo(Math.atan2(point.y, 3));
  });

  test('y の setter が r, theta を更新する', () => {
    const point = new PolarPoint(5, Math.PI / 4);
    point.y = 4;
    expect(point.r).toBeCloseTo(Math.sqrt(point.x ** 2 + 4 ** 2));
    expect(point.theta).toBeCloseTo(Math.atan2(4, point.x));
  });

  test('x に NaN を設定するとエラーになる', () => {
    const point = new PolarPoint();
    expect(() => {
      point.x = NaN;
    }).toThrow("x に NaN は設定できません");
  });

  test('y に NaN を設定するとエラーになる', () => {
    const point = new PolarPoint();
    expect(() => {
      point.y = NaN;
    }).toThrow("y に NaN は設定できません");
  });
});
