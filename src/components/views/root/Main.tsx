import { type ReactElement, Fragment } from "react";
import Cube, { CubeProvider } from "@/components/features/Cube";
import SVG from "@/assets/svg-icons";
import Header from "./Header";
import Footer from "./Footer";
import Tagline from "./Tagline";
import { motion } from "framer-motion";
import Motto from "./Motto";
import { CubeNavigation } from "@/components/features/Cube/extensions";
import { ArrowRightCircle } from "lucide-react";
import EnchancedCubeNavigation from "./EnchancedCubeNavigation";

export default function Main(): ReactElement {
  return (
    <Fragment>
      <Header />
      <main className="flex flex-1 flex-col items-center relative overflow-auto px-6">
        <Tagline />

        {/* 3D Cube */}
        <div className="relative flex flex-1 flex-col items-center justify-center gap-10">
          <CubeProvider>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative inline-block p-10"
            >
              <Cube
                initialAngle={{ x: -15, y: -40 }}
                faceProps={{
                  top: {
                    label: "Arsenal",
                    icon: <SVG.SwordIcon width={32} height={32} />,
                  },
                  bottom: {
                    label: "Bottom",
                  },
                  left: {
                    label: "Left",
                  },
                  right: {
                    label: "Journey",
                    icon: <SVG.JournalIcon width={32} height={32} />,
                  },
                  back: {
                    label: "Projects",
                    icon: <SVG.RepoSubModuleIcon width={32} height={32} />,
                  },
                  front: {
                    label: "Front",
                  },
                }}
              />

              {/* Corner Accents */}
              <div className="absolute top-0 -left-0 w-6 h-6 border-l-2 border-t-2 border-white" />
              <div className="absolute -top-0 -right-0 w-6 h-6 border-r-2 border-t-2 border-white" />
              <div className="absolute -bottom-0 -left-0 w-6 h-6 border-l-2 border-b-2 border-white" />
              <div className="absolute -bottom-0 -right-0 w-6 h-6 border-r-2 border-b-2 border-white" />
            </motion.div>

            <EnchancedCubeNavigation onNavigate={() => {}} />
          </CubeProvider>
        </div>

        <Motto />
      </main>
      <Footer />
    </Fragment>
  );
}
