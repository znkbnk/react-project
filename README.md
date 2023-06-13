This project will help you understand
the practical usage of useState, useEffect, 
useMemo, React.memo, and useCallback in
a real-world scenario. Feel free to
customize and enhance the project as
you see fit to further practice and
explore these React hooks.

Step 1: Set up the project
-  Create a new React project using Create
React App or any other preferred method.

Step 2: Create a Counter component
-  Create a new file named Counter.js and
define a functional component called Counter.
Inside the component, render a <div> element
with three buttons: "Increment", "Decrement",
and "Reset". Display the current counter
value below the buttons.

Step 3: Define state for the counter value

-  Inside the Counter component, import
useState from the React library. Use the
useState hook to define a state variable
called count and a function to update it
called setCount. Initialize the state with
a default value of 0.

Step 4: Implement increment and
decrement functionality

-  Add onClick event handlers to the
"Increment" and "Decrement" buttons.
Inside these event handlers, call the
setCount function to update the count
state variable accordingly.

Step 5: Implement reset functionality

-  Add an onClick event handler to the
"Reset" button. Inside this event handler,
call the setCount function to reset the
count state variable to 0.

Step 6: Display the counter value

-  Render the count variable below the
buttons, so the user can see the
urrent value of the counter.

Step 7: Use useEffect to update
the document title

-  Import useEffect from the React library.
Use the useEffect hook to update the
document title with the current value
of the counter whenever it changes.
Make sure to add a dependency array to
the useEffect call to prevent
unnecessary re-renders.

Step 8: Use useMemo to calculate derived data

-  Inside the Counter component, import useMemo
from the React library. Use the useMemo
hook to calculate a derived value called
isEven based on the current value of the
counter. isEven should be true if the 
counter value is even and false otherwise.
-  Display the value of isEven below the counter.

Step 9: Optimize rendering using React.memo

-  Import React.memo from the React library.
Wrap the Counter component with React.memo
to prevent unnecessary re-renders when the
parent component re-renders without
any changes to props.

Step 10: Use useCallback to optimize
event handlers

Import useCallback from the React library.
-  Define the event handlers for increment,
decrement, and reset using the 
useCallback hook. This will optimize
performance by preventing unnecessary
re-creation of event handler functions
on each render.

