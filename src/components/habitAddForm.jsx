import React, { memo } from "react";
// rcc -> rsi
const HabitAddForm = memo(props => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault(); // 브라우저의 기본기능을 취소시킴 ( form이 submit 되면 화면이 전체 refresh )

    const name = inputRef.current.value;
    name && props.onAdd(name);

    inputRef.current.value = "";
    // this.formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      ></input>
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;

/*
import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = event => {
    event.preventDefault(); // 브라우저의 기본기능을 취소시킴 ( form이 submit 되면 화면이 전체 refresh )

    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);

    this.inputRef.current.value = "";
    // this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        ></input>
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
*/
