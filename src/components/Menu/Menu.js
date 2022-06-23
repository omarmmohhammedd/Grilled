import React from 'react'
import {MenuList} from "../FilesList/MenuList"
import './Menu.css'

const Menu = () => {
  return (
      <div className='Menu'>
          <div className='MenuTitle'>Menu</div>
          <div id="MenuList">
              {
                  MenuList.map((item,key) => {
                      return(
                      <div id="item" className='col-lg-4'>
                          <div className='img-con' >
                          <img id="item_img" src={item.image} alt="product"/>
                          </div>
                          <div id="item_title">
                              {item.name}
                          </div>
                          <div id="item_price">
                              {item.price}
                          </div>
                      </div>)
                  })
              }
          </div>
    </div>
  )
}

export default Menu