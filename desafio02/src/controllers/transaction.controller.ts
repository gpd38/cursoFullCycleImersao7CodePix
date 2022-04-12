import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { TransactionDTO } from 'src/dtos/transaction-dto';
import { TransactionService } from 'src/services/transaction.service';

@Controller('transactions')
export class TransactionsController {

  constructor(
    @Inject(TransactionService)
    private transactionService: TransactionService,
  ) {}

  @Get()
  index() {
    return this.transactionService.findAll();
  }

  @Post()
  async create(
    @Body(new ValidationPipe({ errorHttpStatusCode: 404 }))
    body: TransactionDTO,
  ) {
    return this.transactionService.createTransaction({
      ...body,
    });
  }
  
}
