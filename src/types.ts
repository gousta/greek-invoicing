export enum InvoiceType {
  invoice = 'invoice',
  receipt = 'receipt',
}

export interface InvoiceContact {
  name: string;
  email: string;
  phone: string;
  company?: string;
  scope?: string;
  tax_office?: string;
  tax_identification_number?: string;
  address?: string;
  city?: string;
  zip?: string;
  country?: string;
}

export interface InvoiceLine {
  description: string;
  quantity?: number;
  total_without_tax_amount: number;
  tax_amount: number;
  total_with_tax_amount: number;
}

export enum InvoiceProvider {
  Elorus = 'elorus',
  Oxygen = 'oxygen',
}

export enum InvoicePaymentMethod {
  Bank = 'bank',
  Card = 'card',
}
