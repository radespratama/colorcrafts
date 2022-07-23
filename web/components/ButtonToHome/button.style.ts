import { styled } from "@css/theme.config";

export const ContainerButton = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "150px",
  width: "100%",
  bottom: 35,
  left: "50%",
  transform: "translateX(-50%)",
  margin: "0 auto",
  position: "fixed",
  padding: "0.575rem 0.375rem",
  borderRadius: 8,
  backgroundColor: "$gray-700",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  opacity: 0,

  svg: {
    width: "1rem",
    height: "1rem",
  },
  "&.show": {
    opacity: 1,
  },
  "&:hover": {
    backgroundColor: "$gray-800",
  },
});

export const ButtonText = styled("span", {
  color: "$white",
  fontSize: "$text-base",
  marginLeft: 8,
});
