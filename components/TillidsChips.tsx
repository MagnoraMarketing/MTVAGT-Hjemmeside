import { cn } from "@/lib/utils";

// Standardiseret autorisations-checkliste — genbruges gennemgående på
// forsiden, kontakt- og jobsiden for konsistente tillidssignaler.
const punkter = [
  "Autoriseret af myndighederne",
  "Hele Danmark",
  "ISO-certificeret",
  "Medlem af VSL",
  "Medlem af Dansk Industri",
  "Rigspolitiets legitimationskort",
  "Døgnvagt · 24/7",
];

export function TillidsChips({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "flex flex-wrap gap-x-6 gap-y-3 text-sm text-staal-lys",
        className
      )}
    >
      {punkter.map((t) => (
        <li key={t} className="flex items-center gap-2">
          <span className="text-accent" aria-hidden>
            ✓
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}
