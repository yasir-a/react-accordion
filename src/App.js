import { useState } from "react";
import { faqs } from "./FAQs";
import Accordion from "./components/Accordion";
import "./App.css";

function App() {
  const [activeAccordionId, setActiveAccordionId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordionId(id === activeAccordionId ? null : id);
  };

  const renderFAQs = () => {
    return faqs.map((faq) => {
      return (
        <Accordion
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          id={faq.id}
          isActive={faq.id === activeAccordionId}
          toggleAccordion={() => toggleAccordion(faq.id)}
        />
      );
    });
  };

  return <div className='App'>{renderFAQs()}</div>;
}

export default App;
