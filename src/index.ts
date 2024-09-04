import { Balance } from './apis/Balance';
import { BulkCharge } from './apis/BulkCharge';
import { Charge } from './apis/Charge';
import { Customer } from './apis/Customer';
import { DedicatedVirtualAccount } from './apis/DedicatedVirtualAccount';
import { Dispute } from './apis/Dispute';
import { Integration } from './apis/Integration';
import { Page } from './apis/Page';
import { PaymentRequest } from './apis/PaymentRequest';
import { Plan } from './apis/Plan';
import { Product } from './apis/Product';
import { Refund } from './apis/Refund';
import { Settlement } from './apis/Settlement';
import { Split } from './apis/Split';
import { Subaccount } from './apis/Subaccount';
import { Subscription } from './apis/Subscription';
import { Transaction } from './apis/Transaction';
import { Transfer } from './apis/Transfer';
import { TransferRecipient } from './apis/TransferRecipient';
import { Verification } from './apis/Verification';

export class Paystack {
  public readonly balance: Balance;
  public readonly bulkCharge: BulkCharge;
  public readonly charge: Charge;
  public readonly customer: Customer;
  public readonly dedicatedVirtualAccount: DedicatedVirtualAccount;
  public readonly dispute: Dispute;
  public readonly integration: Integration;
  public readonly page: Page;
  public readonly paymentRequest: PaymentRequest;
  public readonly plan: Plan;
  public readonly product: Product;
  public readonly refund: Refund;
  public readonly settlement: Settlement;
  public readonly split: Split;
  public readonly subaccount: Subaccount;
  public readonly subscription: Subscription;
  public readonly transaction: Transaction;
  public readonly transfer: Transfer;
  public readonly transferRecipient: TransferRecipient;
  public readonly verification: Verification;

  constructor(apiKey: string) {
    this.balance = new Balance(apiKey);
    this.bulkCharge = new BulkCharge(apiKey);
    this.charge = new Charge(apiKey);
    this.customer = new Customer(apiKey);
    this.dedicatedVirtualAccount = new DedicatedVirtualAccount(apiKey);
    this.dispute = new Dispute(apiKey);
    this.integration = new Integration(apiKey);
    this.page = new Page(apiKey);
    this.paymentRequest = new PaymentRequest(apiKey);
    this.plan = new Plan(apiKey);
    this.product = new Product(apiKey);
    this.refund = new Refund(apiKey);
    this.settlement = new Settlement(apiKey);
    this.split = new Split(apiKey);
    this.subaccount = new Subaccount(apiKey);
    this.subscription = new Subscription(apiKey);
    this.transaction = new Transaction(apiKey);
    this.transfer = new Transfer(apiKey);
    this.transferRecipient = new TransferRecipient(apiKey);
    this.verification = new Verification(apiKey);
  }
}