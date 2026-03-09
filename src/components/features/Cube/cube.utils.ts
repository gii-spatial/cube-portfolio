const normalize360 = (angle: number) => ((angle % 360) + 360) % 360;

const CubeUtils = {
  normalize360,
};

export default CubeUtils;
