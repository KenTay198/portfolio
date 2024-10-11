import React from "react";
import Modal from "@molecules/Modal/Modal";
import { FaStar } from "react-icons/fa";

interface IProps {
  isOpen: boolean;
  close: () => void;
  title: string;
  notations: string[];
}

function NotationModal({ notations, ...props }: IProps) {
  return (
    <Modal width={400} {...props}>
      <div>
        {Array.from(new Array(5).keys()).map((i) => (
          <div className="flex items-center" key={`notation-${i}`}>
            {Array.from(new Array(i + 1).keys()).map((e) => (
              <FaStar key={`notation-${i}-star-${e}`} />
            ))}
            {notations[i] && <>&nbsp;: {notations[i]}</>}
          </div>
        ))}
      </div>
    </Modal>
  );
}

export default NotationModal;
