import { ImageIcon } from "lucide-react";

export default function PlaceholderImage({
  label = "Photo placeholder",
  aspect = "aspect-[4/3]",
  className = "",
}) {
  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-navy to-navy-light text-cream/70 ${className}`}
    >
      <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
      <span className="px-4 text-center text-xs font-medium uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
