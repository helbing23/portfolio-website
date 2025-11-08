import Maintenance from "@/components/ui/Maintenance";
import { MAINTENANCE } from "@/config/maintenance";

export default function Services() {
  if (MAINTENANCE.services) {
    return (
      <Maintenance
        title="Services page is under maintenance"
        description="We're polishing this page. Please check back soon."
      />
    );
  }

  // Original content
  return <div>All Services</div>;
}
