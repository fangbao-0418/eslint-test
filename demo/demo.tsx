/*
 * @Date: 2020-04-03 18:13:02
 * @LastEditors: fangbao
 * @LastEditTime: 2020-04-09 10:47:12
 * @FilePath: /xt-crm/Users/fangbao/Documents/xituan/eslint-test/demo/demo.tsx
 */

import React, { useEffect } from 'react'

// a
/** object */
const o = {
  a: 2,
  c: 2,
  b: 2
}

/** array */
const arr = [1, 2, 3]

/** function */
function a () {
  const b = 2
  if (b === 1) {
    console.log(b)
  } else if (b === 3) {
    console.log(b)
  }
  return 2
}

function reducer (state: any, action: any) {
  if (state) {
    action.type = 'USER INFO'
  }
  const type = action.type
  let s1,
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

const dataSource = [{ a: 2 }, { a: 3 }]

const Hello2 = () => (
  <div>
    <div> 222         </div>      {'     '} 22 <div >   </div>
  </div>
)

const Hello = (
  <div>
    <Hello2 />
    <div> 222    </div>  {'     '} 22 <div ></div>
  </div>
)

interface IProps {
  a: Array<{ a: string }>
}

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
