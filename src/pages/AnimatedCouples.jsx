import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const couples = [
  {
    id: 1,
    characters: "Pucca & Garu",
    subtitle: "Un amor que nunca se rinde",
    emoji: "❤️",
    image: "/characters/pucca-garu.jpg",
    reason:
      "Hay algo en Pucca y Garu que me hace pensar en esa clase de amor que no sabe sentirse a medias. Pucca quiere con una intensidad que no intenta esconder y Garu, aunque muchas veces parezca no saber qué hacer con tanto cariño, termina formando parte de su mundo. Cuando pienso en ellos y después pienso en ti, no me imagino copiando su historia; me imagino tomando esa manera tan valiente de querer y convirtiéndola en algo nuestro.\n\nPorque contigo no quiero aprender a querer poquito. No quiero guardar un “te extraño” por miedo a sonar demasiado sentimental, ni pensar dos veces antes de decirte que eres preciosa, que me haces falta o que me encanta tenerte en mi vida. Quiero poder mirarte y que mi primera reacción sea acercarme. Quiero que sepas que cuando me nace abrazarte, decirte algo bonito o recordarte cuánto te amo, no voy a sentir que es demasiado.",
    promise:
      "Si fueras tú quien estuviera frente a mí, yo también encontraría mil maneras de acercarme. Te buscaría cuando te extrañe, te cuidaría cuando pueda, te haría reír cuando lo necesites y te recordaría que eres importante para mí.",
  },

  {
    id: 2,
    characters: "Kitty & Daniel",
    subtitle: "La ternura de encontrarnos",
    emoji: "🎀",
    image: "/characters/kitty-daniel.jpg",
    reason:
      "Kitty y Daniel me hacen pensar en un amor que no necesita hacer ruido para sentirse enorme. Hay relaciones que parecen vivir de grandes escenas y otras que encuentran su magia en una mirada, una conversación, una sonrisa o en la tranquilidad de saber que la otra persona está ahí. Cuando pienso en ustedes dos y luego pienso en ti, lo primero que quiero imaginar es precisamente eso: nosotros encontrando felicidad en todas esas pequeñas cosas que quizá nadie más notaría.\n\nPorque contigo he aprendido que un momento no necesita ser extraordinario para convertirse en un recuerdo importante. Puede ser una conversación que empezó sin ninguna intención y terminó durando horas. Puede ser un mensaje que llegó justo cuando lo necesitaba. Puede ser una fotografía que tomamos sin pensar demasiado. Puede ser una canción que después ya no podamos escuchar sin acordarnos del otro.",
    promise:
      "Yo quiero construir contigo un amor que también viva en lo cotidiano. Quiero tus buenos días, tus buenas noches, tus historias, tus risas, tus silencios y hasta esas pequeñas cosas que ahora parecen insignificantes.",
  },

  {
    id: 3,
    characters: "Peter Parker & Mary Jane",
    subtitle: "Elegirte incluso cuando sea difícil",
    emoji: "🕷️",
    image: "/characters/peter-mj.jpg",
    reason:
      "Peter Parker y Mary Jane no representan para mí un amor perfecto; representan un amor que tiene que aprender constantemente a encontrar un lugar entre las dificultades. Y quizá por eso me gustan tanto para esta dedicatoria. Porque cuando pienso en nosotros no quiero imaginar únicamente los días en los que todo sale bien. Quiero imaginar también qué clase de hombre quiero ser cuando la vida nos ponga una conversación difícil delante.\n\nYo quiero ser alguien que no desaparezca cuando las cosas se complican. Alguien que pueda reconocer un error sin convertirlo en orgullo. Alguien que pueda escucharte incluso cuando lo que tengas que decir no sea exactamente lo que yo quería escuchar.",
    promise:
      "Si fueras tú, quiero que cuando llegue un problema mi primera pregunta sea “¿cómo podemos arreglarlo?” y no “¿cómo me voy?”. Quiero cuidarte sin quitarte libertad, acompañarte sin intentar cambiarte y quererte sin convertir nuestro amor en una competencia. Si algún día la vida nos pone a prueba, quiero recordar que del otro lado estás tú.",
  },

  {
    id: 4,
    characters: "Vegeta & Bulma",
    subtitle: "Amarnos sin dejar de ser nosotros",
    emoji: "💙",
    image: "/characters/vegeta-bulma.jpg",
    reason:
      "Vegeta y Bulma son probablemente una de las parejas que más me hacen pensar en lo curioso que puede ser el amor. Si uno los mira por separado, parecen pertenecer a mundos completamente distintos. Ella tiene una personalidad fuerte, sabe lo que quiere y no parece tener miedo de decirlo. Él es orgulloso, competitivo, intenso y muchas veces parece decidido a resolver el universo entero antes que admitir que necesita cariño. Y, sin embargo, encontraron una manera de elegirse.\n\nEso me gusta porque yo no quiero que tú y yo tengamos que ser idénticos para funcionar. No quiero enamorarme de una versión de ti que se parezca a mí. Quiero enamorarme precisamente de esas cosas que te hacen ser tú.",
    promise:
      "No quiero cambiarte para que encajes en mi vida. Quiero construir una vida donde haya espacio para los dos. Quiero conocer tus diferencias, respetarlas, disfrutarlas y aprender de ellas. Y si dentro de muchos años sigues sorprendiéndome con una parte de ti que todavía no conocía, espero seguir teniendo la misma emoción de descubrirla.",
  },

  {
    id: 5,
    characters: "Rapunzel & Eugene",
    subtitle: "Descubrir el mundo tomados de la mano",
    emoji: "🌸",
    image: "/characters/rapunzel-eugene.jpg",
    reason:
      "Rapunzel y Eugene me recuerdan a ese tipo de encuentro que hace que el mundo parezca más grande. Rapunzel quería conocer aquello que estaba más allá de lo que podía ver, mientras Eugene vivía acostumbrado a seguir su propio camino. Cuando se encuentran, ninguno sabe realmente cuánto va a cambiar su vida.\n\nCuando pienso en ti, siento algo parecido. No porque tú hayas llegado para completar una parte vacía de mí, sino porque desde que te conozco hay cosas que quiero vivir de una manera distinta. Quiero compartirlas. Quiero mirar un lugar bonito y pensar en cómo sería verlo contigo. Quiero conocer lugares nuevos y que muchos de ellos terminen teniendo una historia nuestra.",
    promise:
      "Si fueras tú, quiero que mi mano sea una de las que puedas tomar cuando quieras descubrir algo nuevo. Quiero acompañarte sin detenerte, apoyarte sin limitarte y celebrar cada lugar al que llegues.",
  },

  {
    id: 6,
    characters: "Tiana & Naveen",
    subtitle: "Amarte mientras construimos nuestros caminos",
    emoji: "🐸",
    image: "/characters/tiana-naveen.jpg",
    reason:
      "Tiana y Naveen representan para mí algo que considero fundamental cuando pienso en una relación: amar a alguien no debería significar pedirle que abandone la persona que quiere llegar a ser. Tiana tiene metas enormes y una forma muy suya de luchar por ellas. Naveen llega desde un lugar completamente diferente y, poco a poco, ambos descubren que una relación también puede ser un lugar donde dos personas crecen sin dejar de ser ellas mismas.\n\nEso es lo que quiero para nosotros.\n\nQuiero saber qué quieres hacer con tu vida, qué lugares quieres conocer, qué cosas quieres conseguir y cuáles son esas metas que todavía están empezando a tomar forma. Quiero poder estar ahí mientras las vas consiguiendo y celebrar contigo cada una.",
    promise:
      "Nunca quiero que tengas que escoger entre lo que quieres para tu vida y nuestro amor. Quiero caminar contigo mientras construyes todo eso. Quiero ser ese hombre que te dice “inténtalo” cuando tengas miedo y “estoy orgulloso de ti” cuando lo consigas.",
  },

  {
    id: 7,
    characters: "Mickey & Minnie",
    subtitle: "Elegirnos a través de los años",
    emoji: "🎀",
    image: "/characters/mickey-minnie.jfif",
    reason:
      "Mickey y Minnie tienen algo que pocas parejas pueden transmitir: la sensación de que el amor puede convertirse en una historia que atraviesa muchísimas etapas. No me interesa pensar únicamente en la versión joven y emocionante del amor. Cuando los veo, me gusta imaginar todas esas versiones que una pareja puede conocer con el tiempo: la de los primeros grandes planes, la de los años de cambios, la de los momentos difíciles, la de los sueños cumplidos y algún día la de mirar hacia atrás y reconocer todo lo que construyeron.\n\nCuando pienso en ti, me gusta imaginar el futuro de esa manera.\n\nNo solamente quiero conocerte como eres hoy. Quiero conocer quién vas a ser dentro de cinco, diez, veinte o treinta años.",
    promise:
      "Quiero conocerte en todas tus etapas, en todos tus cambios y en todos tus nuevos comienzos. Si algún día somos dos personas mayores mirando fotografías antiguas, quiero que entre ellas existan muchas donde todavía estemos sonriendo juntos. No quiero solamente vivir una etapa contigo; quiero descubrir cuántas etapas podemos convertir en recuerdos.",
  },

  {
    id: 8,
    characters: "Hércules & Megara",
    subtitle: "Encontrar a alguien que vea quién eres de verdad",
    emoji: "💜",
    image: "/characters/hercules-megara.jpg",
    reason:
      "Hércules y Megara me gustan porque detrás de su historia hay algo que me parece muy bonito: no se trata solamente de encontrar a alguien que te quiera cuando todo va bien, sino de encontrar a alguien que consiga ver quién eres incluso cuando tú mismo estás lleno de dudas. Hércules pasa gran parte de su historia intentando descubrir quién es y dónde pertenece, mientras Megara carga con sus propias experiencias y aun así termina siendo alguien capaz de mirar más allá de lo que parece.\n\nY cuando pienso en ti, me gusta imaginar que nosotros también podemos ser ese lugar donde no tengamos que fingir ser alguien diferente. No quiero que tengas que demostrarme nada para sentir que mereces mi cariño. Quiero conocerte tal como eres y que tú también puedas conocerme de esa manera.\n\nQuiero que cuando estés conmigo no tengas que esconder las partes de ti que consideras menos bonitas.",
    promise:
      "Quiero verte por completo y seguir eligiéndote. Quiero que puedas mostrarme tus dudas, tus inseguridades, tus días buenos y tus días no tan buenos, y que nunca tengas que preguntarte si eso cambia lo que siento por ti.",
  },

  {
    id: 9,
    characters: "Manolo & María",
    subtitle: "Elegirnos siendo nosotros mismos",
    emoji: "🎸",
    image: "/characters/manolo-maria.jpg",
    reason:
      "Manolo y María me hacen pensar en un amor que no se trata de convertir a la otra persona en lo que uno quiere, sino de conocerla de verdad y quererla por quien es. María tiene sus propias ideas, sus propios sueños y una forma muy fuerte de decidir qué quiere para su vida, mientras Manolo aprende que amar también significa respetar eso y estar dispuesto a luchar por la persona que quiere sin intentar cambiarla.\n\nY eso me hace pensar mucho en ti.\n\nYo no quiero enamorarme solamente de las cosas bonitas que ya conozco de ti. Quiero seguir descubriendo todo lo que te hace ser tú, incluso esas partes que todavía no conozco. Quiero saber qué quieres para tu vida, qué cosas te emocionan, qué cosas te dan miedo y qué cosas hacen que tus ojos se iluminen cuando empiezas a hablar de ellas.\n\nPorque para mí quererte también significa dejarte ser tú.",
    promise:
      "Quiero que puedas crecer, cambiar, descubrir cosas nuevas y seguir siendo tú sin sentir que tienes que convertirte en otra persona para que yo te quiera. Y mientras tú sigues construyendo tu camino, quiero estar ahí para caminar a tu lado.", 
  },

  {
    id: 10,
    characters: "Aladdin & Jasmine",
    subtitle: "Vivir aventuras contigo",
    emoji: "✨",
    image: "/characters/aladdin-jasmine.jpg",
    reason:
      "Aladdin y Jasmine me hacen pensar en la emoción de descubrir a alguien que consigue que el mundo se sienta distinto. No solamente porque hay aventura en su historia, sino porque cuando están juntos existe esa sensación de libertad: de salir de lo conocido, mirar algo desde otra perspectiva y atreverse a imaginar una vida diferente.\n\nEso es algo que quiero contigo.\n\nQuiero que nuestra historia tenga momentos que nos hagan sentir vivos. Quiero planes espontáneos, viajes, lugares nuevos y noches en las que terminemos diciendo “no sé cómo terminamos haciendo esto”. Quiero tener recuerdos que no parezcan sacados de una agenda, sino de esas decisiones que años después terminan siendo nuestras historias favoritas.\n\nQuiero conocer el mundo contigo, pero también quiero conocer tu mundo.\n\nQuiero saber cuáles son los lugares donde te sientes feliz.",
    promise:
      "Quiero vivir contigo una historia que tenga fotografías, viajes, risas, errores, improvisaciones y muchísimos “¿te acuerdas?”. Quiero que seas mi compañera de aventuras, pero también quiero respetar siempre tu libertad.",
  },

  {
    id: 11,
    characters: "Bella & Bestia",
    subtitle: "Enamorarme de todo lo que hay detrás de ti",
    emoji: "🌹",
    image: "/characters/bella-bestia.jfif",
    reason:
      "Bella y Bestia me recuerdan que conocer realmente a alguien requiere tiempo. No basta con mirar una apariencia, una primera impresión o aquello que una persona decide mostrarle al mundo. Hay un universo entero detrás de cada ser humano: recuerdos, inseguridades, sueños, manías, ilusiones y pequeñas cosas que solamente aparecen cuando existe confianza.\n\nY eso es lo que quiero contigo.\n\nQuiero conocerte más allá de lo evidente. Quiero saber qué cosas te hacen sentir segura, cuáles te ponen nerviosa, qué cosas te emocionan y cuáles todavía no te atreves a contar. Quiero conocer las historias que hay detrás de tus gustos y descubrir esas partes tuyas que solamente aparecen con el tiempo.",
    promise:
      "Quiero pasar mucho tiempo conociéndote. No solamente lo que todos ven, sino también aquello que guardas para las personas en las que confías. Y cuando descubra una nueva parte de ti, quiero recibirla con la misma ilusión con la que recibí todas las anteriores. Porque nunca quiero sentir que ya terminé de conocerte.",
  },

  {
    id: 12,
    characters: "Hipo & Astrid",
    subtitle: "Ser pareja, equipo y mejores amigos",
    emoji: "🐉",
    image: "/characters/hipo-astrid.jpg",
    reason:
      "Hipo y Astrid me gustan porque su relación no se siente construida únicamente alrededor del romance. Son compañeros. Confían el uno en el otro. Se desafían, se apoyan y tienen esa clase de conexión donde sabes que la persona que tienes al lado no solamente quiere estar contigo, sino que también quiere verte crecer.\n\nEso es exactamente lo que quiero contigo.\n\nQuiero ser tu pareja, pero también quiero ser tu amigo. Quiero que puedas escribirme para contarme algo importantísimo y también para decirme una tontería que te acaba de pasar. Quiero conocer tus historias serias y tus chismes. Quiero escuchar tus planes y tus ocurrencias. Quiero que haya espacio para la pasión, pero también para la confianza de dos personas que pueden hablar de cualquier cosa.\n\nQuiero que podamos reírnos juntos hasta perder el sentido de la conversación.\n\nQuiero que tengamos nuestras propias bromas.",
    promise:
      "Quiero ser tu pareja, pero también quiero ser una de tus personas favoritas para contar cosas. Quiero que puedas confiar en mí, reírte conmigo, hablar conmigo y saber que estoy de tu lado.",
  },

  {
    id: 13,
    characters: "Noah & Allie",
    subtitle: "Luchar por lo que realmente importa",
    emoji: "📖",
    image: "/characters/noah-allie.jfif",
    reason:
      "Noah y Allie representan un amor marcado por el tiempo, las decisiones y esas circunstancias que pueden hacer que dos personas tengan que preguntarse qué es lo que realmente quieren. Y lo que más me conmueve de su historia no es pensar que el amor debe ser una lucha permanente, sino la idea de que, cuando alguien realmente importa, uno puede tener el valor de reconocerlo y no dejar que el miedo decida por completo.\n\nCuando pienso en ti, quiero rescatar precisamente eso.\n\nQuiero ser sincero con lo que siento. Quiero decirte cuando te extraño. Quiero decirte cuando me haces feliz. Quiero poder mirarte y no tener que esconder que estoy enamorado de ti por miedo a parecer vulnerable.\n\nPorque hay una vulnerabilidad muy bonita en amar de verdad.",
    promise:
      "Si fueras tú, yo tendría el valor de decirte lo que siento y de cuidar aquello que construyamos.",
  },

  {
    id: 14,
    characters: "Louisa & Will",
    subtitle: "Ser una razón más para sonreír",
    emoji: "🌻",
    image: "/characters/lou-will.jpg",
    reason:
      "Louisa y Will me hacen pensar en la forma en que una persona puede entrar en tu vida y cambiar la manera en que miras los días. Su historia tiene momentos dolorosos y no quiero romantizar aquello que en ella es triste. Lo que sí quiero guardar es esa idea tan bonita de que conocer a alguien puede abrirte experiencias nuevas, hacerte reír cuando no lo esperabas y dejar una huella que permanece mucho después de que un momento termina.\n\nCuando pienso en ti, quiero que mi presencia en tu vida tenga algo de eso: quiero sumar luz.\n\nNo quiero ser la única razón de tu felicidad, porque sé que tu felicidad también pertenece a tus sueños, a tu familia, a tus amistades, a tus logros y a ti misma. Pero sí quiero ser una de las personas que contribuya a ella.\n\nQuiero hacerte reír.\n\nQuiero mandarte algo absurdo en el momento menos esperado.",
    promise:
      "Quiero ser una de esas personas que hacen que tus días tengan un poquito más de luz. Quiero reír contigo cuando haya motivos y abrazarte cuando no los haya. Y si algún día estás pasando por una etapa difícil, quiero que puedas recordar que no tienes que atravesarla fingiendo que estás bien conmigo.",
  },

  {
    id: 15,
    characters: "Jack & Rose",
    subtitle: "Tener el valor de cuidar a quien amas",
    emoji: "🚢",
    image: "/characters/jack-rose.jpg",
    reason:
      "Jack y Rose tienen una historia que quedó marcada por un momento extremo, pero lo que quiero tomar de ellos para esta dedicatoria no es la tragedia. Es el valor de encontrarse con alguien y sentir que esa persona merece ser cuidada, escuchada y acompañada.\n\nRose está atrapada en una vida que otros han imaginado por ella. Jack aparece y le recuerda que también tiene derecho a sentir, elegir, descubrir y vivir. Y esa parte me parece especialmente bonita: amar a alguien no debería significar decidir por esa persona. Debería significar ayudarla a recordar que su propia vida le pertenece.\n\nEso quiero contigo.\n\nNunca quiero ser quien te diga qué debes ser para hacerme feliz. Quiero conocer quién eres y preguntarte qué quieres tú.",
    promise:
      "Quiero cuidarte sin encerrarte, acompañarte sin decidir por ti y quererte sin pedirte que seas menos de lo que eres. Si alguna vez necesitas valor para dar un paso hacia algo que quieres, quiero estar ahí para decirte que confío en ti.",
  },

  {
    id: 16,
    characters: "Carl & Ellie",
    subtitle: "Construir una vida llena de pequeños recuerdos",
    emoji: "🎈",
    image: "/characters/carl-ellie.jfif",
    reason:
      "Carl y Ellie me hacen pensar en algo que para mí es todavía más bonito que cualquier gran historia de amor: compartir una vida. No solamente los viajes increíbles o los momentos que parecen sacados de una película, sino también las pequeñas cosas que terminan llenando los años. Una casa, una comida juntos, un proyecto, una fotografía, una costumbre o simplemente tener a la misma persona al lado mientras pasa el tiempo.\n\nY cuando pienso en ti, eso es algo que quiero muchísimo.\n\nQuiero que algún día podamos mirar hacia atrás y descubrir que nuestra historia está llena de momentos que en su momento parecían normales. Quiero recordar nuestras primeras cosas juntos, nuestros lugares favoritos, nuestras pequeñas costumbres y todas esas tonterías que solamente nosotros entendemos.",
    promise:
      "No quiero construir solamente momentos enormes contigo. Quiero construir una vida llena de pequeños recuerdos. Porque algún día, cuando miremos hacia atrás, probablemente serán esos pequeños momentos los que más vamos a extrañar.",
  },

  {
    id: 17,
    characters: "Lady & Tramp",
    subtitle: "Encontrarnos y hacer nuestro propio camino",
    emoji: "🐾",
    image: "/characters/lady-tramp.jfif",
    reason:
      "Lady y Tramp me recuerdan a dos personas que vienen de mundos distintos y que, aun así, consiguen encontrar algo que las conecta. Su historia tiene aventura, diferencias, momentos inesperados y esa sensación de que cuando conoces a alguien especial terminas viendo algunas cosas de una manera diferente.\n\nEso me hace pensar en nosotros porque nuestra historia también tiene algo que no estaba planeado. Tú estabas viviendo tu vida y yo la mía, y de alguna manera terminamos encontrándonos. Ahora hay cosas que antes imaginaba solamente para mí y que hoy quiero compartir contigo.\n\nMe gusta pensar que no necesitamos tener exactamente el mismo camino para caminar juntos.",
    promise:
      "Quiero que hagamos nuestro propio camino. Que tengamos nuestras experiencias, nuestros lugares, nuestras costumbres y nuestras historias. No quiero copiar ninguna historia de amor; quiero que algún día alguien mire la nuestra y piense que también tiene algo especial.",
  },

  {
    id: 18,
    characters: "Anna & Kristoff",
    subtitle: "Encontrar un hogar también en una persona",
    emoji: "❄️",
    image: "/characters/anna-kristoff.jfif",
    reason:
      "Anna y Kristoff me gustan porque su relación se siente como dos personas que poco a poco descubren que pueden ser un lugar seguro para el otro. No porque uno necesite que el otro lo complete, sino porque compartir la vida hace que algunas cosas se sientan más bonitas.\n\nY eso es algo que quiero contigo.\n\nQuiero que algún día puedas sentir que conmigo puedes hablar de lo que sea. Que puedes llegar después de un día pesado y simplemente contarme qué pasó. Que puedes emocionarte por algo pequeño y saber que voy a querer escucharlo. Que puedes estar feliz, triste, cansada o simplemente tener un día extraño y seguir sintiendo que tienes un lugar donde puedes ser tú.\n\nQuiero que podamos construir esa confianza con el tiempo.",
    promise:
      "Quiero que cuando pienses en mí sientas tranquilidad. No quiero ser solamente la persona que amas, también quiero ser alguien con quien puedas sentirte acompañada, escuchada y querida incluso en los días normales.",
  },

  {
    id: 19,
    characters: "Mavis & Johnny",
    subtitle: "Reírnos juntos hasta de los días normales",
    emoji: "🖤",
    image: "/characters/mavis-johnny.jpg",
    reason:
      "Mavis y Johnny tienen algo que me encanta: son una pareja que no necesita tomarse demasiado en serio para quererse muchísimo. Su historia tiene humor, espontaneidad, rarezas y una energía que me recuerda que el romance también puede ser divertido.\n\nY eso quiero contigo.\n\nNo quiero que nuestra historia esté llena solamente de momentos profundos y palabras bonitas. También quiero que tengamos días en los que simplemente nos riamos por cualquier estupidez, que hagamos cosas sin sentido y que podamos molestarnos entre nosotros sin dejar de saber cuánto nos queremos.",
    promise:
      "Quiero ser esa persona con la que puedas reírte hasta que te duela la barriga. Quiero que tengamos nuestras propias bromas, nuestras pequeñas locuras y nuestros días completamente normales que terminan siendo especiales. Porque además de enamorarme de ti, quiero disfrutar muchísimo la vida contigo.",
  },

  {
    id: 20,
    characters: "Howl & Sophie",
    subtitle: "Encontrarnos, cambiarnos y elegirnos",
    emoji: "✨",
    image: "/characters/howl-sophie.jfif",
    reason:
      "Howl y Sophie me gustan porque su historia no se trata solamente de enamorarse, sino de cómo dos personas pueden llegar a cambiar la vida del otro sin dejar de ser quienes son. Sophie conoce a Howl en un momento en el que todavía no entiende completamente quién es él, y poco a poco empieza a descubrir todo lo que hay detrás de esa personalidad tan complicada que tiene.\n\nY Howl también termina descubriendo algo en Sophie que cambia completamente su forma de ver las cosas. Ella no se queda solamente con la parte bonita de él, también llega a conocer sus inseguridades, sus miedos y todas esas partes que intenta esconder. Aun así, decide quedarse.\n\nEso es algo que me gusta mucho porque contigo quiero algo parecido. No quiero quererte solamente por los momentos bonitos o por las partes fáciles de nuestra relación. Quiero seguir conociéndote, descubrir cada vez más de ti y aprender a querer incluso esas pequeñas cosas que hacen que seas tú.\n\nY también quiero que tú puedas conocerme de la misma manera. Que podamos crecer juntos, cambiar con el tiempo y aun así seguir encontrando en el otro ese lugar al que queremos volver.",
    promise:
      "Quiero que, aunque pase el tiempo y los dos cambiemos, sigamos encontrándonos en el otro. Que podamos crecer, aprender y descubrir nuevas versiones de nosotros sin dejar de elegirnos.",
  },
];

function AnimatedCouples() {
  const [selected, setSelected] = useState(null);

  const selectedCouple = couples.find(
    (couple) => couple.id === selected
  );

  return (
    <section className="inner-page animated-couples-page">
      <SectionTitle
        eyebrow="Un capítulo diferente"
        title="Tú y yo si fuéramos personajes"
        description="Hay parejas de películas, series y caricaturas que, por alguna razón, me hacen pensar en nosotros. No porque nuestra historia sea igual a la de ellos, sino porque cada pareja tiene algo que me gustaría cuidar, vivir o construir contigo."
      />

      <AnimatePresence mode="wait">
        {!selected ? (
          <motion.div
            key="couples-grid"
            className="character-grid"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35 }}
          >
            {couples.map((couple, index) => (
              <motion.button
                key={couple.id}
                className="character-card"
                onClick={() => setSelected(couple.id)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.4,
                }}
                whileHover={{
                  y: -8,
                  rotate:
                    index % 3 === 0
                      ? -0.8
                      : index % 3 === 1
                        ? 0
                        : 0.8,
                }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="character-image-wrapper">
                  <img
                    src={couple.image}
                    alt={couple.characters}
                    className="character-image"
                  />

                  <span className="character-heart">
                    {couple.emoji}
                  </span>

                  <span className="character-number">
                    {String(couple.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="character-card-content">
                  <span className="character-small-title">
                    {couple.subtitle}
                  </span>

                  <h2>{couple.characters}</h2>

                  <span className="character-open">
                    Ver por qué los elegí →
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="couple-detail"
            className="character-expanded"
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <button
              className="character-back"
              onClick={() => setSelected(null)}
            >
              ← Volver a todas las parejas
            </button>

            <div className="character-expanded-grid">
              <motion.div
                className="character-expanded-image"
                layoutId={`couple-image-${selected}`}
              >
                <img
                  src={selectedCouple.image}
                  alt={selectedCouple.characters}
                />

                <div className="image-heart-decoration">
                  {selectedCouple.emoji}
                </div>
              </motion.div>

              <div className="character-expanded-content">
                <span className="eyebrow">
                  {selectedCouple.emoji} Esta pareja me recuerda a nosotros
                </span>

                <h2>{selectedCouple.characters}</h2>

                <h3>{selectedCouple.subtitle}</h3>

                <div className="character-story">
                  {selectedCouple.reason
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                </div>

                <div className="character-promise">
                  <span>Y si fueras tú...</span>

                  <p>{selectedCouple.promise}</p>
                </div>
                <button
                  className="primary-button"
                  onClick={() => setSelected(null)}
                >
                  Ver otra pareja
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AnimatedCouples;