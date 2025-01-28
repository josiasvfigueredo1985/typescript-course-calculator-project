// src/__tests__/Calculator.test.ts
import { randomInt } from 'crypto';
import CalculatorControl from '../assets/typescript/calculator/calculatorControl';

describe('Calculator - Calculate function', () => {
    let calculator: CalculatorControl;
    let rn1: number;
    let rn2: number;

    beforeEach(() => {
        calculator = new CalculatorControl();
        rn1 = randomInt(1, 99);
        rn2 = randomInt(1, 99);
    });

    it('should correctly add two numbers', () => {
        calculator.addOps(`${rn1} + ${rn2}`);
        calculator.calculate();
        const result = calculator.getResults()
        const expectedN = rn1 + rn2;
        expect(result).toBe(expectedN.toString());
    });

    it('should correctly subtract two numbers', () => {
        calculator.addOps(`${rn1} - ${rn2}`);
        calculator.calculate();
        const result = calculator.getResults()
        const expectedN = rn1 - rn2;
        expect(result).toBe(expectedN.toString());
    });

    it('should correctly multiply two numbers', () => {
        calculator.addOps(`${rn1} * ${rn2}`);
        calculator.calculate();
        const result = calculator.getResults()
        const expectedN = rn1 * rn2;
        expect(result).toBe(expectedN.toString());
    });

    it('should correctly divide two numbers', () => {
        calculator.addOps(`${rn1}/${rn2}`);
        calculator.calculate();
        const result = calculator.getResults()
        const value = (rn1 / rn2).toString();
        const expected = eval(value).toString().substring(0, 12)
        expect(result).toBe(expected);
    });
});
