import { ContentWrapper } from '../components/content-wrapper';
import { GridSection } from '../components/grid-section';
import { Badge } from '@/app/components/ui/badge';

export function Availability() {
  return (
    <ContentWrapper>
      <GridSection>
        <div className="px-5 py-7 md:p-9">
          <div className="flex items-center gap-2.5">
            <p className="font-semibold">Availability</p>
            <Badge label="Remote" />
          </div>
          <div className="pt-6">
            <p className="text-balance">
              I&apos;m especially interested in working with early-stage
              startups and founders, using my expertise to help shape and define
              their unique online presence.
            </p>
          </div>
        </div>
      </GridSection>
    </ContentWrapper>
  );
}
