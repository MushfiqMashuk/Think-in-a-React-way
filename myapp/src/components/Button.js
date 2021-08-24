import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;

    if (currentChange === nextChange && currentLocale === nextLocale) {
      return false;
    } else return true;
  }

  // falsy value in JS- 0, null, undefined, NaN, false, ""

  render() {
    const { change, locale, show, enable } = this.props;

    if (!enable) return null; // we must return something, atleast null

    return (
      <>
        <button onClick={() => change(locale)}>
          {locale === "bn-BD" ? "Click to change" : "ঘড়ি চেঞ্জ করুন"}
        </button>

        {show && <p>This text is only for English watch</p>}
        {/*truthy falsy concept of Javascript. its a simple AND operation-0 && <p></p> = 0, 1 && <p></p> = <p><p>*/}
      </>
    );
  }
}

export default Button;
