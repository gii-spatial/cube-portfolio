import type { ReactElement } from "react";

type StatusVariant = "open_for_opportunities" | "not_available";

function Wrapper({
  children,
  bgColor,
}: {
  children: React.ReactNode;
  bgColor: string;
}): ReactElement {
  return (
    <div
      className={`flex flex-row items-center gap-4 rounded-lg p-2`}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
}

function OpenForOpportunities() {
  return (
    <Wrapper bgColor="rgba(118, 255, 3, 0.1)">
      <div className="relative w-3 h-3 rounded-full bg-lime-400">
        <span className="absolute inset-0 rounded-full bg-lime-400 animate-ripple"></span>
      </div>
      <span>Available for work</span>
    </Wrapper>
  );
}

function NotAvailable() {
  return (
    <Wrapper bgColor="rgba(183, 28, 28, 0.1)">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <span>Not available</span>
    </Wrapper>
  );
}

export { type StatusVariant, OpenForOpportunities, NotAvailable };
