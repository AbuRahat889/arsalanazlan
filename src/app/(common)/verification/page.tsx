import Banner from "@/components/ui/Banner";
import CertificateVerify from "@/components/Verification/CertificateVerify";
import Verification from "@/components/Verification/VerificationPage";

export default function page() {
  return (
    <div>
      <Banner
        title="Certificate"
        colorTitle="Verification"
        discription="Instantly verify the authenticity of CPD Awards certificates using our secure blockchain-powered verification system."
      />
      <Verification />
      <CertificateVerify />
    </div>
  );
}
