/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";

import "./type-text.css";

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
  elementStyles?: {} | null;
  /** The speed at which text type out in milliseconds. Recommended to be half
   * of backspace speed. */
  typeSpeed?: number;
  /** How long after mounting the component to trigger the animation start in ms.*/
  startDelay?: number;
  /** The speed at which text backspaces in milliseconds. Recommended to be twice
   * type speed. */
  backspaceSpeed?: number;
  /** The delay in milliseconds between the end of typing a line and backspacing that
   * line in a multiline array of text and starting the next line. Recommended to be
   * half of type speed.
   */
  backspaceDelay?: number;
  /** The delay in milliseconds between the end of backspacing one line in a multiline
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
  /** For gradient text there is the limitation of not being able to show blinking
   * cursor normally. A div background must be toggled between transparent and 
   * color of underlying background. Because background color is a keyframe CSS 
   * property that cannot be dynamically set, only use this for specific use case 
   * where the background color is known to be correct */
  hasGradientText?: boolean;
};

const TypedText = ({
  text,
  element = "span",
  elementProps = null,
  elementStyles = null,
  typeSpeed = 100,
  startDelay = 0,
  backspaceSpeed = 50,
  backspaceDelay = 1000,
  multilineDelay = 1000,
  typeTrigger = null,
  backspaceTrigger = null,
  cursorString = "|",
  suppressAnimation = false,
  showTextIfAnimationSuppressed = false,
  hasGradientText = false,
}: TypedTextProps) => {
  const [typedText, setTypedText] = useState("");

  const isFirstRender = useRef(true);

  useEffect(() => {
    setTimeout(() => {
      typeEffect();
    }, startDelay);
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
        setTimeout(() => {
          backspaceEffect(text[currStrArrayIdx]).then(() => {
            setTimeout(
              () => typeEffect("", 0, currStrArrayIdx + 1),
              multilineDelay
            );
          });
        }, backspaceDelay);
      }
    }
  };

  const backspaceEffect = async (
    string = text,
    currStrIdx = string.length - 1
  ) => {
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
      {!suppressAnimation
        ? React.createElement(
            element,
            (elementProps = {
              style: elementStyles,
              ...elementProps,
            }),
            `${typedText}`,
            React.createElement(
              "span",
              (elementProps = {
                className: `${
                  hasGradientText ? "styleForGradientText" : "defaultStyle"
                }`,
              }),
              `${cursorString}`
            )
          )
        : suppressAnimation &&
          showTextIfAnimationSuppressed &&
          React.createElement(
            element,
            (elementProps = {
              style: elementStyles,
              ...elementProps,
            }),
            `${text}`
          )}
    </>
  );
};

export default TypedText;
