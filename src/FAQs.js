export const faqs = [
  {
    id: 1,
    question: "What is React and why should I use it?",
    answer:
      "React is a popular JavaScript library for building user interfaces. It allows you to create dynamic and interactive web applications with ease. You should consider using React because it provides a component-based architecture, which simplifies UI development, improves code maintainability, and enhances code reusability. Additionally, React is backed by Facebook and has a large and active community, making it well-supported and constantly evolving.",
  },
  {
    id: 2,
    question: "What are React components?",
    answer:
      "React components are the building blocks of a React application. They are reusable, self-contained units of UI that encapsulate a specific piece of functionality. React components can be either class-based or functional. Class components use JavaScript classes to define a component, while functional components are defined as JavaScript functions. Components can receive input data through props (properties) and manage their own state, making them modular and easy to compose into complex UIs.",
  },
  {
    id: 3,
    question: "What is React Virtual DOM, and how does it work?",
    answer:
      "The Virtual DOM (Document Object Model) is a key concept in React's performance optimization. React maintains a virtual representation of the actual DOM in memory. When data changes in a React application, React first updates the virtual DOM, not the actual DOM. It then compares the new virtual DOM with the previous one (diffing), identifies the minimal set of changes required to update the actual DOM, and applies those changes efficiently. This approach minimizes the number of DOM manipulations, making React applications faster and more efficient.",
  },
  {
    id: 4,
    question: "What is JSX in React?",
    answer:
      "JSX (JavaScript XML) is a syntax extension for JavaScript used in React. It allows you to write HTML-like code within your JavaScript code, making it easier to describe the structure of your UI components.",
  },
  {
    id: 5,
    question: "What are React props?",
    answer:
      "Props (short for properties) are a way to pass data from a parent component to a child component in React. They are read-only and help you make your components reusable and dynamic.",
  },
];
