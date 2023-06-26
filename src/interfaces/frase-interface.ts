// el idPhrase NO debe ser opcional cuando se utilice la DB para persistencia

export interface IFrase {
     phrase: string
     idPhrase?: number
  }