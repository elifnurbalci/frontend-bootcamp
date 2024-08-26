import './intro.css'

function Intro({ setIsActive }) {
  return (
    <div className="intro">
        <h1>British Citizenship Test</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet autem similique perspiciatis harum doloremque aspernatur accusantium temporibus incidunt. A veniam nulla, natus quaerat sequi culpa vel aliquam officiis accusamus.</p>
        <button onClick={() => setIsActive(false)}>Start!</button>
    </div>
  )
}
export default Intro