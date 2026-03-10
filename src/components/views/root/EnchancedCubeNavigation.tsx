import { type ReactElement } from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import CubeNavigation, {
  type BaseCubeNavigationProps,
} from "@/components/features/Cube/extensions/CubeNavigation";

interface EnchancedCubeNavigationProps extends BaseCubeNavigationProps {}
export default function EnchancedCubeNavigation(
  props: EnchancedCubeNavigationProps,
): ReactElement {
  const { ...cubeNavProps } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-row items-center gap-4 w-full max-w-md mx-auto"
    >
      <CubeNavigation {...cubeNavProps} />

      <motion.button
        className="
      p-1
      bg-transparent
      rounded-full
      flex
      items-center
      justify-center
      text-white
      hover:bg-white/10
      transition
    "
      >
        <ArrowRightCircle className="w-10 h-10" />
      </motion.button>
    </motion.div>
  );
}
