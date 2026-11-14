import styled from "styled-components";

export const Page = styled("div")(() => ({
  position: "fixed",
  inset: 0,
}));

export const Panel = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 24,
  bottom: 24,
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 12,
  padding: 20,
  borderRadius: 16,
  background: theme.colors.surface,
  color: theme.colors.text,
}));

export const PanelLabel = styled("span")(() => ({
  fontSize: 12,
  letterSpacing: 1,
  textTransform: "uppercase",
  opacity: 0.7,
}));

export const SwatchRow = styled("div")(() => ({
  display: "flex",
  gap: 10,
}));

export const Swatch = styled("button")(({ theme, $color, $active }) => ({
  width: 32,
  height: 32,
  padding: 0,
  borderRadius: "50%",
  cursor: "pointer",
  background: $color,
  border: `2px solid ${$active ? theme.colors.text : "transparent"}`,
}));

export const FinishRow = styled("div")(() => ({
  display: "flex",
  gap: 8,
}));

export const FinishButton = styled("button")(({ theme, $active }) => ({
  padding: "8px 14px",
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
  color: theme.colors.text,
  background: $active ? theme.colors.accent : "transparent",
}));

export const PanelInput = styled("input")(({ theme }) => ({
  padding: "10px 12px",
  borderRadius: 8,
  border: `1px solid ${theme.colors.background}`,
  background: theme.colors.background,
  color: theme.colors.text,
  fontSize: 14,
  outline: "none",
  "&::placeholder": {
    opacity: 0.5,
  },
  "&:focus": {
    borderColor: theme.colors.accent,
  },
}));
