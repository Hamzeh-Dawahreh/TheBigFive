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

The `useEffect` hook in React is used to handle side effects and manage the lifecycle of a component. It combines the functionality of both `componentDidMount` and `componentDidUpdate`. It allows you to perform tasks like fetching data from an API or updating the component's state when certain dependencies change.

For instance, consider the following code snippet as an example:

```jsx
useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      const responseData = response.data;
      setData(responseData);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);

useEffect(() => {
  if (userData) {
    const emailHash = md5(userData.email);
    const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;
    console.log(gravatarUrl);
    setAvatar(gravatarUrl);
  }
}, [userData]);
```
