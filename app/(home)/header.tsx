import { Avatar } from '@/components/ui/avatar';
import { ContentWrapper } from '@/components/content-wrapper';
import { GridSection } from '@/components/grid-section';
import { siteConfig } from '@/config/site';

export function Header() {
  const { name, username, email } = siteConfig;

  return (
    <ContentWrapper>
      <GridSection>
        <header className="relative z-10 flex h-[var(--header-height)] items-center justify-between">
          <UserDetails name={name} username={username} />
          <div className="px-5 md:px-9">
            <span className="text-[15px]">{email}</span>
          </div>
        </header>
      </GridSection>
    </ContentWrapper>
  );
}

const UserDetails = ({
  name,
  username,
}: {
  name: string;
  username: string;
}) => (
  <div className="flex h-full shrink-0 items-center gap-x-3 px-5 md:px-9">
    <Avatar />
    <div className="flex flex-col items-stretch gap-y-2">
      <span className="text-sm font-medium leading-none">{name}</span>
      <span className="text-sm leading-none text-neutral-600 dark:text-[#bbb]">
        @{username}
      </span>
    </div>
  </div>
);
