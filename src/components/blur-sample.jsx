import { useEffect, useRef, useState } from 'react'
import classes from "./blur-sample.module.css";

const BlurSampleComponent = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isFocusHTML, setIsFocusHTML] = useState(false);
  const inputRef = useRef();

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  useEffect(() => {
    const handleFocusHTML = () => {
      setIsFocusHTML(true);
    }

    inputRef.current.addEventListener('focus', handleFocusHTML);

    return () => {
      inputRef.current.removeEventListener('focus', handleFocusHTML)
    }
  }, [])

  useEffect(() => {
    const handleBlurHTML = () => {
      setIsFocusHTML(false);
    };

    inputRef.current.addEventListener('blur', handleBlurHTML);

    return () => {
      inputRef.current.removeEventListener('blur', handleBlurHTML)
    }
  }, [])


  return (
    <div className={classes.wrapper}>
      <input
        value={'by react'}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={classes.input}
      />
      <div>
        {`react focus: ${isFocus}`}
      </div>
      <input
        ref={inputRef}
        value={'by web api'}
        className={classes.input}
      />
      <div>
        {`html focus: ${isFocusHTML}`}
      </div>
    </div>
  );
};

export default BlurSampleComponent;
