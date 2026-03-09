import type { ReactElement } from "react";
import {
  type StatusVariant,
  NotAvailable,
  OpenForOpportunities,
} from "./variants";

interface Props {
  variant: StatusVariant | null;
}

function AvailabilityStatus(props: Props): ReactElement | null {
  const { variant } = props;

  switch (variant) {
    case "open_for_opportunities":
      return <OpenForOpportunities />;
    case "not_available":
      return <NotAvailable />;
    case null:
    default:
      return null;
  }
}

export default AvailabilityStatus;
export type { Props as AvailabilityStatusProps };
export * from "./utils";
