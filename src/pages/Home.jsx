import { Link } from "react-router-dom";

function Home() {
  const chapters = [
    {
      to: "/lo-que-siento",
      icon: "💗",
      label: "Lo que siento por ti",
      description: "Todo eso que siento por ti y que a veces no sé cómo explicar.",
    },
    {
      to: "/por-que-me-enamore",
      icon: "🩷",
      label: "Por qué me enamoré de ti",
      description: "Las pequeñas y grandes razones que hicieron que me enamorara de ti.",
    },
    {
      to: "/lo-que-sueno",
      icon: "🎀",
      label: "Lo que sueño contigo",
      description: "Todo lo que imagino, deseo y espero poder vivir a tu lado.",
    },
    {
      to: "/tu-y-yo",
      icon: "🌸",
      label: "Tú y yo",
      description: "Un pequeño espacio para nosotros, nuestros momentos y todo lo que somos.",
    },
    {
      to: "/canciones",
      icon: "🎵",
      label: "Canciones para ti",
      description: "Canciones que me hacen pensar en ti y que quiero dedicarte.",
    },
    {
      to: "/para-ti",
      icon: "💌",
      label: "Una carta para ti",
      description: "Unas palabras que escribí especialmente para ti.",
    },
  ];

  return (
    <>
      <section className="home">
        <div className="home-card">
          <div className="home-content">
            <span className="eyebrow">
              Mi muñequita hermosa
            </span>

            <h1>
              Esto <span>es para ti</span>
            </h1>

            <p>
              Hice esta página porque hay muchas cosas que siento por ti que
              a veces no sé cómo decirte, o que simplemente siento que las
              palabras se quedan cortas para explicar todo lo que significas
              para mí.
            </p>

            <p>
              Quise guardar aquí un poquito de todo eso. Lo que siento por ti,
              las razones por las que me enamoré, todo lo que quiero vivir
              contigo y también una parte de nuestra historia. No quería hacer
              solamente un detalle bonito, quería hacer algo que pudieras
              volver a ver cada vez que quieras recordar cuánto te amo.
            </p>

            <p>
              No es perfecto, seguramente hay cosas que pude haber hecho de
              otra manera, pero cada parte de esta página la hice pensando en
              ti. En nosotros, en todas esas pequeñas cosas que hemos
              compartido y en todo lo que todavía nos falta por vivir.
            </p>

            <p>
              Me gusta hacer este tipo de cosas para ti porque quiero que
              siempre tengas una forma de recordar lo mucho que te amo.
              No solamente diciéndotelo, sino intentando demostrártelo también
              con cada pequeño detalle que nace de todo lo que siento por ti.
            </p>

            <p>
              Y si algún día dudas de cuánto te amo, espero que puedas
              volver aquí y recordar que hubo alguien que se sentó a escribir
              todo esto solamente porque quería encontrar una forma de hacerte
              sentir un poquito de todo el amor que guarda por ti.
            </p>

            <p>
              Te amo de maneras que muchas veces ni yo mismo sé explicar.
              Y espero que este pequeño detalle te guste, pero sobre todo,
              espero que te haga feliz... tan feliz como tú me haces a mí
              solamente con tu presencia, tus mensajes, tus reels, nuestras
              conversaciones o simplemente con escuchar tu voz.
            </p>

            <Link to="/lo-que-siento" className="primary-button">
              Empezar a leer
            </Link>
          </div>

          <div className="home-image-container">
            <div className="image-circle"></div>

            <div className="photo-placeholder">
              <img
                src="https://i.ibb.co/tTG1LSWX/pochacco-and-pochamii-removebg-preview.png"
                alt="Pochacco y Pochamii"
                className="img-home-1"
              />
            </div>

            <div className="heart-big">
              🎀
            </div>
          </div>
        </div>

        <p className="scroll-message">
          Desliza para descubrir{" "}
          <span>todo lo que preparé para ti</span>
        </p>
      </section>

      <section className="home-preview">
        <div className="section-title">
          <span className="eyebrow">
            Un pequeño recorrido por nosotros
          </span>

          <h1>
            Todo esto lo hice pensando en ti
          </h1>

          <p>
            No quería que todo estuviera en un solo lugar. Por eso hice
            diferentes espacios, cada uno con una pequeña parte de todo lo
            que siento, recuerdo, sueño y quiero compartir contigo.
          </p>
        </div>

        <div className="preview-grid">
          {chapters.map((chapter) => (
            <Link
              to={chapter.to}
              className="preview-card"
              key={chapter.to}
            >
              <span className="preview-icon">
                {chapter.icon}
              </span>

              <span className="preview-label">
                {chapter.label}
              </span>

              <p className="preview-description">
                {chapter.description}
              </p>

              <span className="preview-arrow">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;