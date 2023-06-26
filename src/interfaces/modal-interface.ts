export interface ModalProps {
    handleClose: () => void;
    handleInsert: () => void;
    setTexto: (texto: string) => void;
    open: boolean;
    errorText: string;
    required: boolean;
    error: boolean;
  }