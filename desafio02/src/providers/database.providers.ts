import { Sequelize } from 'sequelize-typescript';
import { TransactionModel } from 'src/models/transaction.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'src/database/db.sqlite',
      });
      sequelize.addModels([TransactionModel]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
