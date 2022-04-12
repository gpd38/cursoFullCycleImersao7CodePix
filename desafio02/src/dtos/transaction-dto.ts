import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { TransactionType } from 'src/models/transaction.model';

export class TransactionDTO {
  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;

  @IsString()
  @IsIn(Object.values(TransactionType))
  readonly type: TransactionType;
  
}
