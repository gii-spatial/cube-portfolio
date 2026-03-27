import type { ReactElement, FunctionComponent, SVGProps } from "react";

interface Props {
  label: string;
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export default function CubeFaceLayout(props: Props): ReactElement {
  const { label, Icon } = props;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
      {Icon && <Icon className="w-7 h-7 ml-1" />}
      <span>{label}</span>
    </div>
  );
}
