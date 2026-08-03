import { ChevronDown, Bell } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Topbar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 bg-white px-4 py-3 sm:px-8 sm:py-4">
      <Logo className="h-8 w-auto sm:h-9" />

      <div className="flex items-center gap-2 sm:gap-4">
        <button
          type="button"
          className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
        >
          Store #104
          <ChevronDown className="h-4 w-4 shrink-0 text-zinc-400" />
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100"
        >
          <Bell className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
