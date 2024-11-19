import css from './Feedback.module.css'

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
    const { good, neutral, bad } = feedback;
return (
    <div className={css.feedback_div}>
    <ul>
        <li>Good : {good}</li>
        <li>Neutral : {neutral}</li>
        <li>Bad : {bad}</li>
    </ul>
    <span className={css.feedback_total}>Total: {totalFeedback}</span>
    <span className={css.feedback_positive}>Positive: {totalFeedback === 0 ? 0 :positiveFeedback}%</span>
    </div>
)
}

export default Feedback


