import { FC, ReactNode } from "react";
import modalCartIcon from "../../assets/icons/cartIconModal.svg";

interface GenericModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const GenericModal: FC<GenericModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal ">
        <div className="flex justify-end">
          <button onClick={handleClick} className="flex self-end">
            <img src={modalCartIcon} alt="Close Cart" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default GenericModal;
