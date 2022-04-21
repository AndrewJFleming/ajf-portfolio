import React from "react";

import "./FAQItemAnswer.css";

const FAQItemAnswer = ({ answerList, answer }) => {
  return (
    <div className="faq-a-wrapper ">
      <p className="faq-a" dangerouslySetInnerHTML={{ __html: answer }}></p>
      {answerList && (
        <ul className="answer-list">
          {answerList.map((listItem) => (
            <li
              key={listItem.id}
              dangerouslySetInnerHTML={{ __html: listItem.content }}
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default FAQItemAnswer;
