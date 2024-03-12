import React from 'react'
import Template from '../components/Template'
import LoginDialogue from '../components/LoginDialogue'
const Tags = () => {

  return (
    <Template>
      <div className='w-full' >
        {true ? <LoginDialogue page_name={"Tags"} /> : <div>Hey</div>}
      </div>
    </Template>
  )
}

export default Tags