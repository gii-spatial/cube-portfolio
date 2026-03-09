import { useAtomValue, useSetAtom } from "jotai";
import CubeAtom from "../../cube.atoms";

interface UseCubeFaceZoomReturn {
  zoomOut: () => void;
  isZooming: boolean;
}
export default function useCubeFaceZoom(): UseCubeFaceZoomReturn {
  const setFaceZoom = useSetAtom(CubeAtom.faceZoom);
  const isZooming = useAtomValue(CubeAtom.isZooming);

  const zoomOut = () => {
    setFaceZoom(null);
  };

  return {
    zoomOut,
    isZooming,
  };
}
