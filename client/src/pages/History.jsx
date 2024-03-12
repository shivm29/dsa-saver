import React from 'react'
import Template from '../components/Template'
import LoginDialogue from '../components/LoginDialogue'
const History = () => {
  return (
    <Template>
      <div className='w-full'>
        {
          true ? <LoginDialogue page_name={"History"} /> : <div>History</div>
        }
      </div>
    </Template>
  )
}

export default History