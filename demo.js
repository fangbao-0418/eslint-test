/*
 * @Date: 2020-04-03 18:13:02
 * @LastEditors: fangbao
 * @LastEditTime: 2020-04-07 15:04:17
 * @FilePath: /eslint-test/demo.js
 */

import React, { useEffect } from 'react'

// a
/** object */
var o = {
  a: 2,
  c: 2,
  b: 2
}

/** array */
var arr = [1, 2, 3]

/** function */
function a () {
  var b = 2
  if (b === 1) {
    console.log(b)
  } else if (b === 3) {
    console.log(b)
  }
  return 2
}

function reducer (state, action) {
  if (state) {
    action.type = 'USER INFO'
  }
  var type = action.type
  var s1,
      s2,
      s3
  switch (action.type) {
    case 'USER INFO':
      break
    default:
      break
  }
}

reducer({}, { type: 'USER INFO' })

var dataSource = [{ a: 2 }, { a: 3 }]

var Hello2 = (
  <div>
    <div> 222         </div>      {'     '} 22 <div >   </div>
  </div>
)

var hello = (
  <div>
    <Hello2 a={2} />
    <div> 222    </div>  {'     '} 22 <div ></div>
  </div>
)

function render () {
  return (
    <html lang='en' >
      <div
        style={{ margin: 2 }}
        className='222' >
        {
          dataSource.map((item, index) => {
            return (
              <div key={index} aria-labelledby='address_label' className='sb' ></div>
            )
          })
        }
      </div>
    </html>
  )
}
