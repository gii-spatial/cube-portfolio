import { type ReactElement } from "react";

export default function CornerAccents(): ReactElement {
  return (
    <>
      <div
        className="absolute top-0 -left-0 w-6 h-6 border-l-2 border-t-2"
        style={{ borderColor: "var(--comp-cube-corner-accents)" }}
      />
      <div
        className="absolute -top-0 -right-0 w-6 h-6 border-r-2 border-t-2"
        style={{ borderColor: "var(--comp-cube-corner-accents)" }}
      />
      <div
        className="absolute -bottom-0 -left-0 w-6 h-6 border-l-2 border-b-2"
        style={{ borderColor: "var(--comp-cube-corner-accents)" }}
      />
      <div
        className="absolute -bottom-0 -right-0 w-6 h-6 border-r-2 border-b-2"
        style={{ borderColor: "var(--comp-cube-corner-accents)" }}
      />
    </>
  );
}
