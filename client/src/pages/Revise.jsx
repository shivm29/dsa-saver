import React from 'react'
import Template from '../components/Template'
import LoginDialogue from '../components/LoginDialogue'

const Revise = () => {
  return (
    <Template>
      <div className='w-full'>
        {
          true ? <LoginDialogue page_name={"Revisions"} /> : <div>History</div>
        }
      </div>
    </Template>
  )
}

export default Revise