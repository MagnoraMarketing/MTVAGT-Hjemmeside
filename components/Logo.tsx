import Image from "next/image";
import { cn } from "@/lib/utils";
import skjold from "@/public/img/mtvagt-skjold.png";

// Horisontal logo-lockup: det officielle MTVagt-skjold + tekstdel.
export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src={skjold}
        alt="MT Vagt logo"
        className="h-full w-auto"
        preload
      />
      <span className="leading-none">
        <span className="block font-[family-name:var(--font-archivo)] text-lg font-extrabold tracking-tight text-krom">
          MT<span className="text-accent">vagt</span>
        </span>
        <span className="block text-[0.55rem] font-semibold tracking-[0.35em] text-staal-lys">
          SECURITY
        </span>
      </span>
    </div>
  );
}
