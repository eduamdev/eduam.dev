import { Icons } from '@/app/components/icons';
import { siteConfig } from '@/config/site';
import { Separator } from '@/app/components/ui/separator';

export function SocialLinks() {
  const {
    links: { xcom, github },
  } = siteConfig;

  return (
    <div className="flex">
      <ul className="m-0 inline-flex shrink-0 items-center p-0 pl-[5px]">
        <li className=" inline-flex leading-[0]">
          <a
            href={github.url}
            rel="noopener"
            target="_blank"
            className="m-[-3px] rounded-full p-[3px] text-[#666] transition-all duration-200 hover:text-black focus-visible:shadow-[0_0_0_2px_#fff,_0_0_0_4px_hsla(211,100%,42%,1)] focus-visible:outline-none dark:text-[#888] dark:hover:text-white dark:focus-visible:shadow-[0_0_0_2px_#0a0a0a,_0_0_0_4px_hsla(212,100%,48%,1)]"
            aria-label="GitHub"
          >
            <Icons.github className="h-4 w-4" />
          </a>
        </li>
        <Separator
          orientation="vertical"
          className="mx-3.5 h-[19px] w-[1px] bg-[hsla(0,0%,92%,1)] dark:bg-[hsla(0,0%,12%,1)]"
          decorative
        />
        <li className=" inline-flex leading-[0]">
          <a
            href={xcom.url}
            rel="noopener"
            target="_blank"
            className="m-[-3px] rounded-full p-[3px] text-[#666] transition-all duration-200 hover:text-black focus-visible:shadow-[0_0_0_2px_#fff,_0_0_0_4px_hsla(211,100%,42%,1)] focus-visible:outline-none dark:text-[#888] dark:hover:text-white dark:focus-visible:shadow-[0_0_0_2px_#0a0a0a,_0_0_0_4px_hsla(212,100%,48%,1)]"
            aria-label="X formerly known as Twitter"
          >
            <Icons.xcom className="h-4 w-4" />
          </a>
        </li>
      </ul>
    </div>
  );
}
