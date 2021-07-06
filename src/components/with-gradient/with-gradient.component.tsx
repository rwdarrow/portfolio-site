import { ComponentType, FunctionComponent } from "react";
import { palette } from "../../global.styles";

interface WithGradientProps {
  x1?: string;
  y1?: string;
  x2?: string;
  y2?: string;
}

const withGradient =
  <P extends object>(
    WrappedComponent: ComponentType<P>
  ): FunctionComponent<P & WithGradientProps> =>
  ({
    x1 = "0%",
    y1 = "0%",
    x2 = "0%",
    y2 = "0%",
    ...props
  }: WithGradientProps) => {
    return (
      <>
        <svg width="0" height="0">
          <linearGradient id="gradient" x1={x1} y1={y1} x2={x2} y2={y2}>
            <stop stopColor={`${palette.darkAccent}`} offset="0%" />
            <stop stopColor={`${palette.mainBrand}`} offset="50%" />
            <stop stopColor={`${palette.lightAccent}`} offset="100%" />
          </linearGradient>
        </svg>
        <WrappedComponent
          {...(props as P)}
          style={{ fill: "url(#gradient)" }}
        />
      </>
    );
  };

export default withGradient;
