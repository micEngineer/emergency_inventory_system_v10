export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}

export function isExpired(dateString: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const expirationDate = new Date(dateString);
  return expirationDate < today;
}

export function getDaysUntilExpiration(dateString: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const expirationDate = new Date(dateString);
  const diffTime = expirationDate.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}