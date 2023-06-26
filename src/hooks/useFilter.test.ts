import { filterPhrases } from "./useFilter";

describe('useFilter', () => {
   
    // Tests that all phrases are returned when filter is an empty string
    it('test_all_phrases', () => {
        const phrases = [
            { phrase: 'hello', idPhrase: 1 },
            { phrase: 'world', idPhrase: 2 }
        ];
        const filter = '';
        const result = filterPhrases(phrases, filter);
        expect(result).toEqual(phrases);
    });

    // Tests that only phrases that contain the filter text are returned
    it('test_filter_text', () => {
        const phrases = [
            { phrase: 'hello world', idPhrase: 1 },
            { phrase: 'goodbye world', idPhrase: 2 }
        ];
        const filter = 'hello';
        const result = filterPhrases(phrases, filter);
        expect(result).toEqual([{ phrase: 'hello world', idPhrase: 1 }]);
    });

    // Tests that an empty array is returned when no phrase contains the filter text
    it('test_no_matching_phrases', () => {
        const phrases = [
            { phrase: 'hello world', idPhrase: 1 },
            { phrase: 'goodbye world', idPhrase: 2 }
        ];
        const filter = 'foo';
        const result = filterPhrases(phrases, filter);
        expect(result).toEqual([]);
    });

    // Tests that filtering is case-insensitive
    it('test_case_insensitive', () => {
        const phrases = [
            { phrase: 'hello world', idPhrase: 1 },
            { phrase: 'goodbye world', idPhrase: 2 }
        ];
        const filter = 'HELLO';
        const result = filterPhrases(phrases, filter);
        expect(result).toEqual([{ phrase: 'hello world', idPhrase: 1 }]);
    });

    // Tests that phrases with undefined idPhrase property are handled
    it('test_undefined_id', () => {
        const phrases = [
            { phrase: 'hello world' },
            { phrase: 'goodbye world', idPhrase: 2 }
        ];
        const filter = 'hello';
        const result = filterPhrases(phrases, filter);
        expect(result).toEqual([{ phrase: 'hello world' }]);
    });
});