import SectionTitle from "../components/SectionTitle";

function OurStory() {

  const moments = [
    {
      date: "El comienzo",
      title: "Cuando todo empezó",
      text: "Aquí puedes contar cómo se conocieron y qué pensaste la primera vez que hablaste con ella."
    },
    {
      date: "Después",
      title: "Cuando comenzaste a gustarme",
      text: "Cuenta ese momento en el que te diste cuenta de que ella estaba empezando a convertirse en alguien especial."
    },
    {
      date: "Un día especial",
      title: "El momento que nunca olvidaré",
      text: "Aquí puedes colocar ese recuerdo que tiene un significado especial para los dos."
    },
    {
      date: "Hoy",
      title: "Estamos juntos",
      text: "Y hoy solamente puedo sentirme feliz de tenerte en mi vida."
    }
  ];

  return (
    <section className="inner-page">

      <SectionTitle
        eyebrow="Capítulo IV"
        title="Nuestra historia"
        description="Porque cada historia de amor tiene momentos que merecen ser recordados."
      />

      <div className="timeline">

        {moments.map((moment, index) => (

          <div className="timeline-item" key={moment.title}>

            <div className="timeline-dot">
              ♥
            </div>

            <div className="timeline-content">

              <span>
                {moment.date}
              </span>

              <h2>
                {moment.title}
              </h2>

              <p>
                {moment.text}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default OurStory;