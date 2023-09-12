import type { Calculator } from '../calculator.interface';
import { text2token } from './text2token';
import { infix2suffix } from './infix2suffix';
import { calculate } from './calculate';
import { CalcExpressionFactory } from './expressions';

export class CalculatorImpl implements Calculator {
  calc = (text: string): number => {
    const expressionFactory = new CalcExpressionFactory();

    const tokens = text2token(text);
    const suffix = infix2suffix(
      tokens,
      expressionFactory.getPriority.bind(expressionFactory),
    );
    return calculate(suffix, expressionFactory);
  };
}
