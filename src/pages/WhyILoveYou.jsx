import SectionTitle from "../components/SectionTitle";

function WhyILoveYou() {
  const reasons = [
    {
      title: "Por tu forma de quererme",
      text: "Porque tienes una manera muy tuya de demostrarme lo que sientes, y eso hace que mi relación contigo se sienta especial.",
    },
    {
      title: "Por tu forma de hablarme",
      text: "Porque incluso en una conversación cualquiera hay algo en la manera en que me hablas que siempre me hace sentir cerca de ti.",
    },
    {
      title: "Por tu voz",
      text: "Porque podría escucharte hablar durante muchísimo tiempo y aun así seguiría queriendo escuchar un poco más.",
    },
    {
      title: "Por nuestras llamadas",
      text: "Porque cada llamada contigo termina convirtiéndose en uno de esos momentos que quiero repetir.",
    },
    {
      title: "Por cómo cambia mi ánimo al escucharte",
      text: "Porque muchas veces basta con escuchar tu voz para que mi día se sienta diferente.",
    },
    {
      title: "Por tu risa",
      text: "Porque escucharte reír es de esas cosas sencillas que siempre consiguen sacarme una sonrisa.",
    },
    {
      title: "Por cómo te emocionas",
      text: "Porque cuando algo te emociona y me lo cuentas, se nota muchísimo en la forma en que hablas.",
    },
    {
      title: "Por cómo me cuentas algunas cosas de tu día",
      text: "Porque no necesitas contarme absolutamente todo para que me guste escuchar las pequeñas cosas que decides compartir conmigo.",
    },
    {
      title: "Por la emoción con la que me cuentas las cosas",
      text: "Porque hasta algo cotidiano puede sentirse especial cuando me lo cuentas con esa emoción tuya.",
    },
    {
      title: "Por cuando sales y me avisas",
      text: "Porque me gusta ese pequeño detalle de saber de ti cuando sales y saber que pensaste en avisarme.",
    },
    {
      title: "Por los reels que me mandas",
      text: "Porque esos reels bonitos o románticos que me envías se sienten como pequeñas formas de decirme que pensaste en mí.",
    },
    {
      title: "Por las fotos que me mandas",
      text: "Porque aunque no sean todos los días, cada foto tuya que recibo se convierte automáticamente en una de mis favoritas.",
    },
    {
      title: "Por tus filtros graciosos",
      text: "Porque cuando me mandas una foto con algún filtro gracioso, consigues hacerme sonreír aunque sea por una cosa pequeña.",
    },
    {
      title: "Por tus mensajes inesperados",
      text: "Porque un mensaje tuyo puede aparecer en cualquier momento y hacer que mi día se sienta un poquito mejor.",
    },
    {
      title: "Por cuando me haces saber que me extrañas",
      text: "Porque saber que también sientes la falta de tenernos cerca me hace sentir que la distancia no es algo que solo yo siento.",
    },
    {
      title: "Por lo mucho que me extrañas",
      text: "Porque aunque la distancia sea difícil, saber cuánto quieres estar conmigo hace que cada día tenga más sentido.",
    },
    {
      title: "Por cómo haces que la distancia importe menos",
      text: "Porque, aunque estemos en ciudades diferentes, consigues que emocionalmente no se sienta como si estuvieras tan lejos.",
    },
    {
      title: "Por cada llamada que hemos tenido",
      text: "Porque cada una guarda una conversación, una risa o un momento que termina formando parte de nuestra historia.",
    },
    {
      title: "Por los momentos que compartimos desde lejos",
      text: "Porque hemos encontrado nuestra propia manera de compartir momentos incluso sin estar físicamente juntos.",
    },
    {
      title: "Por hacerme sentir acompañado",
      text: "Porque incluso desde otra ciudad consigues que sienta que tengo a alguien con quien compartir mi día.",
    },
    {
      title: "Por tu cariño",
      text: "Porque se siente bonito saber que existe alguien que me quiere de una manera tan especial.",
    },
    {
      title: "Por la confianza que hemos construido",
      text: "Porque lo nuestro ha ido creando una confianza que para mí tiene muchísimo valor.",
    },
    {
      title: "Por dejarme entrar en tu vida",
      text: "Porque cada cosa que decides compartir conmigo me hace sentir que poco a poco tengo un lugar más importante en tu mundo.",
    },
    {
      title: "Por presentarme a tu mamá",
      text: "Porque que me hayas presentado a tu mamá significó mucho para mí y me hizo sentir aún más importante en tu vida.",
    },
    {
      title: "Por hablar de presentarme a tu familia",
      text: "Porque saber que quieres que algún día conozca a más personas importantes para ti me hace ilusión.",
    },
    {
      title: "Por imaginarme en tu futuro",
      text: "Porque me gusta saber que cuando piensas en lo que viene, también existe un espacio para nosotros.",
    },
    {
      title: "Por hablar de cuando estemos juntos",
      text: "Porque imaginar todas las cosas que podremos hacer cuando ya no tengamos que conformarnos con la distancia me hace muchísima ilusión.",
    },
    {
      title: "Por querer que nos conozcamos más",
      text: "Porque todavía tenemos tantas cosas por descubrir el uno del otro y me encanta pensar en todo lo que nos queda por vivir.",
    },
    {
      title: "Por las ganas de vernos",
      text: "Porque saber que los dos esperamos ese momento hace que la espera tenga algo bonito.",
    },
    {
      title: "Por imaginar nuestros encuentros",
      text: "Porque pensar en el momento de poder tenerte frente a mí después de tanto tiempo hablando desde lejos es algo que me emociona muchísimo.",
    },
    {
      title: "Por hacerme ilusión el futuro",
      text: "Porque contigo puedo imaginar momentos que todavía no han pasado y aun así sentir emoción por ellos.",
    },
    {
      title: "Por cómo me haces sentir querido",
      text: "Porque tienes detalles que me hacen sentir que lo que tenemos es importante para ti.",
    },
    {
      title: "Por cómo me haces sentir especial",
      text: "Porque hay momentos en los que consigues hacerme sentir que no soy cualquier persona para ti.",
    },
    {
      title: "Por hacerme sonreír",
      text: "Porque incluso con algo tan sencillo como un mensaje o un reel puedes cambiar completamente mi expresión.",
    },
    {
      title: "Por tus detalles inesperados",
      text: "Porque algunos de tus pequeños detalles llegan justo cuando menos los espero y por eso significan todavía más.",
    },
    {
      title: "Por las cosas bonitas que me compartes",
      text: "Porque cuando me mandas algo bonito siento que quisiste compartir conmigo un pedacito de lo que te gustó.",
    },
    {
      title: "Por cuando piensas en mí",
      text: "Porque cada vez que haces algo que me demuestra que pasé por tu mente, no puedo evitar sentirme feliz.",
    },
    {
      title: "Por tu manera de demostrar interés",
      text: "Porque hay pequeños momentos en los que se nota que realmente te importa saber de mí.",
    },
    {
      title: "Por cómo me haces parte de tu día",
      text: "Porque aunque tengas tus propias cosas, encuentras momentos para hacerme sentir presente en ellas.",
    },
    {
      title: "Por compartir conmigo lo que te pasa",
      text: "Porque me gusta que me hagas parte de algunas de las cosas que ocurren en tu vida.",
    },
    {
      title: "Por tu espontaneidad",
      text: "Porque contigo muchas conversaciones y momentos aparecen de manera inesperada y terminan siendo especiales.",
    },
    {
      title: "Por tus ocurrencias",
      text: "Porque tienes formas de decir o hacer ciertas cosas que solamente podrían venir de ti.",
    },
    {
      title: "Por tu forma de expresarte",
      text: "Porque hay palabras, expresiones y maneras de hablar que ya relaciono inmediatamente contigo.",
    },
    {
      title: "Por cómo escribes cuando estás emocionada",
      text: "Porque cuando algo te emociona, puedo notarlo incluso a través de tus mensajes.",
    },
    {
      title: "Por tus emojis",
      text: "Porque hasta la manera en que usas un emoji puede terminar dándole tu toque a una conversación.",
    },
    {
      title: "Por tus stickers",
      text: "Porque algunos stickers tuyos ya tienen ese pequeño toque que hace que nuestras conversaciones se sientan más nuestras.",
    },
    {
      title: "Por tu manera de reaccionar",
      text: "Porque tus reacciones son parte de esas pequeñas cosas que hacen que hablar contigo nunca sea exactamente igual.",
    },
    {
      title: "Por tu forma de hacerme reír",
      text: "Porque tienes maneras muy tuyas de conseguir que termine riéndome incluso cuando no estaba buscando hacerlo.",
    },
    {
      title: "Por tus momentos de mal genio",
      text: "Porque incluso cuando estás de mal genio sigues siendo tú, y hasta esas partes forman parte de la persona de la que me enamoré.",
    },
    {
      title: "Por cada una de esas veces que me recuerdas lo que significo para ti",
      text: "Porque incluso en los detalles más pequeños encuentras la manera de hacerme sentir lo importante que soy para ti.",
    },
    {
      title: "Por tus pequeñas contradicciones",
      text: "Porque tienes formas de ser que quizá ni tú misma notas, pero que yo he terminado queriendo muchísimo.",
    },
    {
      title: "Por tus celos",
      text: "Porque esos pequeños celos tuyos, incluso cuando aparecen sin demasiada razón, me parecen una muestra muy tuya de cuánto te importa lo nuestro.",
    },
    {
      title: "Por saber que te importo",
      text: "Porque detrás de muchos de tus gestos puedo sentir que nuestra relación realmente significa algo para ti.",
    },
    {
      title: "Por la importancia que le das a lo nuestro",
      text: "Porque me gusta sentir que para ti esto no es simplemente algo pasajero.",
    },
    {
      title: "Por seguir aquí",
      text: "Porque a pesar de todo lo que implica estar en ciudades diferentes, seguimos eligiendo compartir nuestra vida.",
    },
    {
      title: "Por elegirnos",
      text: "Porque entre tantas personas y tantos caminos posibles, terminamos encontrándonos nosotros.",
    },
    {
      title: "Por nuestra historia",
      text: "Porque todo lo que hemos vivido hasta ahora ya forma una historia que no cambiaría por cualquier otra.",
    },
    {
      title: "Por lo que hemos construido",
      text: "Porque lo nuestro se ha ido formando poco a poco con conversaciones, llamadas, detalles y sentimientos reales.",
    },
    {
      title: "Por cada conversación",
      text: "Porque incluso una conversación sencilla contigo puede terminar siendo un recuerdo que quiero guardar.",
    },
    {
      title: "Por nuestras conversaciones largas",
      text: "Porque cuando tenemos mucho que decirnos, el tiempo parece pasar demasiado rápido.",
    },
    {
      title: "Por nuestras conversaciones tontas",
      text: "Porque no todo tiene que ser profundo para que me guste pasar tiempo hablando contigo.",
    },
    {
      title: "Por nuestras conversaciones serias",
      text: "Porque también me gusta poder hablar contigo de cosas que realmente importan.",
    },
    {
      title: "Por poder hablar de cualquier cosa",
      text: "Porque hemos creado un espacio donde podemos pasar de una tontería a una conversación importante sin que se sienta extraño.",
    },
    {
      title: "Por conocerte poco a poco",
      text: "Porque cada etapa contigo me permite descubrir una parte diferente de quién eres.",
    },
    {
      title: "Por las cosas que todavía no conozco de ti",
      text: "Porque saber que todavía hay partes de ti que descubrir hace que me den aún más ganas de seguir conociéndote.",
    },
    {
      title: "Por tu forma de vivir las emociones",
      text: "Porque cuando algo te importa, se nota en la forma en que lo sientes y lo expresas.",
    },
    {
      title: "Por ser sincera conmigo",
      text: "Porque valoro los momentos en los que me dices lo que realmente piensas o sientes.",
    },
    {
      title: "Por compartir tus sentimientos",
      text: "Porque cuando decides contarme cómo te sientes, me haces sentir que confías lo suficiente en mí para dejarme conocer esa parte de ti.",
    },
    {
      title: "Por mostrarme tu lado sensible",
      text: "Porque poder conocer esa parte de ti hace que sienta todavía más cariño por ti.",
    },
    {
      title: "Por la confianza para hablar conmigo",
      text: "Porque cada vez que eliges contarme algo personal siento que nuestra conexión se hace un poquito más fuerte.",
    },
    {
      title: "Por tu manera de demostrar preocupación",
      text: "Porque hay momentos en los que se nota que te importa saber que estoy bien.",
    },
    {
      title: "Por preguntarme cómo estoy",
      text: "Porque saber que quieres conocer cómo me siento hace que me sienta acompañado.",
    },
    {
      title: "Por escucharme",
      text: "Porque me gusta poder contarte cosas y sentir que estoy compartiendo una parte de mi vida contigo.",
    },
    {
      title: "Por dejarme contarte mis cosas",
      text: "Porque contigo puedo hablar de lo que me pasa y compartir pensamientos que quizá no compartiría con cualquiera.",
    },
    {
      title: "Por estar cuando necesito hablar",
      text: "Porque saber que puedo buscarte para conversar significa mucho para mí.",
    },
    {
      title: "Por los momentos en que me tranquilizas",
      text: "Porque hay veces en las que hablar contigo consigue que las cosas se sientan un poco más llevaderas.",
    },
    {
      title: "Por hacerme sentir comprendido",
      text: "Porque incluso cuando no tenemos exactamente la misma forma de ver algo, me importa que podamos hablarlo desde nuestro lugar.",
    },
    {
      title: "Por las cosas que aprendemos juntos",
      text: "Porque una relación también consiste en descubrir cómo entendernos mejor, y me gusta hacerlo contigo.",
    },
    {
      title: "Por todo lo que estamos aprendiendo",
      text: "Porque todavía estamos descubriendo cómo construir nuestra propia manera de querernos.",
    },
    {
      title: "Por nuestros pequeños rituales",
      text: "Porque algunas cosas que hacemos o decimos entre nosotros terminan convirtiéndose en pequeños momentos que siento solamente nuestros.",
    },
    {
      title: "Por nuestros recuerdos",
      text: "Porque cada momento que hemos compartido se va convirtiendo en una parte más de nuestra historia.",
    },
    {
      title: "Por los recuerdos que todavía nos faltan",
      text: "Porque pensar en todos los momentos que todavía no hemos vivido juntos me hace sonreír.",
    },
    {
      title: "Por la ilusión de conocerte en persona",
      text: "Porque después de tantas conversaciones y llamadas, tengo muchísimas ganas de que llegue el momento de tenerte frente a mí.",
    },
    {
      title: "Por el primer abrazo que nos debemos",
      text: "Porque hay abrazos que todavía no hemos podido darnos y uno de los que más espero es el tuyo.",
    },
    {
      title: "Por todos los lugares que quiero conocer contigo",
      text: "Porque pensar en recorrer lugares a tu lado convierte cualquier plan futuro en algo especial.",
    },
    {
      title: "Por los planes que imaginamos",
      text: "Porque hasta los planes sencillos se sienten diferentes cuando imagino hacerlos contigo.",
    },
    {
      title: "Por querer compartir momentos cotidianos",
      text: "Porque no solo quiero los grandes momentos contigo; también me ilusionan las cosas simples de todos los días.",
    },
    {
      title: "Por imaginar una vida contigo",
      text: "Porque imaginar cómo sería compartir mucho más de nuestra vida contigo es una de las cosas que más ilusión me hace.",
    },
    {
      title: "Por las ganas que tengo de acercarme a ti",
      text: "Porque cada día me hace querer que llegue el momento en que la distancia deje de ser parte de nuestra rutina.",
    },
    {
      title: "Por convertir la espera en ilusión",
      text: "Porque aunque esperar no siempre sea fácil, pensar en lo que viene hace que valga la pena esperar.",
    },
    {
      title: "Por todo lo que significas para mí",
      text: "Porque ya ocupas un lugar en mi vida que no podría explicar solamente con una lista de razones.",
    },
    {
      title: "Por cómo te has vuelto parte de mis días",
      text: "Porque ahora hay momentos de mi día en los que inevitablemente pienso en ti.",
    },
    {
      title: "Por aparecer en mis pensamientos",
      text: "Porque sin buscarlo, muchas cosas terminan haciéndome pensar en ti.",
    },
    {
      title: "Por las ganas de contarte cosas",
      text: "Porque cuando me pasa algo, muchas veces pienso en ti y me dan ganas de compartirlo contigo.",
    },
    {
      title: "Por querer compartir mis alegrías contigo",
      text: "Porque cuando algo bueno me pasa, me gusta imaginar tu reacción y pensar en contártelo.",
    },
    {
      title: "Por compartir mis días contigo",
      text: "Porque aunque cada uno esté en su ciudad, me gusta sentir que nuestros días tienen pequeños puntos de encuentro.",
    },
    {
      title: "Por hacer especial lo cotidiano",
      text: "Porque contigo incluso una conversación cualquiera puede terminar convirtiéndose en un recuerdo bonito.",
    },
    {
      title: "Por ser parte de mis pensamientos antes de dormir",
      text: "Porque muchas noches termino pensando en ti, en nosotros o en todo lo que todavía nos queda por vivir.",
    },
    {
      title: "Por hacerme imaginar el día de mañana",
      text: "Porque contigo el futuro dejó de sentirse solamente como algo lejano y empezó a tener nombres, planes y momentos que quiero vivir.",
    },
    {
      title: "Por todo lo que todavía nos espera",
      text: "Porque siento que nuestra historia todavía tiene muchísimas páginas por escribir.",
    },
    {
      title: "Por cada 'te extraño'",
      text: "Porque incluso cuando esas palabras nacen de la distancia, me recuerdan cuánto significamos el uno para el otro.",
    },
    {
      title: "Por la forma en que me haces sentir amado",
      text: "Porque no necesito que hagas algo enorme para sentir tu cariño; muchas veces basta con uno de tus pequeños detalles.",
    },
    {
      title: "Por tu lugar en mi corazón",
      text: "Porque has conseguido ocupar un lugar que no pienso medir en kilómetros ni en distancia.",
    },
    {
      title: "Por todo lo que eres",
      text: "Porque no me enamoré solamente de tus mejores momentos, sino de la persona completa que he ido conociendo.",
    },
    {
      title: "Por ser tú",
      text: "Porque al final de todas estas razones, la más importante sigue siendo la más sencilla: te quiero por ser exactamente tú.",
    },
  ];

  return (
    <section className="inner-page">
      <SectionTitle
        eyebrow="Capítulo II"
        title="Por qué me enamoré de ti"
        description="Podría intentar explicarlo con 100 razones, pero la verdad es que siempre encontraría una más."
      />

      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <article className="reason-card" key={`${index}-${reason.title}`}>
            <span className="reason-number">
              {String(index + 1).padStart(3, "0")}
            </span>

            <h2>{reason.title}</h2>
            <p>{reason.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyILoveYou;