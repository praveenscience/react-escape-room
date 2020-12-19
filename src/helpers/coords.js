export const hasClickedCoords = (x, y, coords) => {
  // If the co-ords are in coords (x1, y1, x2, y2), then return true.
  return x >= coords[0] && x <= coords[2] && y >= coords[1] && y <= coords[3];
};
