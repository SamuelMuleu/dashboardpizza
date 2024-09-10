import { Pizza } from "lucide-react";
import { Separator } from "@/components/ui/separator"


export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6"></div>
      <Pizza className="h-6 w-6" />
      <Separator />
    </div>
  );
}
