import React, { Component } from "react"
import Content from "./content"
import '../iremboStyle/irembo.css'

// top ad
class TopAd extends Component {

    render() {
        return (
            <div className="top">

                <label>
                    <b>
                        Igishya!
                    </b>
                    Umwaka wa mituweli 2022/2023 watangiye. Ishyurira umuryango wawe <a href="hano">hano</a>
                </label>

            </div>
        )
    }
}
// navigation part
class NavigationPart extends Component {
    render() {
        return (
            <div className="bluePart">
                <TopNav />
                <Welcome />
            </div>
        )

    }
}


// navigation links
class TopNav extends Component {
    link = [
        {
            name: "IremboGov",
            link: "home"
        }
        ,
        {
            name: "Ahatangirwa Ubufasha",
            link: "ubufasha"
        }
        ,
        {
            name: "Iyandikishe",
            link: "kwandika"
        }
        ,
        {
            name: "Kwinjira",
            link: "kwinjira"
        }
        ,
        {
            name: "Shaka dosiye",
            link: "dosiye"
        },
        {
            name: "Kinyarwanda",
            link: "indimi"
        }

    ]
    render() {
        return (

            <div className="links">
                {
                    this.link.map((link) => {
                        return (<div><label><a className={link.link} href={link.link}>{link.name}</a></label></div>)
                    })
                }
            </div>

        )

    }
}
// welcome part
class Welcome extends Component {
    render() {
        return (
            <div className="welcome">
                <h1>Murakaza neza </h1>

                <input autoFocus placeholder="Gushaka serivisi" type="text" />

            </div>


        )
    }
}

// grand app
class Irembo extends Component {


    render() {

        return (
            <>
                <TopAd />
                <NavigationPart />
                <Content />
            </>
        )


    }
}
export default Irembo

