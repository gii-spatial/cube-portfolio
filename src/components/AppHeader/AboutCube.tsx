import { type ReactElement, useState } from "react";
import { useTheme } from "@/components/themes";
import BaseModal from "@/components/_core/modals/BaseModal";
import SpinningCube from "@/components/features/animations/SpinningCube";

export default function AboutCube(): ReactElement {
  const { palette } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = (): void => {
    setModalOpen(true);
  };

  const handleClose = (): void => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        onClick={handleOpen}
        className="flex items-center gap-2 font-light cursor-pointer select-none"
        style={{ color: palette.foreground }}
      >
        About Cube
      </div>

      {/* Modal */}
      <BaseModal
        open={modalOpen}
        onClose={handleClose}
        classNames={{
          overlayClassName: `backdrop-blur-sm bg-[${palette.background}/80]`,
        }}
      >
        {/* Header */}
        <BaseModal.Header className="flex flex-col items-center gap-3">
          <h2
            className="font-quantico text-2xl uppercase tracking-widest"
            style={{ color: palette.accent }}
          >
            Cube
          </h2>

          {/* Animated underline with Spinning Cube */}
          <div className="flex items-center gap-3 w-full justify-center">
            <div
              className="h-[2px] w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent"
              style={{ opacity: 0.5 }}
            />
            <SpinningCube />
            <div
              className="h-[2px] w-16 bg-gradient-to-l from-transparent via-gray-400 to-transparent"
              style={{ opacity: 0.5 }}
            />
          </div>
        </BaseModal.Header>

        {/* Body */}
        <BaseModal.Body
          className="flex flex-col gap-3 px-2 text-center text-sm md:text-base"
          style={{ color: palette.foregroundBody }}
        >
          <p>
            It started as a midnight thought —{" "}
            <span className="italic">“cube, cube... cube 🤔?”</span> — and
            somehow became this. And hey… how would I have known late-night
            thoughts could turn into something like this? Give it a spin. I
            promise it’s more than just geometry.
          </p>
          <p>
            The Cube represents me — a multidimensional view of who I am. Each
            face reveals a different side of my story: my background,
            experiences, skills, passions, and aspirations. Just like a cube, no
            single side defines the whole. Rotate it, explore it, and discover
            how each perspective connects to form the complete picture of my
            journey.
          </p>
        </BaseModal.Body>

        {/* Footer */}
        <BaseModal.Footer>
          <button
            onClick={() => setModalOpen(false)}
            className={`
              rounded-full px-6 py-2 text-sm uppercase tracking-wider
              transition-all duration-300
              border border-[${palette.border}]
              text-white
              bg-[${palette.background}]
              hover:bg-[${palette.accent}] hover:text-white
            `}
          >
            Close
          </button>
        </BaseModal.Footer>
      </BaseModal>
    </>
  );
}
