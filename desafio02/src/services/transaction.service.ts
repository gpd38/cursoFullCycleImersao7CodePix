import { TransactionDTO } from 'src/dtos/transaction-dto';
import { TransactionModel } from './../models/transaction.model';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class TransactionService {
  
  constructor(
    @Inject('TRANSACTION_REPOSITORY')
    private transactionRepository: typeof TransactionModel,
  ) {}

  async findAll(): Promise<TransactionModel[]> {
    return this.transactionRepository.findAll<TransactionModel>();
  }

  async createTransaction(data: TransactionDTO): Promise<TransactionModel> {
    const createdTransaction = await this.transactionRepository.create({
      ...data,
    });

    return await createdTransaction.save();
  }

}
