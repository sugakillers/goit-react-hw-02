
import './App.css'
import { useEffect, useState } from 'react'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

function App() {

  const [feedback, setFeedback] = useState(() => {

let data = JSON.parse(localStorage.getItem("localData"));

    if (data !== null) {
      return data;
    } else {

      return {
      good: 0,
      neutral: 0,
      bad: 0

    }
    }
  });


  const updateFeedback = feedbackType => {
    setFeedback(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    localStorage.removeItem('saved-feedbacks');
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    if (feedback.good > 0 || feedback.neutral > 0 || feedback.bad > 0) {
      localStorage.setItem('saved-feedbacks', JSON.stringify(feedback));
    }
  }, [feedback]);


  const { good, neutral, bad } = feedback;

  let totalFeedback = good + neutral + bad;
  let positiveFeedback = Math.round(good/totalFeedback * 100)


  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedBack={resetFeedback}
        totalFeedback={totalFeedback}
      />
      
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App