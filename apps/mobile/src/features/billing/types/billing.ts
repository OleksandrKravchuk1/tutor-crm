export type PendingBalanceCardProps = {
  amount: number | string;
  overdueCount: number;
  description?: string;
  onReview?: () => void;
}