 
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact" 

import data from './FetchData'
import React, { Suspense } from 'react'
import { useFetch } from 'react-hooks-fetch'

// check for error and display error message
const Err = ({ error }) => <span>Error:{error.message}</span>

// instantiate fetch hook to get data from server
export default function DynamicFooter ()  {
  const url = 'http://sgcdc.saeon.ac.za:8081/spreadsheet'
  const { error, data } = useFetch(url)
  if (error) return <Err error={error} />
  if (!data) return null
  console.log(data)




// footer component populated with fetched data
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol sm="2">
            <h5 className="title">{data.map((data, uuid) => [uuid === 0 ? data.title:''])}</h5>
            <p>
            {data.map((data, uuid) => [uuid === 0 ? data.shortdescription:''])}
            </p>
          </MDBCol>
          <MDBCol sm="2">
            <h5 className="title">{data.map((data, uuid) => [uuid === 1 ? data.title:''])}</h5>
            <p>
            {data.map((data, uuid) => [uuid === 1 ? data.shortdescription:''])}
            </p>
          </MDBCol>
          <MDBCol sm="2">
            <h5 className="title">{data.map((data, uuid) => [uuid === 2 ? data.title:''])}</h5>
            <p>
            {data.map((data, uuid) => [uuid === 2 ? data.shortdescription:''])}
            </p>
          </MDBCol>
          <MDBCol sm="3">
            <h5 className="title">{data.map((data, uuid) => [uuid === 3 ? data.title:''])}</h5>
            <p>
            {data.map((data, uuid) => [uuid === 3 ? data.shortdescription:''])}
            </p>
          </MDBCol>
          <MDBCol sm="3">
            <h5 className="title">{data.map((data, uuid) => [uuid === 4 ? data.title:''])}</h5>
            <p>
            {data.map((data, uuid) => [uuid === 4 ? data.shortdescription:''])}
            </p>
          </MDBCol>
       
   
          {/* <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy;  {new Date().getFullYear()} Copyright: SAEON
        </MDBContainer>
      </div>
    </MDBFooter>
  ) 
}

