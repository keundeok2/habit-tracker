import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = event => {
    event.preventDefault(); // 브라우저의 기본기능을 취소시킴 ( form이 submit 되면 화면이 전체 refresh )

    const name = this.inputRef.current.value;
    this.props.onAdd(name);
    /* input 값 초기화  */
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
