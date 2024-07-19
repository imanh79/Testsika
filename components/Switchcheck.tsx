import React from "react";
import { Switch } from "@headlessui/react";
import { useState } from "react";

const Switchcheck = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="flex items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`group inline-flex h-6 w-11 items-center rounded-full transition duration-200 ${
          enabled
            ? "bg-blue-600 dark:bg-blue-700"
            : "bg-gray-200 dark:bg-gray-600"
        }`}
      >
        <span
          className={`block h-5 w-5 rounded-full bg-white dark:bg-gray-800 transform transition-transform duration-200 ${
            enabled ? "translate-x-5" : "translate-x-1"
          }`}
        />
      </Switch>
    </div>
  );
};

export default Switchcheck;