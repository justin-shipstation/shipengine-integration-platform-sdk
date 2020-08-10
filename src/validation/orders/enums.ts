
export enum SalesOrderStatus {
  AwaitingPayment = "awaiting_payment",
  AwaitingShipment = "awaiting_shipment",
  OnHold = "on_hold",
  Completed = "completed",
  Cancelled = "cancelled",
}


export enum PaymentStatus {
  AwaitingPayment = "awaiting_payment",
  InProcess = "in_process",
  Paid = "paid",
  Failed = "failed",
  Cancelled = "cancelled",
}


export enum PaymentMethod {
  Cash = "cash",
  CashEquivalent = "cash_equivalent",
  Check = "check",
  CreditCard = "credit_card",
  BankTransfer = "bank_transfer",
}


export enum InsuranceProvider {
  ShipEngine = "shipengine",
  Carrier = "carrier",
  ThirdParty = "third_party",
}
