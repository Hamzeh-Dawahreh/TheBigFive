# The Big Five

## Instructions

To run and test the application locally, please follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the command: `npm install`.
4. Start the development server with the command: `npm run dev`.
5. Open your browser and visit `http://localhost:5173` to access the application.

## Design Choices

In this project, I aimed to duplicate the design provided in the Figma file as closely as possible. I utilized the provided design assets and followed the layout and styling guidelines to achieve a consistent and visually appealing user interface.

I made design choices that prioritize usability and responsiveness, ensuring that the application looks and functions well across different screen sizes and devices.

## Managing Dynamic State with React Hooks

When managing a dynamic state on this page, the `useState` and `useEffect` React hooks can be utilized. Here's an example scenario:

Let's say we have a form component where the user can input their name. We want to display a personalized greeting message using the entered name. We can manage this dynamic state using the `useState` and `useEffect` hooks.

```javascript
import React, { useState, useEffect } from "react";

const GreetingForm = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    if (name) {
      setGreeting(`Hello, ${name}!`);
    } else {
      setGreeting("");
    }
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>{greeting}</p>
    </div>
  );
};
```
