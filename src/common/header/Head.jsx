import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> 9730971045</label>
            <i className='fa fa-envelope'></i>
            <label> shreyashbansode1@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <select className='select_option'>
              <option >EN</option>
              <option >mar</option>
            </select>
            
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
