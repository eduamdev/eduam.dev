import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function MobileNav() {
  return (
    <Button size="icon" className="rounded-full">
      <Icons.menu className="h-4 w-4 text-white dark:text-black" />
    </Button>
  );
}
