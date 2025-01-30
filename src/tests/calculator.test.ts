// src/__tests__/Calculator.test.ts
import { randomInt } from 'crypto'
import CalculatorControl from '../assets/typescript/calculator/calculatorControl'
import { TestUtils } from '../utils/test.utils'

describe('Calculator - Calculate function', () => {
    let calculator: CalculatorControl
    let rn1: number
    let rn2: number

    beforeEach(() => {
        const maxN = 99
        calculator = new CalculatorControl()
        rn1 = randomInt(1, maxN)
        rn2 = randomInt(1, maxN)
    })

    it('should correctly add two numbers', () => {
        calculator.addOps(`${rn1} + ${rn2}`)
        calculator.calculate()
        const result = calculator.getResults()
        const expectedN = rn1 + rn2
        expect(result).toBe(expectedN.toString())
    })

    it('should correctly subtract two numbers', () => {
        calculator.addOps(`${rn1} - ${rn2}`)
        calculator.calculate()
        const result = calculator.getResults()
        const expectedN = rn1 - rn2
        expect(result).toBe(expectedN.toString())
    })

    it('should correctly multiply two numbers', () => {
        calculator.addOps(`${rn1} * ${rn2}`)
        calculator.calculate()
        const result = calculator.getResults()
        const expectedN = rn1 * rn2
        expect(result).toBe(expectedN.toString())
    })

    it('should correctly divide two numbers', () => {
        calculator.addOps(`${rn1}/${rn2}`)
        calculator.calculate()
        const result = calculator.getResults()
        const value = (rn1 / rn2).toString()
        const expected = TestUtils.calculateExpectedResults(value)
        expect(result).toBe(expected)
    })
})
