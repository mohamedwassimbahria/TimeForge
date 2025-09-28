export interface PaymentRequest {
  orderId: string;
  amount: number;
  currency: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  note: string;
}
