import React from "react";
import styles from "./Basket.module.css";
import RemoteToggle from "./components/RemoteToggle";
import moduleinfo from "./moduleinfo.json";

const Basket = () => {
  console.log(moduleinfo);

  const buttons = moduleinfo.eventGroups.map(
    ({ name, activatedEventName, deactivatedEventName }) => (
      <RemoteToggle
        key={name}
        id={name}
        activatedEventName={activatedEventName}
        deactivatedEventName={deactivatedEventName}
      />
    )
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.endpointText}>/basket</div>
      <div className={styles.formWrapper}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className={styles.form}
        >
          {buttons}
        </form>
      </div>
    </div>
  );
};

export default Basket;
