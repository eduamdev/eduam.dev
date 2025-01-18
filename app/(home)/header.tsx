import { Avatar } from '@/components/ui/avatar';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { GridWrapper } from '@/components/grid-wrapper';

export function Header() {
  const { name, username, email } = siteConfig;

  return (
    <GridWrapper className="sticky top-0 z-20 bg-neutral-50">
      <header
        className="relative z-10 flex h-[var(--header-height)] items-center justify-between px-5 md:px-9"
        style={
          {
            '--header-height': '70px',
          } as React.CSSProperties
        }
      >
        <UserDetails name={name} username={username} />

        {/* Social Links */}
        <nav
          aria-label="Social Links"
          className="flex items-center justify-center gap-x-2"
        >
          <Button variant="ghost" size="icon" asChild>
            <a
              href={`https://x.com/eduamdev`}
              aria-label="Visit Twitter profile"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href={`https://github.com/eduamdev`}
              aria-label="Visit GitHub profile"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
              </svg>
            </a>
          </Button>
        </nav>
      </header>
    </GridWrapper>
  );
}

const UserDetails = ({
  name,
  username,
}: {
  name: string;
  username: string;
}) => (
  <div className="flex h-full shrink-0 items-center gap-x-3">
    <Avatar />
    <div className="flex flex-col items-stretch gap-y-2">
      <span className="text-sm font-medium leading-none">{name}</span>
      <span className="text-sm leading-none text-neutral-600 dark:text-[#bbb]">
        @{username}
      </span>
    </div>
  </div>
);
