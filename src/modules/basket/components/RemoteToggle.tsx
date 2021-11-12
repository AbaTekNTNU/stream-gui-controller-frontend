import React, { FormEventHandler, ReactNode } from "react";
import styles from "./RemoteToggle.module.css";
import moduleinfo from "../moduleinfo.json";

type CheckBoxButtonProps = {
  children?: ReactNode;
  id: string;
  eventName: string;
};

const RemoteCheckboxButton = ({
  children,
  id,
  eventName,
}: CheckBoxButtonProps) => {
  // Decide name/id of toggle based on which property is defined
  id = id ? id : String.apply(children);
  children = children ? children : id;

  // Perform post with the new event. endpoint is defined in moduleinfo.json
  const handleToggleEvent: FormEventHandler<HTMLInputElement> = (event) => {
    const isActived = event.currentTarget.checked;

    let responseData;

    const requestOptions: RequestInit = {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "score",
        payload: {
          value: isActived,
          control: eventName,
          type: "control",
        },
      }),
    };

    fetch(moduleinfo.url, requestOptions)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then(
        (data) => {
          responseData = data;
        },
        (error) => {
          console.log(error);
        }
      );
    console.log(responseData);

    // if (!responseData) {
    //   event.currentTarget.checked = !isActived;
    //   // Display error ...
    // }
  };

  return (
    <div className={styles.CheckboxButton}>
      <input type="checkbox" id={id} onChange={handleToggleEvent} />
      <label htmlFor={id}>
        <div>{children}</div>
      </label>
    </div>
  );
};

export default RemoteCheckboxButton;
