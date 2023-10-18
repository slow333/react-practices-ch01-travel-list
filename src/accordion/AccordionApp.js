import "./styles.css";
import {useState} from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

function AccordionApp() {

  const [curOpen, setCurOpen] = useState(null)

  return (
    <div className='accordion'>
      {faqs.map((item, idx) =>
        <Accordion title={item.title} text={item.text} num={idx}
                   curOpen={curOpen} onOpen={setCurOpen}
                   key={idx}>
          <div className='content-box'>{item.text}</div>
        </Accordion>
      )}
    </div>
  );
}

function Accordion({curOpen, onOpen, title, children, num}) {
  const isOpen = curOpen === num

  return(
    <div className={`item ${isOpen ? 'open' : ""}`} onClick={() => onOpen(num)}>
      <p className='number'>{(num < 9) ? `0${num + 1}` : num + 1}</p>
      <p className={isOpen ? "title text": 'title'}>{title} </p>
      <p className='icon'>{isOpen ? "➖" : "➕"}</p>
      {isOpen && children}
    </div>
    )
}

export default AccordionApp