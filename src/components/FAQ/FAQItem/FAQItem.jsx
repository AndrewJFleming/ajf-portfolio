import React, { useState } from "react";

import FAQItemAnswer from "./FAQItemAnswer/FAQItemAnswer";
import FAQItemQuestion from "./FAQItemQuestion/FAQItemQuestion";

const FAQItem = ({ question, answer, answerList, defaultSetting }) => {
  const [expanded, setExpanded] = useState(defaultSetting);
  return (
    <React.Fragment>
      <FAQItemQuestion
        question={question}
        setExpanded={setExpanded}
        expanded={expanded}
      />
      {expanded && <FAQItemAnswer answer={answer} answerList={answerList} />}
    </React.Fragment>
  );
};
export default FAQItem;
