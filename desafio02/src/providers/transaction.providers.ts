import { TransactionModel } from 'src/models/transaction.model';

export const transactionProviders = [
  {
    provide: 'TRANSACTION_REPOSITORY',
    useValue: TransactionModel,
  },
];
