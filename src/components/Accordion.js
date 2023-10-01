import { useState } from "react";
import "./accordion.css";
const Accordion = ({ id, question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleAccordion = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='accordion' onClick={toggleAccordion}>
      <div className='item'>
        <p className='number'>{id}</p>
        <p className='text'>{question}</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={`icon ${isVisible ? "rotate" : ""}`}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
        <div className={`hidden-box ${isVisible ? "active-box" : ""}`}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
