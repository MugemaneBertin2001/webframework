import React from "react";
class Person
{
    constructor(name,location,number)
    {   this.seperator=<br />
        this.name=name;
        this.location=location;
        this.number=number
    }
    personProfile()
    {
        const profile=
        <div>
        <h5>Name :</h5>{this.name}
        <h5>Location:</h5>{this.location}
        <h5>Number:</h5>{this.number}
        <hr />
        </div>
        return profile
    }
        
}
export default Person