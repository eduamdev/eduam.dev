import { ReactNode } from 'react';

interface Props {
  name: string;
  picture?: ReactNode;
}

export function Avatar({ name, picture }: Props) {
  return (
    <div className="flex shrink-0 items-center justify-center gap-x-2">
      {picture}
      <span className="font-medium text-black dark:text-white">{name}</span>
    </div>
  );
}
