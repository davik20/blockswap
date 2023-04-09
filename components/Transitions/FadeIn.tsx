import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./fadein.module.css";

interface Props {
  in?: boolean;
  duration?: number;
  children?:any;
}

const FadeIn: FC<Props> = ({ in: inProp, duration = 300, children }) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={duration}
      classNames={{
        enter: styles.fadeEnter,
        enterActive: styles.fadeEnterActive,
        exit: styles.fadeExit,
        exitActive: styles.fadeExitActive,
      }}
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default FadeIn;
