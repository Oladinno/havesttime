import Link from "next/link";
import Icon from "./Icon";

export default function BackToHome() {
  return (
    <div className="w-full px-margin pt-space-md">
      <div className="max-w-7xl mx-auto">
        <Link
          aria-label="Back to home"
          href="/"
          className="inline-flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors group"
        >
          <Icon
            name="arrow_back"
            className="text-[18px] text-primary transition-transform group-hover:-translate-x-0.5"
          />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
