export type CertificateProps = {
  fullName?: string;
  status?: string;
  certificationLevel?: string;
  user: {
    userProfile?: {
      professionalSector?: string;
      country?: string;
    };
  };
  createdAt?: string;
};

export type ActivityStatus = "APPROVED" | "REJECTED" | "PENDING";
export type CertificateStatus = "active" | "expired";

export interface CertificationActivity {
  id: number;
  jobTitle: string;
  certificationLevel: string;
  status: ActivityStatus;
}

export interface Certificate {
  id: number;
  certificateId?: string;
  jobTitle: string;
  createdAt: string;
  isHidden: boolean;
  status: CertificateStatus;
}


