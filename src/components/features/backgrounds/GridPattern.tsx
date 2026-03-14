import { type ReactElement } from "react";
import { useTheme } from "@/components/themes";

interface Props {
  gridSize?: number;
  lineWidth?: number;
  color?: string;
  opacity?: number;
  className?: string;
}

export default function GridPattern(props: Props): ReactElement {
  const {
    gridSize = 40,
    lineWidth = 1,
    color,
    opacity = 0.4,
    className = "",
  } = props;

  const { palette } = useTheme();
  const gridColor = color ?? palette.gridColor;

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <div
        className="size-full"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} ${lineWidth}px, transparent ${lineWidth}px),
            linear-gradient(90deg, ${gridColor} ${lineWidth}px, transparent ${lineWidth}px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />
    </div>
  );
}
