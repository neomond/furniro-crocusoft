import { FC, useEffect } from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const SuccessModal: FC<SuccessModalProps> = ({ isOpen, onClose, message }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay absolute right-[110px] animate-fadeIn">
      <div className="modal-content animate-slideIn">
        <h2 className="font-Poppins">Success</h2>
        <p className="font-Poppins">{message}</p>
      </div>
    </div>
  );
};

export default SuccessModal;
