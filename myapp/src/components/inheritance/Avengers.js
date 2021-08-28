import Human from "./Human";

export default class Avengers extends Human {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    let text = this.canDo("Iron Man", "Fly");

    return super.render(text);
  }
}

/**
 * Biggest problem with the inheritance is, components are tightly coupled, i.e- one is dependent with another. This is bad, because, if one is deleted, the other one can not work.
 *
 * This is why React recommend us to use Composition not Inheritance
 */
