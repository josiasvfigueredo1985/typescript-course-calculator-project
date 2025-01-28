// src/__tests__/Calculator.test.ts
import { randomInt } from 'crypto';
import CalculatorControl from '../assets/typescript/calculator/calculatorControl';

describe('Calculator', () => {
    let calculator: CalculatorControl;
    let rn1: number;
    let rn2: number;

    beforeEach(() => {
        calculator = new CalculatorControl();
        rn1 = randomInt(1, 99);
        rn2 = randomInt(1, 99);
    });

    it('should correctly add two numbers', () => {
        calculator.addNumber(rn1);
        calculator.addNumber(rn2);
        calculator.calculate();
        const result = 10
        const expectedN = rn1 + rn2;
        expect(result).toBe(expectedN.toString());
    });
});
