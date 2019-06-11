import React, { Suspense } from 'react'
import { useFetch } from 'react-hooks-fetch'

const Err = ({ error }) => <span>Error:{error.message}</span>

const FetchData = () => {
  const url = 'http://sgcdc.saeon.ac.za:8081/spreadsheet'
  const { error, data } = useFetch(url)
  if (error) return <Err error={error} />
  if (!data) return null

  
  return (
    <Suspense fallback={<span>loading..</span>}>
       <span> {data.map((data) => data.title)} </span>
    </Suspense>
  )
}

export default FetchData
