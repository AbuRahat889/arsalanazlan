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
