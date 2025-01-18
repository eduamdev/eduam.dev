import { GridWrapper } from '@/components/grid-wrapper';
import { Badge } from '@/components/ui/badge';

export function Availability() {
  return (
    <GridWrapper>
      <div className="px-5 py-7 md:p-9">
        <div className="flex items-center gap-2.5">
          <p className="font-semibold">Availability</p>
          <Badge label="Remote" />
        </div>
        <div className="pt-6">
          <p className="text-balance">
            I&apos;m especially interested in working with early-stage startups
            and founders, using my expertise to help shape and define their
            unique online presence.
          </p>
        </div>
      </div>
    </GridWrapper>
  );
}
