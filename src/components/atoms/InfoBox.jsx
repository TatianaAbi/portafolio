import '../../styles/InfoBox.css'

function InfoBox({ title, sentence }) {
  return (
    <div className='info-box'>
      <h2 className='info-box_title'>{title}</h2>
      <p>{sentence}</p>
    </div>
  )
}

export { InfoBox }
