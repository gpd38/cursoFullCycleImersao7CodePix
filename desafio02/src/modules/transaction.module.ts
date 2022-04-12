import { Module } from '@nestjs/common';
import { TransactionsController } from 'src/controllers/transaction.controller';
import { transactionProviders } from 'src/providers/transaction.providers';
import { TransactionService } from 'src/services/transaction.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TransactionsController],
  providers: [TransactionService, ...transactionProviders],
})
export class TransactionModule {}
