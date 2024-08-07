// Ensure React and ReactDOM are available globally
const { createElement } = React;
const { render } = ReactDOM;

// Create a React element with the text "Seize the day"
const paragraphElement = createElement(
  'p', // HTML tag
  null, // No props
  'Seize the day' // Text content
);

// Find the root container in the HTML
const rootElement = document.getElementById('root');

// Render the React element into the root container
render(paragraphElement, rootElement);

/**
 * Reflection:
 *
 * Traditional DOM manipulation involves selecting elements and updating them directly. 
 * For example, you might use document.createElement('p') and element.textContent = 'Seize the day', 
 * followed by appending the element to the DOM. This imperative approach requires manually 
 * keeping track of the DOM state and updates.
 *
 * React's approach is declarative. You describe what the UI should look like, 
 * and React handles the updates efficiently. By using React.createElement, 
 * you create a virtual representation of the UI, which React then translates into actual DOM operations.
 *
 * Benefits of React's declarative approach:
 * - **Simplicity:** You describe the end state, and React handles the updates.
 * - **Efficiency:** React batches updates and uses a virtual DOM to minimize direct DOM manipulations, 
 *   which can be expensive performance-wise.
 * - **Maintainability:** React code is often easier to understand and maintain, 
 *   especially in larger applications with complex UIs.
 */
