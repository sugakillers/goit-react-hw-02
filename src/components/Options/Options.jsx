import css from './Options.module.css'
const Options = ({ updateFeedback, resetFeedback, totalFeedback}) => {

    return (
    <div className={css.options_div}>
    <button onClick={() => updateFeedback('good')}>Good</button>
    <button onClick={()=> updateFeedback('neutral')}>Neutral</button>
    <button onClick={()=> updateFeedback('bad')}>Bad</button>
    {totalFeedback ? <button onClick={resetFeedback}>Reset</button>: null }
    </div>
)
}
export default Options
