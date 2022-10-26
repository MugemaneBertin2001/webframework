import React, { Component } from "react";

class Head extends Component {
    render() {
        return (
            <div className="tourism">
                <label>
                    <a href="ubukerarugendo">
                        Kanda hano
                    </a>
                    Ubone serivisi zose z'ubukerarugendo

                </label>
            </div>


        )

    }



}
class Content extends Component {

    services = {
        title: "Umuryango",
        service:
            [
                [
                    "Icyemezo cy'ubupfakazi",
                    "Icyemezo cy'uko utuye",
                    "Icyemezo cy'uwacitse ku icumu rya jenoside yakorewe abatutsi mu 1994",
                    "Icyemezo cy'uko uri ingaragu",
                ]
                ,
                [
                    "Inyandiko yo kwemera umwana wabyawe n'ababyeyi batashyingiranywe",
                    "Inyandiko y'ubwishingire",
                    "Ikemezo k'izungura",
                    "Icyemezo cy'imibanire y'abashyingiranywe"
                ]
                ,
                [
                    "Serivis z'amavuko",
                    "Serivisi z'ishyingirwa",
                    "Serivisi zihabwa uwitabye imana",
                    "Inyandiko yo kubera umubyeyi umwan utabyaye"
                ]
            ]
    }








    render = () => {

        return (
            <div className="content">
                <Head />
                <h1>
                    {this.services.title}
                </h1>
                <div className="body">
                    {
                        this.services.service.map((service) => {
                            return (
                                <div key={service}>{
                                    service.map((name) => {

                                        return (<div className="text" key={name}>{name}
                                        </div>)
                                    })






                                }</div>
                            )


                        })

                    }
                </div>
            </div>


        )



    }

}
export default Content