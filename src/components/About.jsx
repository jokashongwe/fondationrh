import React, { useContext } from "react";

// import room context
import { RoomContext } from "../context/RoomContext";

// import room
import Room from "../components/Room";

// import react loader
import { SpinnerDotted } from "spinners-react";

const services = [
    {
        id: 1,
        name: "Accompagnement des jeunes",
        description: "Présentation des programmes d'accompagnement destinés aux jeunes pour les aider dans leur parcours éducatif, professionnel et personnel.",
    },
    {
        id: 2,
        name: "Formations",
        description: " Sections dédiées à la santé, à l'éducation, à l'entrepreneuriat, à la formation, au mentorat et au coaching pour mettre en lumière les actions et les projets menés dans ces domaines.",
    },
    {
        id: 3,
        name: "Consultance en réformes publiques",
        description: "Expertise et conseils offerts aux institutions publiques pour mettre en place des réformes efficaces et bénéfiques pour la société",
    },
    {
        id: 4,
        name: "Sensibilisation",
        description: "Campagnes de sensibilisation menées par la Fondation dans divers domaines tels que la santé, l'éducation, l'entrepreneuriat et l'insertion professionnelle",
    },
    {
        id: 6,
        name: "Lutte contre la corruption et les anti-valeurs",
        description: "Engagement de la Fondation dans la lutte contre la corruption et les pratiques anti-éthiques. Description des actions menées pour sensibiliser, prévenir et combattre ces fléaux, en partenariat avec les acteurs du secteur public et privé. Présentation des outils et des initiatives développés pour promouvoir la transparence, l'intégrité et la bonne gouvernance.",
    },
    ,
    {
        id: 2,
        name: "PME",
        description: "Services proposés aux petites et moyennes entreprises pour les aider à se développer, à innover et à prospérer.",
    },
]

const About = () => {
    const { rooms, loading } = useContext(RoomContext);

    return (
        <section className="rooms">

            {loading && (
                <div className="fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black/90">
                    <SpinnerDotted color="white" />
                </div>
            )}

            <div className="container mx-auto py-0">
                <div className="flex h-full flex-col py-24 lg:flex-row">
                    <div className="h-full w-full px-6 lg:w-[40%]">
                        <h1 className="text-2xl text-yellow-500 w-44" >Notre vision et mission</h1>
                        <div className="bg-yellow-500 h-1.5 mt-3 w-[9.5rem]" ></div>
                    </div>
                    <div className="h-full w-full px-6 lg:w-[60%]">
                        <p className="text-justify" >
                            La mission de la Fondation Richesse Humaine est d'encourager l'épanouissement personnel et professionnel des
                            individus en mettant en place des programmes et des initiatives qui favorisent la croissance,
                            l'innovation et la solidarité. Nous croyons en l'importance de l'éducation, de la santé et de
                            l'entrepreneuriat comme leviers essentiels pour le développement individuel et collectif.
                        </p>
                        <br />
                        <p className="text-justify" >
                            La Fondation Richesse Humaine est une organisation à but non lucratif qui s'engage à accompagner et
                            soutenir les individus, en particulier les jeunes, dans divers domaines tels que l'éducation,
                            la santé, l'entrepreneuriat, la formation, la mentorat, le coaching,
                            l'orientation professionnelle et l'insertion professionnelle.
                            Nous œuvrons également en faveur des PME et proposons des services de consultance
                            en réformes publiques pour promouvoir le développement socio-économique et
                            le bien-être de la société.

                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-3 py-20 bg-yellow-500">
                <div className="container mx-auto w-full text-white grid grid-cols-1 md:gap-y-12 md:grid-cols-3">
                    {services && services.map(service => (
                        <div className="w-[90%]" key={service.id} >
                            <h1 className="font-secondary font-bold text-[16px] text-black text-lg" >{service.name}</h1>
                            <p style={{ fontWeight: 500 }} className="text-[14px] text-gray-900" >{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;