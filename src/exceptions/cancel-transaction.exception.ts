export class CancelTransactionException extends Error {
  constructor() {
    super('Transaction cancelled');
  }
}
