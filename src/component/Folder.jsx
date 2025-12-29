/* eslint-disable no-unused-vars */
import React, { useState } from 'react'


const Folder = ({ explorer }) => {
  const [expand, setexpand] = useState(false)

  if(explorer.isFolder){
     return (
    <div style={{ margin: 5 }}>
      <div className="folder" onClick={()=>setexpand(!expand)}>
        <span>📁{explorer.name}</span>
      </div>
      <div style={{display:expand ?"block":"none" ,paddingLeft:25 }}>
        {explorer.items.map((exp)=>{
          return(
            <Folder explorer={exp} key={exp.id}/>
          )
        })}
      </div>
    </div>
  );
  } else{
    return <span className='file'>📄{explorer.name}</span>
  }
 
}

export default Folder

// user window kye + . to open folder file
