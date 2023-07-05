import { render } from '@testing-library/react';
import CardPhrase from './CardPhrase';

describe('CardPhrase', () => {
  it('renders the phrase', () => {
    const phrase = 'Hello Card';
    const { getByText } = render(<CardPhrase texto={{ phrase }} />);
    expect(getByText(phrase)).toBeDefined();
  });
});