/* eslint-disable react-hooks/exhaustive-deps */
import {
  forwardRef,
  useState,
  useEffect,
  useImperativeHandle,
  createElement,
  Fragment,
} from "react";

import "./type-text.css";

export type TypedTextRef = {
  type: () => void;
  backspace: () => void;
};

type TypedTextProps = {
  /** Text to be typed. Single strings will type out remain visible unless
   * backspaced on backSpace trigger. Multiline arrays of text will type out
   * string-by-string and automatically backspace between lines according to
   * value of multilineDelay. */
  text: string | string[];
  /** The HTML element to render the text in */
  element: string;
  /** Props to pass to the HTML element. */
  elementProps?: {};
  elementStyles?: {};
  /** Toggles whether or not to animate on start. */
  onStart?: boolean;
  /** Toggles whether or not to loop the animation. */
  loop?: boolean;
  /** The speed at which text type out in milliseconds. */
  typeSpeed?: number;
  /** How long after mounting the component to trigger the animation start in ms.*/
  startDelay?: number;
  /** How long after starting the animation to start typing. */
  startTypingDelay?: number;
  /** The speed at which text backspaces in milliseconds. */
  backspaceSpeed?: number;
  /** The delay in milliseconds between the end of typing a line and backspacing that
   * line in a multiline array of text and starting the next line.
   */
  backspaceDelay?: number;
  /** The delay in milliseconds between the end of backspacing one line in a multiline
   * array of text and starting the next line.
   */
  multilineDelay?: number;
  /** How long in ms after typing ends to stop showing cursor. */
  cursorTimeout?: number;
  /** The string to display as the flashing cursor. */
  cursorString?: string;
  /** Toggle whether or not to show the cursor. */
  showCursor?: boolean;
  /** Toggles whether or not to hide the cursor when typing animation is done. */
  hideCursorOnAnimationFinished?: boolean;
  /** Toggles whether or not to hide cursor before starting the animation. */
  hideCursorBeforeAnimationStart?: boolean;
  /** Supresses typing animation. Useful for supressing animation on mobile devices
   * if the animation normally occurs on hover, for example.
   */
  suppressAnimation?: boolean;
  /** Toggles whether or not to display the curor if animation is suppressed */
  showCursorIfAnimationSuppressed?: boolean;
  /** Toggles whether or not text is displayed if typing animation is suppressed. */
  showTextIfAnimationSuppressed?: boolean;
  /** For gradient text there is the limitation of not being able to show blinking
   * cursor normally. A div background must be toggled between transparent and
   * color of underlying background. Because background color is a keyframe CSS
   * property that cannot be dynamically set, only use this for specific use case
   * where the background color is known to be correct. */
  hasGradientText?: boolean;
};

const TypedText = forwardRef<TypedTextRef, TypedTextProps>(
  (
    {
      text,
      element = "span",
      elementProps = null,
      elementStyles = null,
      onStart = true,
      loop = false,
      typeSpeed = 50,
      startDelay = 0,
      startTypingDelay = 0,
      backspaceSpeed = 25,
      backspaceDelay = 1000,
      multilineDelay = 1000,
      cursorTimeout = 1000,
      cursorString = "|",
      showCursor = true,
      hideCursorOnAnimationFinished = false,
      hideCursorBeforeAnimationStart = true,
      suppressAnimation = false,
      showCursorIfAnimationSuppressed = false,
      showTextIfAnimationSuppressed = false,
      hasGradientText = false,
    },
    ref
  ) => {
    const [typedText, setTypedText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);

    useImperativeHandle(ref, () => ({
      type: () => {
        typeEffect();
      },
      backspace: () => {
        backspaceEffect();
      },
    }));

    const sleep = (delay: number) =>
      new Promise((resolve) => setTimeout(resolve, delay));

    const start = async () => {
      await sleep(startDelay);
      if (hideCursorBeforeAnimationStart) {
        setCursorVisible(true);
      }

      await sleep(startTypingDelay);
      typeEffect();
    };

    // handle starting the animation on component mount
    useEffect(() => {
      if (hideCursorBeforeAnimationStart) {
        setCursorVisible(false);
      }

      if (onStart) {
        start();
      }
    }, []);

    const typeEffect = async (
      string = "",
      currStrIdx = 0,
      currStrArrayIdx = 0,
      fullText = typeof text === "string" ? text : text[currStrArrayIdx]
    ) => {
      // typing of a line
      if (string.length < fullText.length) {
        const newString = string.concat(fullText.charAt(currStrIdx));

        setTypedText(newString);
        await sleep(typeSpeed);
        typeEffect(newString, currStrIdx + 1, currStrArrayIdx);
      } else {
        // typing of multiple lines
        if (Array.isArray(text)) {
          if (currStrArrayIdx < text.length - 1) {
            await sleep(backspaceDelay);
            backspaceEffect(text[currStrArrayIdx]);

            // wait for current line to complete backspacing AND for delay to start next line
            await sleep(text[currStrArrayIdx].length * backspaceSpeed);
            await sleep(multilineDelay);
            typeEffect("", 0, currStrArrayIdx + 1);
          } else if (currStrArrayIdx === text.length - 1 && loop) {
            typeEffect("", 0, 0);
          }
        } else {
          await sleep(cursorTimeout);
          setCursorVisible(!hideCursorOnAnimationFinished);
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
        await sleep(backspaceSpeed);
        backspaceEffect(newString, currStrIdx - 1);
      }
    };

    return createElement(
      Fragment,
      null,
      !suppressAnimation &&
        createElement(
          element,
          (elementProps = {
            style: elementStyles,
            ...elementProps,
          }),
          suppressAnimation
            ? showTextIfAnimationSuppressed
              ? text
              : ""
            : typedText,
          createElement(
            "span",
            (elementProps = {
              className: hasGradientText
                ? "styleForGradientText"
                : "defaultStyle",
            }),
            showCursor && cursorVisible
              ? cursorString
              : showCursorIfAnimationSuppressed
              ? cursorString
              : ""
          )
        )
    );
  }
);

export default TypedText;
