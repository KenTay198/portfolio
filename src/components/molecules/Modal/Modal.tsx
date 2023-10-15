import Button from "@atoms/Button";
import React, { useEffect, useRef } from "react";

export interface IModalAction {
  name: string;
  label: string;
  onClick: () => void;
  color?: string;
}

export interface IModalProps {
  isOpen: boolean;
  width?: number;
  height?: number;
  title?: string;
  actions?: IModalAction[];
  close: () => void;
  children: React.ReactNode;
}

const Modal = ({
  isOpen,
  width,
  height,
  title,
  actions,
  close,
  children,
  ...props
}: IModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [children]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[11] ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className="relative flex flex-col bg-white p-4 rounded-lg shadow-lg z-[12] w-full max-h-screen"
        style={{
          maxWidth: width ? `${width}px` : undefined,
          height: height ? `${height}px` : undefined,
        }}
        {...props}
      >
        <button
          className="absolute top-0 right-1 text-xl font-bold hover:scale-110 text-black"
          onClick={close}
        >
          &times;
        </button>
        {title && (
          <div className="mb-4 border-b-[1px] border-gray-400 pb-1 text-black">
            <p className="text-2xl font-bold">{title}</p>
          </div>
        )}
        <div className="mb-4 overflow-y-auto flex-1 max-w-full text-black" ref={ref}>
          {children}
        </div>
        {actions && (
          <div className="flex gap-2 justify-end">
            {actions.map(({ name, label, onClick, color }, index) => (
              <Button
                key={name}
                template="secondary"
                onClick={onClick}
                className={`px-4 py-2 rounded-md ${
                  color
                    ? `bg-${color}-500 text-white`
                    : "bg-blue-500 text-white"
                }`}
              >
                {label}
              </Button>
            ))}
          </div>
        )}
      </div>
      <div
        className={`fixed inset-0 bg-black opacity-50 ${
          isOpen ? "visible" : "invisible"
        }`}
        onClick={close}
      ></div>
    </div>
  );
};

export default Modal;
