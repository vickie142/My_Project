import React, { useState, useEffect } from 'react'
import "./EC2List.css"
export default function EC2List() {
  const [listOfInstances, setListOfInstances] = useState([])

  async function submitForm(e) {
    e.preventDefault()
    console.log(e)
    const response = await fetch(`http://localhost:8000/ec2`);
    const data = await response.json();
    console.log(data)
    setListOfInstances(data);
  }

  return (
    <div>
      {/* https://tailwindcss.com/docs/text-color */}
      <h1 className="text-5xl font-bold underline text-pink-800">AWS Stuffs</h1>
      <form onSubmit={(e) => submitForm(e)}>
        <button className='vpc' type="submit">Show Instances</button>
      </form>
      <table style={{ "text-align": "center", "border": "1px solid black", "border-collapse": "collapse"}}>
        <thead>
          <tr>
            <th>Instance ID</th>
            <th>Instance Type</th>
            <th>Instance Image ID</th>
            <th className='vpc'>Instance VPC ID</th>
            <th>Instance Subnet ID</th>
            <th>Instance Security Groups</th>
            <th id="keypair">Instance Key Pair Name</th>
          </tr>
        </thead>
        <tbody>
          {listOfInstances?.map((instance, index) => (
            <tr key={index}>
              <td>{instance.instance_id}</td>
              <td>{instance.instance_type}</td>
              <td>{instance.instance_image_id}</td>
              <td>{instance.instance_vpc_id}</td>
              <td>{instance.instance_subnet_id}</td>
              <td>{instance.instance_security_groups}</td>
              <td>{instance.instance_key_pair_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}