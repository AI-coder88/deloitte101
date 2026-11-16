import { COLOR_PALETTE } from "@excalidraw/common";

import type { AppState } from "@excalidraw/excalidraw/types";

export const DELOITTE_COLORS = {
  green: "#86bc25",
  blue: "#0076a8",
  teal: "#0097a9",
  red: "#da291c",
  teal1: "#ddefe8",
  blue1: "#a0dcff",
  coolGray2: "#d0d0ce",
} as const;

// Seeded only for first-time visitors (see `initializeScene`), so users who
// customize or reset their picks keep their choice.
export const DELOITTE_COLOR_TOP_PICKS: AppState["colorTopPicks"] = {
  elementStroke: [
    COLOR_PALETTE.black,
    DELOITTE_COLORS.green,
    DELOITTE_COLORS.blue,
    DELOITTE_COLORS.teal,
    DELOITTE_COLORS.red,
  ],
  elementBackground: [
    COLOR_PALETTE.transparent,
    DELOITTE_COLORS.green,
    DELOITTE_COLORS.teal1,
    DELOITTE_COLORS.blue1,
    DELOITTE_COLORS.coolGray2,
  ],
  bucketFill: [
    COLOR_PALETTE.white,
    DELOITTE_COLORS.green,
    DELOITTE_COLORS.teal1,
    DELOITTE_COLORS.blue1,
    DELOITTE_COLORS.coolGray2,
  ],
  stickyNoteStroke: null,
  stickyNoteBackground: null,
};
