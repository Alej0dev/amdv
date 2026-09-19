import SectionTitle from "../components/SectionTitle";

function Dreams() {
  const dreams = [
    {
      icon: "🤍",
      title: "Por fin estar contigo",
      text: "Llegará el momento en que la distancia deje de ser parte de nuestra historia y podamos simplemente disfrutar de tenernos cerca.",
    },
    {
      icon: "🏡",
      title: "Construir un lugar nuestro",
      text: "Vamos a tener un espacio que podamos sentir como nuestro, lleno de nuestras cosas, nuestras costumbres y todos esos pequeños detalles que iremos dejando en él.",
    },
    {
      icon: "☀️",
      title: "Compartir nuestros días",
      text: "Voy a poder vivir contigo algo que ahora extraño mucho: compartir un día normal, desde despertar juntos hasta terminar el día hablando de cualquier cosa.",
    },
    {
      icon: "✈️",
      title: "Viajar juntos",
      text: "Vamos a conocer lugares nuevos, descubrir sitios que no conocemos y crear recuerdos que después nos dé risa recordar.",
    },
    {
      icon: "📸",
      title: "Llenarnos de recuerdos",
      text: "Vamos a tener fotografías, anécdotas, lugares favoritos y tantas historias juntos que algún día podremos mirar atrás y recordar todo lo que hemos vivido.",
    },
    {
      icon: "☕",
      title: "Disfrutar lo cotidiano",
      text: "No quiero solamente los grandes momentos. También quiero esas tardes sin ningún plan, salir por algo de comer, ver algo juntos o simplemente estar el uno al lado del otro.",
    },
    {
      icon: "🌅",
      title: "Ver crecer nuestra historia",
      text: "Quiero llegar a mirar todo lo que hemos construido y reconocer en cada etapa a las dos personas que decidieron seguir avanzando juntas.",
    },
    {
      icon: "🎀",
      title: "Hacer realidad nuestros planes",
      text: "Muchas de las cosas que hoy hablamos como ideas algún día van a convertirse en momentos que podamos vivir de verdad.",
    },
    {
      icon: "🥰",
      title: "Conocernos todavía más",
      text: "Aunque siento que ya conozco muchísimo de ti, todavía nos quedan muchas versiones del otro por descubrir cuando podamos compartir más de nuestra vida.",
    },
    {
      icon: "❤️",
      title: "Seguir eligiéndonos",
      text: "Quiero que, con el paso del tiempo y en cada etapa diferente de nuestras vidas, sigamos encontrando razones para elegirnos.",
    },
  ];

  return (
    <section className="inner-page dreams-page">
      <SectionTitle
        eyebrow="Capítulo III"
        title="Todo lo que nos espera"
        description="Hay muchas cosas que todavía no hemos vivido, pero me gusta pensar en todo lo que vamos a construir y disfrutar juntos."
      />

      <div className="dreams-grid">
        {dreams.map((dream) => (
          <article className="dream-card" key={dream.title}>
            <div className="dream-icon">{dream.icon}</div>

            <h2>{dream.title}</h2>

            <p>{dream.text}</p>
          </article>
        ))}
      </div>

      <div className="future-message">
        <span>🎀</span>

        <p>
          “Todavía nos faltan muchísimas cosas por vivir.
          Lugares por conocer, recuerdos por crear,
          días normales que algún día serán nuestros
          y momentos que todavía ni siquiera imaginamos.
          Y me hace feliz saber que todo eso nos espera.”
        </p>
      </div>
    </section>
  );
}

export default Dreams;