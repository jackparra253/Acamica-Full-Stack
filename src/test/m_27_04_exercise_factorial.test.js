const calculateFactorial = require('../core/m_27_04_exercise_factorial');

describe('Factorial',() => {

    test('should calculateFactorial return 1 if receive 0!',() => {
        const result = calculateFactorial(0);

        expect(result).toBe(1);
    });

    test('should calculateFactorial return 1 if receive 1!',() => {
        const result = calculateFactorial(1);

        expect(result).toBe(1);
    });

    test('should calculateFactorial return 2 if receive 2!',() => {
        const result = calculateFactorial(2);

        expect(result).toBe(2);
    });

    test('should calculateFactorial return 6 if receive 3!',() => {
        const resultExpected = 6;
        
        const result = calculateFactorial(3);

        expect(result).toBe(resultExpected);
    });

    test('should calculateFactorial return 720 if receive 6!',() => {
        const resultExpected = 720;
        
        const result = calculateFactorial(6);

        expect(result).toBe(resultExpected);
    });

    test('should calculateFactorial return 3628800 if receive 10!',() => {
        const resultExpected = 3628800;
        
        const result = calculateFactorial(10);

        expect(result).toBe(resultExpected);
    });
});