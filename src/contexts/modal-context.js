import { createContext, useState } from "react";

export const ModalContext = createContext({
  setModalOpen: () => false,
  isModalOpen: false,
});

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const value = { isModalOpen, setModalOpen };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
