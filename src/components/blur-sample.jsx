import { useEffect, useRef, useState } from "react";
import classes from "./blur-sample.module.css";

const BlurSampleComponent = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isFocusByBlurAPI, setIsFocusByBlurAPI] = useState(false);
  const [isFocusByFocusAPI, setIsFocusByFocusAPI] = useState(false);
  const inputRefForBlur = useRef();
  const inputRefForFocusout = useRef();

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  useEffect(() => {
    const handleFocusHTML = () => {
      setIsFocusByBlurAPI(true);
    };

    inputRefForBlur.current.addEventListener("focus", handleFocusHTML);

    return () => {
      inputRefForBlur.current.removeEventListener("focus", handleFocusHTML);
    };
  }, []);

  useEffect(() => {
    const handleBlurHTML = () => {
      setIsFocusByBlurAPI(false);
    };

    inputRefForBlur.current.addEventListener("blur", handleBlurHTML);

    return () => {
      inputRefForBlur.current.removeEventListener("blur", handleBlurHTML);
    };
  }, []);

  useEffect(() => {
    const handleFocusHTML = () => {
      setIsFocusByFocusAPI(true);
    };

    inputRefForFocusout.current.addEventListener("focus", handleFocusHTML);

    return () => {
      inputRefForFocusout.current.removeEventListener("focus", handleFocusHTML);
    };
  }, []);

  useEffect(() => {
    const handleFocusout = () => {
      setIsFocusByFocusAPI(false);
    };

    inputRefForFocusout.current.addEventListener("focusout", handleFocusout);

    return () => {
      inputRefForFocusout.current.removeEventListener(
        "focusout",
        handleFocusout
      );
    };
  }, []);

  return (
    <div className={classes.wrapper}>
      <input
        value={"by react"}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={classes.input}
      />
      <div>{`Focus status by react onBlur: ${isFocus}`}</div>
      <input
        ref={inputRefForBlur}
        value={"blur web api"}
        className={classes.input}
      />
      <div>{`Focus status by blur web API: ${isFocusByBlurAPI}`}</div>
      <input
        ref={inputRefForFocusout}
        value={"by webapi focusout"}
        className={classes.input}
      />
      <div>{`Focus status by focusout web API: ${isFocusByFocusAPI}`}</div>
    </div>
  );
};

export default BlurSampleComponent;
