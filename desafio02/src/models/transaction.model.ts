import {
  AutoIncrement,
  Column,
  CreatedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript';

export enum TransactionType {
  credit = 'credit',
  debit = 'debit',
}

@Table({
  modelName: 'transactions',
})
export class TransactionModel extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  type: TransactionType;

  @Column
  amount: number;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

}
