import { IFrase } from "~/interfaces/frase-interface";

export const filterPhrases = (phrases: IFrase[], filter: string) => {
    return phrases.filter((phrase) => {
        const phraseText = phrase.phrase.toLowerCase();
        const filterText = filter.toLowerCase();
        return phraseText.includes(filterText);
    });
}
