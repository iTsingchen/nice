import type { Calculator } from './calculator.interface';

export class CalculatorImpl implements Calculator {
  calc = (text: string): number => {
    /**
     *  字符串处理：
     *  1. 移除掉所有的空格
     *  2. 将字符串拆分为 token
     *  比如：
     *  - '1 + 2' 转换为 ['1', '+', '2']
     *  - '2 ÷ sin(30)' 转换为 ['2', '÷', 'sin', '(', '30, ')']
     */
    const tokens = text.replace(/\s+/g, '').split(/\b|(?=\()|(?<=\))/g);

    const isNumber = (token: string): boolean => /^\d+$/.test(token);

    const suffixTokens: string[] = [];
    const operatorTokens: string[] = [];

    for (const token of tokens) {
      if (isNumber(token)) {
        suffixTokens.push(token);
        continue;
      }

      if (operatorTokens.length === 0) {
        operatorTokens.push(token);
        continue;
      }

      if (token === '(') {
        operatorTokens.push(token);
      } else if (token === ')') {
        while (operatorTokens.length > 0) {
          const operator = operatorTokens.at(-1);
          if (!operator || operator === '(') {
            break;
          }
          operatorTokens.pop();
          suffixTokens.push(operator);
        }
      } else if (token === '+') {
        while (operatorTokens.length > 0) {
          const operator = operatorTokens.at(-1);
          if (!operator || operator === '(') {
            break;
          }
          operatorTokens.pop();
          suffixTokens.push(operator);
        }

        operatorTokens.push(token);
      } else if (token === '-') {
        while (operatorTokens.length > 0) {
          const operator = operatorTokens.at(-1);
          if (!operator || operator === '(') {
            break;
          }
          operatorTokens.pop();
          suffixTokens.push(operator);
        }

        operatorTokens.push(token);
      } else if (token === '*') {
        while (operatorTokens.length > 0) {
          const operator = operatorTokens.at(-1);
          if (
            !operator ||
            operator === '+' ||
            operator === '-' ||
            operator === '('
          ) {
            break;
          }
          operatorTokens.pop();
          suffixTokens.push(operator);
        }

        operatorTokens.push(token);
      } else if (token === '÷') {
        while (operatorTokens.length > 0) {
          const operator = operatorTokens.at(-1);
          if (
            !operator ||
            operator === '+' ||
            operator === '-' ||
            operator === '('
          ) {
            break;
          }
          operatorTokens.pop();
          suffixTokens.push(operator);
        }

        operatorTokens.push(token);
      }
    }

    while (operatorTokens.length > 0) {
      const operator = operatorTokens.pop();
      if (!operator) {
        break;
      }
      suffixTokens.push(operator);
    }

    const operands: number[] = [];

    for (const token of suffixTokens) {
      if (isNumber(token)) {
        operands.push(Number(token));
      } else if (token === '+') {
        const right = operands.pop();
        const left = operands.pop();
        operands.push(Number(left) + Number(right));
      } else if (token === '-') {
        const right = operands.pop();
        const left = operands.pop();
        operands.push(Number(left) - Number(right));
      } else if (token === '*') {
        const right = operands.pop();
        const left = operands.pop();
        operands.push(Number(left) * Number(right));
      } else if (token === '÷') {
        const right = operands.pop();
        const left = operands.pop();
        operands.push(Number(left) / Number(right));
      }
    }

    return Number(operands[0]);
  };
}
