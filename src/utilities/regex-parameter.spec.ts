import { toRegexParameter } from './regex-parameter';

describe('toRegexParameter()', () => {
  it('removes the surrounding SQL quotes', () => {
    expect(toRegexParameter("'((^O'BRIEN$))'")).toBe("((^O'BRIEN$))");
  });

  it.each(['', "'", 'unquoted', "'missing-end", "missing-start'"])(
    'rejects an invalid quoted pattern: %s',
    (pattern) => {
      expect(() => toRegexParameter(pattern)).toThrow(
        'Expected a single-quoted regex pattern',
      );
    },
  );
});
