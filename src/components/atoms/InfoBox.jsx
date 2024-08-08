import '../../styles/InfoBox.css'


function InfoBox({title,sentence}){
    return(
        <div className='infobox'>
           <h2 className='infobox_title'>{title}</h2>
           <p>{sentence}</p>
        </div>
    )
}

export {InfoBox}