import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-dvh w-screen items-center justify-center">
      <div className="flex max-w-[var(--content-width)] flex-col items-center justify-center gap-2 p-5 md:px-9">
        <pre>
          {/* prettier-ignore */}
          <code className="whitespace-pre font-mono">{
` █▄ █▀█ █▄
  █ █▄█  █
`}</code>
        </pre>
        <h2 className="pt-5 font-semibold text-black md:text-lg">
          Page Not Found
        </h2>
        <p className="max-w-72 text-center text-[15px] leading-[22px] lg:text-base lg:leading-[1.6rem]">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="pt-5">
          <Button
            size={'sm'}
            className="rounded-[50px] pl-[14px] hover:-translate-y-px"
            asChild
          >
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
