import { useEffect , useState } from "react";
import axios from "axios";

import React from 'react'

function DataFetching() {
    const [ post , posts] = useState([])
    const one =  {
        consumer_key:'ck_e854f39d2a1dcb53f510853ae9eab32956b9e01b',
        consumer_secret:'cs_4de5eee7d22326fc91f73fdbfc3909b33613fa9a',
        shopLink : 'https://fluorite.artec-creativity.com',
        products : 'products',
        orders : 'orders'
    }
    useEffect(() => {
        axios.get(`${one.shopLink}/wp-json/wc/v3/${one.products}?per_page=100&consumer_key=${one.consumer_key}&consumer_secret=${one.consumer_secret}`).then(
            (res) => {
                console.log(res.data)
                posts(res.data)
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }, [])
    
  return (
    <div>
      ksdfsdf
    </div>
  )
}

export default DataFetching
