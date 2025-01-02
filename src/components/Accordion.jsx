import "./accordion.css";
const Accordion = ({ id, question, answer, isActive, toggleAccordion }) => {
  return (
    <div className='accordion' onClick={() => toggleAccordion(id)}>
      <div className='item'>
        <p className='number'>{id}</p>
        <p className='text'>{question}</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={`icon ${isActive ? "rotate" : ""}`}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
        <div className={`hidden-box ${isActive ? "active-box" : ""}`}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
