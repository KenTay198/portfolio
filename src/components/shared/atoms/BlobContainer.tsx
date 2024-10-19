import React from "react";

type BlobNumber = 1 | 2;
type Color = "primary" | "accent" | "secondary";
type Type = "filled" | "outlined";

interface PlacementTopRight {
  top?: number;
  right?: number;
}

interface PlacementBottomRight {
  bottom?: number;
  right?: number;
}

interface PlacementTopLeft {
  top?: number;
  left?: number;
}

interface PlacementBottomLeft {
  bottom?: number;
  left?: number;
}

type Placement = PlacementTopRight &
  PlacementBottomRight &
  PlacementTopLeft &
  PlacementBottomLeft;

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  after?: {
    color: Color;
    type: Type;
    number: BlobNumber;
    placement: Placement;
    width: number;
    height: number;
    className?: string;
  };
  before?: {
    color: Color;
    type: Type;
    number: BlobNumber;
    placement: Placement;
    width: number;
    height: number;
    className?: string;
  };
}

const BlobContainer = ({
  children,
  after,
  before,
  className,
  ...props
}: IProps) => {
  return (
    <div {...props} className="relative">
      {after && (
        <span
          style={{
            width: `${after.width}px`,
            height: `${after.height}px`,
            ...after.placement,
          }}
          className={`blob blob-${after.number}-${after.color} blob-${
            after.type
          } ${after.className || ""}`}
        ></span>
      )}

      {before && (
        <span
          style={{
            width: `${before.width}px`,
            height: `${before.height}px`,
            ...before.placement,
          }}
          className={`blob blob-${before.number}-${before.color} blob-${
            before.type
          } ${before.className || ""}`}
        ></span>
      )}

      <div className={`relative z-[1] ${className}`}>{children}</div>
    </div>
  );
};

export default BlobContainer;
