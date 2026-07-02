export interface DisputeEvidenceBody {
  /** Customer email */
  customer_email: string;
  /** Customer name */
  customer_name: string;
  /** Customer mobile number */
  customer_phone: string;
  /** Details of service offered */
  service_details: string;
  /** Delivery address */
  delivery_address?: string;
  /** ISO 8601 representation of delivery date (YYYY-MM-DD) */
  delivery_date?: string;
}
