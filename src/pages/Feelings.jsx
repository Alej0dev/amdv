import SectionTitle from "../components/SectionTitle";

function Feelings() {
  return (
    <section className="inner-page">
      <SectionTitle
        eyebrow="Capítulo I"
        title="Lo que siento por ti"
        description="Hay cosas que siento por ti que a veces no sé como explicar, pero que espero poder hacerte sentir con cada palabra."
      />

      <div className="feelings-grid">
        <article className="love-card large">
          <div className="card-icon">♥</div>
          
          <h2>Me haces feliz</h2>
          
          <p>
            Creo que esta es una de las cosas que mas me cuesta explicar, porque
            no se trata de una sola cosa que hagas. Me haces feliz por todo lo que
            provocas en mi con cosas que muchas veces parecen pequeñas. Una llamada
            contigo puede cambiar completamente como me siento, escuchar tu voz
            después de un día pesado puede hacer que todo se sienta un poquito mejor
            y hasta un mensaje tuyo que llega de la nada puede sacarme una sonrisa.
          </p>
          
          <p>
            Me haces feliz cuando me cuentas algo que te pasó y puedo notar toda la
            emoción con la que me lo estás contando, cuando me mandas uno de esos
            reels bonitos que sabes que voy a guardar, cuando recibo una foto tuya
            inesperadamente o cuando simplemente apareces para hablar conmigo.
          </p>
          
          <p>
            Y creo que lo bonito es que no necesito que pase algo extraordinario para
            sentirlo. Me haces feliz en lo simple, en nuestras conversaciones, en
            nuestras llamadas, en las cosas que nos contamos y hasta en esos momentos
            en los que no estamos hablando de nada importante.
          </p>
          
          <p>
            Me haces feliz porque ahora hay una persona en mi vida cuya voz quiero
            escuchar, cuyas historias quiero conocer y a quien quiero contarle muchas
            de las cosas que me pasan. Y esa persona eres tú.
          </p>
          
          <p>
            Tal vez no siempre sepa como explicarte todo lo que siento, pero si hay
            algo de lo que estoy completamente seguro es de que desde que llegaste a
            mi vida hay muchos momentos que se sienten mejor simplemente porque estás
            tú en ellos.
          </p>
        </article>

        <article className="love-card">
          <div className="card-icon">♡</div>

          <h2>Me importas de verdad</h2>

          <p>
            Me importa como estás, que te pasa, que cosas te emocionan y
            también esas pequeñas cosas que decides compartir conmigo.
            Me gusta saber de ti, escuchar lo que tengas para contarme y
            sentir que poco a poco voy conociendo mas de tu vida, de tus
            días y de esa persona que eres.
          </p>
        </article>

        <article className="love-card">
          <div className="card-icon">✦</div>

          <h2>Te quiero cerca de mi</h2>

          <p>
            Y no hablo solamente de estar cerca físicamente. Te quiero
            presente en mis días, en mis conversaciones, en mis planes y
            en todas esas pequeñas cosas que me gusta compartir contigo.
            Quiero seguir teniendo razones para contarte lo que me pasa
            y también seguir escuchando todo eso que tú quieras contarme.
          </p>
        </article>

        <article className="love-card wide">
          <div className="quote">
            “No se exactamente en que momento dejaste de ser simplemente
            alguien que me gustaba y te convertiste en alguien que ya no
            imagino fuera de mi vida.”
          </div>
        </article>
      </div>
    </section>
  );
}

export default Feelings;