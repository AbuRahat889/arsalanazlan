export interface UserActivityLog {
  id: number;
  title: string;
  organization: string;
  status: string;
  statusColor: "green" | "yellow" | "red";
  CPDHours: number;
  createdAt: string;
  activityCategory: string;
  description: string;
  documents: string[];
}
