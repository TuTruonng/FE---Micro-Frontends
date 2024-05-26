import React, { useState } from 'react';

import { createMountComponent } from '../../utils/mountComponent';

export interface IButtonProps {
  title?: string
  onClick: (val: string) => void
}

const FormFeedback = (props: IButtonProps): JSX.Element => {
  const [inputs, setInputs] = useState<UserModel>({
    username: "",
    age: 18
  });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert("Your name is " + `${inputs.username === "" ? "noname" : inputs.username}` + " and " + "your age is " + `${inputs.age}`);
  }
  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: "column"}}>
      <section className="from-blog spad">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title from-blog__title">
              <h2>Form Feedback</h2>
            </div>
          </div>

          <div className="col-lg-12" style={{display: "flex", flexDirection: "column", alignItems: "center", width: "200px"}}>
            <label style={{display: 'flex', gap: "20px"}}>Enter your name:
              <input 
                type="text" 
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}
              />
            </label>
            <label style={{display: 'flex', gap: "20px" }}>Enter your age:
              <input 
                type="number" 
                name="age" 
                value={inputs.age || ""} 
                onChange={handleChange}
              />
            </label>
            <input type="submit" />
          </div>

          <div className="col-lg-12 mt-4">
            <div className="section-title from-blog__title">
              <h5>Your name: {inputs.username}</h5>
              <h5>Your age: {inputs.age}</h5>
            </div>
          </div>
        </div>
      </section>
  </form>
  );
}

export default (el: any, props: IButtonProps) => createMountComponent(FormFeedback, props, el);
