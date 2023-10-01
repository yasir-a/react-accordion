import { faqs } from "./FAQs";
import Accordion from "./components/Accordion";
import "./App.css";

function App() {
  const renderFAQs = () => {
    return faqs.map((faq) => {
      return (
        <Accordion
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          id={faq.id}
        />
      );
    });
  };
  return <div className='App'>{renderFAQs()}</div>;
}

export default App;
