/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";

type TypedTextProps = {
  /** Text to be typed. Single strings will type out remain visible unless
   * backspaced on backSpace trigger. Multiline arrays of text will type out
   * string-by-string and automatically backspace between lines according to
   * value of multilineDelay. */
  text: string | string[];
  /** The HTML element to render the text in */
  element: string;
  /** Props to pass to the HTML element. */
  elementProps?: {} | null;
  /** The speed at which text type out in milliseconds. Recommended to be half
   * of backspace speed. */
  typeSpeed?: number;
  /** The speed at which text backspaces in milliseconds. Recommended to be twice
   * type speed. */
  backspaceSpeed?: number;
  /** The delay in milliseconds between the end of typing one line in a multiline
   * array of text and starting the next line. Recommended to be half of type speed.
   */
  multilineDelay?: number;
  /** When this value changes, trigger typing. */
  typeTrigger?: any;
  /** When this value changes, trigger backspacing. */
  backspaceTrigger?: any;
  /** The string to display as the flashing cursor. */
  cursorString?: string;
  /** Supresses typing animation. Useful for supressing animation on mobile devices
   * if the animation normally occurs on hover, for example.
   */
  suppressAnimation?: boolean;
  /** Toggles whether or not text is displayed if typing animation is suppressed. */
  showTextIfAnimationSuppressed?: boolean;
};

const TypedText = ({
  text,
  element = "span",
  elementProps = null,
  typeSpeed = 100,
  backspaceSpeed = 50,
  multilineDelay = 1000,
  typeTrigger = null,
  backspaceTrigger = null,
  cursorString = "|",
  suppressAnimation = false,
  showTextIfAnimationSuppressed = false,
}: TypedTextProps) => {
  const [typedText, setTypedText] = useState("");

  const isFirstRender = useRef(true);

  useEffect(() => {
    typeEffect();
  }, []);

  // useEffect(() => {
  //   // only trigger effect on actual update
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //   } else {
  //     typeEffect();
  //   }
  // }, [typeTrigger]);

  // useEffect(() => {
  //   // only trigger effect on actual update
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //   } else {
  //     backspaceEffect();
  //   }
  // }, [backspaceTrigger]);

  const typeEffect = (
    string = "",
    currStrIdx = 0,
    currStrArrayIdx = 0,
    fullText = typeof text === "string" ? text : text[currStrArrayIdx]
  ) => {
    if (string.length < fullText.length) {
      const newString = string.concat(fullText.charAt(currStrIdx));
      setTypedText(newString);
      setTimeout(
        () => typeEffect(newString, currStrIdx + 1, currStrArrayIdx),
        typeSpeed
      );
    } else {
      if (Array.isArray(text) && currStrArrayIdx < text.length - 1) {
        setTimeout(
          () => backspaceEffect(text[currStrArrayIdx]),
          backspaceSpeed
        );
        setTimeout(
          () =>
            setTimeout(() => typeEffect("", 0, currStrArrayIdx + 1), typeSpeed),
          multilineDelay
        );
      }
    }
  };

  const backspaceEffect = (string = text, currStrIdx = string.length - 1) => {
    // can't backspace on an array of text
    if (Array.isArray(string)) {
      return;
    }

    if (typeof string === "string" && string.length > 0) {
      const newString = string.substring(0, currStrIdx);
      setTypedText(newString);
      setTimeout(
        () => backspaceEffect(newString, currStrIdx - 1),
        backspaceSpeed
      );
    }
  };

  return (
    <>
      {!suppressAnimation &&
        React.createElement(
          element,
          elementProps,
          `${typedText}${cursorString}`
        )}
      {suppressAnimation &&
        showTextIfAnimationSuppressed &&
        React.createElement(element, elementProps, `${text}`)}
    </>
  );
};

export default TypedText;
