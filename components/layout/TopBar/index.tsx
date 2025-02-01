"use client";

import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import IconLink from "@/components/ui/icons/IconLink";

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-2 text-sm">
      <Container>
        <div className="flex gap-8">
          <IconLink href="tel:+968 92121183" icon={faPhone}>
            +968 92121183
          </IconLink>
          <IconLink href="mailto:enquiry@continuityoman.com" icon={faEnvelope}>
            enquiry@continuityoman.com
          </IconLink>
        </div>
      </Container>
    </div>
  );
}
