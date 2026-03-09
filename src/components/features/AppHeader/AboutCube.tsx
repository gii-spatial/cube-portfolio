import { type ReactElement, useState } from "react";
import Modal from "@/components/ui/Modal";

export default function AboutCube(): ReactElement {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        onClick={handleModalOpen}
        className="
          flex flex-1 justify-end items-center gap-2
          text-base font-light
          cursor-pointer
          opacity-70 hover:opacity-100
          transition-opacity duration-300"
      >
        About the cube
      </div>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        contentClassName="border border-border/70 ring-1 ring-gray-300"
      >
        <Modal.Header>
          <h2 className="font-quantico text-2xl uppercase tracking-widest text-gray-900">
            The Cube
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
        </Modal.Header>

        <Modal.Body className="relative overflow-hidden flex flex-col gap-2">
          <p>
            It started as a midnight thought —
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
        </Modal.Body>

        <Modal.Footer>
          <button
            onClick={handleModalClose}
            className="
            bg-white text-gray-700 border border-gray-300 
            rounded-full px-6 py-2 text-sm uppercase tracking-wider 
            transition-all duration-300

            /* Hover only on sm+ */
            sm:hover:bg-gray-900 sm:hover:text-white

            /* Disable active background on mobile */
            active:bg-white focus:bg-white sm:active:bg-gray-900 sm:focus:bg-gray-900"
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
