import React, { ReactElement, SVGProps } from "react";
import * as S from "./Navigation.style";
import { Link } from "react-router-dom";

interface NavButtonProps {
  name: string;
  linkTo: string;
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  currentURL: string;
}

export const NavButton = ({
  name,
  linkTo,
  icon,
  currentURL,
}: NavButtonProps) => {
  const fillColor = currentURL.includes(linkTo) ? "#ef64b8" : "#6C6C6C";

  const updatedIcon = React.cloneElement(icon, {
    fill: fillColor,
    stroke: fillColor,
  });

  return (
    <Link to={linkTo}>
      <S.NavContent>
        {updatedIcon}
        <p
          style={{
            color: fillColor,
          }}
        >
          {name}
        </p>
      </S.NavContent>
    </Link>
  );
};

export default NavButton;
