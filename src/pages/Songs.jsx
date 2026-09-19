import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const songs = [
  {
    id: 1,
    title: "Anhelo",
    artist: "Adolescent's Orquesta",
    year: "1995",
    image: "/songs/anhelo.jpg",
    youtubeUrl: "https://youtu.be/D_0FKJqxldE",
    genre: "Salsa",
    message:
      "Una canción que habla de ese deseo profundo de tener cerca a la persona que amas.",
  },
  {
    id: 2,
    title: "La Boda",
    artist: "Cosculluela",
    year: "2017",
    image: "/songs/la-boda.jpg",
    youtubeUrl: "https://youtu.be/oiGCL2Ld534",
    genre: "Urbano",
    message:
      "Porque imaginar un futuro juntos también forma parte de enamorarse.",
  },
  {
    id: 3,
    title: "Ella Es Mi Todo",
    artist: "Kaleth Morales",
    year: "2004",
    image: "/songs/ella-es-mi-todo.jpg",
    youtubeUrl: "https://youtu.be/eEtl66C8ogs",
    genre: "Vallenato",
    message:
      "Cuando una persona termina convirtiéndose en todo para ti.",
  },
  {
    id: 4,
    title: "Vivo en el Limbo",
    artist: "Kaleth Morales",
    year: "2005",
    image: "/songs/vivo-en-el-limbo.jpg",
    youtubeUrl: "https://youtu.be/ERELqLz93qc",
    genre: "Vallenato",
    message:
      "Una canción llena de nostalgia y sentimientos difíciles de esconder.",
  },
  {
    id: 5,
    title: "Risk It All",
    artist: "Bruno Mars",
    year: "2024",
    image: "/songs/risk-it-all.jpg",
    youtubeUrl: "https://youtu.be/lY5V4hSLWY8",
    genre: "Pop / Rock",
    message:
      "Porque hay personas por las que vale la pena arriesgarlo todo.",
  },
  {
    id: 6,
    title: "Amor Cuánto Te Amo",
    artist: "Grupo Gale",
    year: "2000",
    image: "/songs/amor-cuanto-te-amo.jpg",
    youtubeUrl: "https://youtu.be/moD7Pg_HUxg",
    genre: "Salsa",
    message:
      "Una declaración sencilla pero llena de sentimiento.",
  },
  {
    id: 7,
    title: "Chachachá",
    artist: "Jósean Log",
    year: "2018",
    image: "/songs/chachacha.jpg",
    youtubeUrl: "https://youtu.be/ME-K2UOWZ5Y",
    genre: "Indie",
    message:
      "Una canción que tiene esa vibra bonita de estar completamente enamorado.",
  },
  {
    id: 8,
    title: "Brillas",
    artist: "León Larregui",
    year: "2012",
    image: "/songs/brillas.jpg",
    youtubeUrl: "https://youtu.be/Mcj75l2gJcY",
    genre: "Indie",
    message:
      "Porque hay personas que literalmente hacen que todo brille un poquito más.",
  },
  {
    id: 9,
    title: "Si Pudiera",
    artist: "Manuel Medrano",
    year: "2015",
    image: "/songs/si-pudiera.jpg",
    youtubeUrl: "https://youtu.be/iItec_J9x7M",
    genre: "Indie",
    message:
      "Una canción para imaginar todo aquello que harías por esa persona especial.",
  },
  {
    id: 10,
    title: "Donde Nadie Pueda Ir",
    artist: "Manuel Medrano",
    year: "2015",
    image: "/songs/donde-nadie-pueda-ir.jpg",
    youtubeUrl: "https://youtu.be/dR-T5nnkjvQ",
    genre: "Indie",
    message:
      "Tiene esa sensación de querer compartir con alguien un lugar que sea solamente de los dos.",
  },
  {
    id: 11,
    title: "Beso",
    artist: "Jósean Log",
    year: "2018",
    image: "/songs/beso.jpg",
    youtubeUrl: "https://youtu.be/QESagb08FYs",
    genre: "Indie",
    message:
      "Porque a veces un beso dice mucho más que cualquier palabra.",
  },
  {
    id: 12,
    title: "Locos",
    artist: "León Larregui",
    year: "2016",
    image: "/songs/locos.jpg",
    youtubeUrl: "https://youtu.be/SXcFYnHSG08",
    genre: "Indie",
    message:
      "Para esos momentos en los que el amor hace que todo parezca un poco loco.",
  },
  {
    id: 13,
    title: "My Kind of Woman",
    artist: "Mac DeMarco",
    year: "2012",
    image: "/songs/my-kind-of-woman.jpg",
    youtubeUrl: "https://youtu.be/88mooKbT61A",
    genre: "Indie",
    message:
      "Una canción que transmite admiración y cariño por esa persona que simplemente es tu tipo de persona.",
  },
  {
    id: 14,
    title: "Por el Resto de Mi Vida",
    artist: "Andrés Cepeda",
    year: "2017",
    image: "/songs/por-el-resto-de-mi-vida.jpg",
    youtubeUrl: "https://youtu.be/NoWqnjmh8KU",
    genre: "Románticas",
    message:
      "Porque algunas personas hacen que quieras quedarte por el resto de tu vida.",
  },
  {
    id: 15,
    title: "Mai",
    artist: "Milo J",
    year: "2024",
    image: "/songs/mai.jpg",
    youtubeUrl: "https://youtu.be/MldGX_mbS-o",
    genre: "Urbano",
    message:
      "Una canción que habla de encontrar a alguien que te hace querer ser mejor.",
  },
  {
    id: 16,
    title: "Te Encontré",
    artist: "El Vega",
    year: "2016",
    image: "/songs/te-encontre.jpg",
    youtubeUrl: "https://youtu.be/8g3KHA8ROiA",
    genre: "Románticas",
    message:
      "La sensación de haber encontrado finalmente a esa persona especial.",
  },
  {
    id: 17,
    title: "Something About Us",
    artist: "Eyedress",
    year: "2022",
    image: "/songs/something-about-us.jpg",
    youtubeUrl: "https://youtu.be/sOS9aOIXPEk",
    genre: "Indie",
    message:
      "Una canción para esa conexión que simplemente se siente diferente.",
  },
  {
    id: 18,
    title: "Lo Que Siento",
    artist: "Cuco",
    year: "2017",
    image: "/songs/lo-que-siento.jpg",
    youtubeUrl: "https://youtu.be/5pklbgsH97I",
    genre: "Indie",
    message:
      "Porque hay sentimientos que son difíciles de explicar con palabras.",
  },
  {
    id: 19,
    title: "Those Eyes",
    artist: "New West",
    year: "2019",
    image: "/songs/those-eyes.jpg",
    youtubeUrl: "https://youtu.be/i9UDD6zyCGs",
    genre: "Indie",
    message:
      "Esos pequeños detalles de alguien que terminan recordándote por qué te enamoraste.",
  },
  {
    id: 20,
    title: "Te Amo y Más",
    artist: "Gustavo Santaolalla",
    year: "2010",
    image: "/songs/te-amo-y-mas.jpg",
    youtubeUrl: "https://youtu.be/Nav46bb9OR8",
    genre: "Románticas",
    message:
      "Una canción sencilla que representa un amor que sigue creciendo.",
  },
  {
    id: 21,
    title: "Darte un Beso",
    artist: "Prince Royce",
    year: "2013",
    image: "/songs/darte-un-beso.jpg",
    youtubeUrl: "https://youtu.be/bdOXnTbyk0g",
    genre: "Románticas",
    message:
      "Una de esas canciones que convierten un simple beso en una historia completa.",
  },
  {
    id: 22,
    title: "Compartir",
    artist: "Carla Morrison",
    year: "2013",
    image: "/songs/compartir.jpg",
    youtubeUrl: "https://youtu.be/xdfik2FRhck",
    genre: "Indie",
    message:
      "Porque amar también significa querer compartir la vida.",
  },
  {
    id: 23,
    title: "No Hay Nadie Más",
    artist: "Sebastián Yatra",
    year: "2018",
    image: "/songs/no-hay-nadie-mas.jpg",
    youtubeUrl: "https://youtu.be/sD9_l3oDOag",
    genre: "Románticas",
    message:
      "Cuando entre millones de personas solamente una consigue ocupar ese lugar especial.",
  },
  {
    id: 24,
    title: "Colgando en tus Manos",
    artist: "Carlos Baute",
    year: "2008",
    image: "/songs/colgando-en-tus-manos.jpg",
    youtubeUrl: "https://youtu.be/qExd-3oCTl4",
    genre: "Románticas",
    message:
      "Una canción sobre entregarle el corazón completamente a alguien.",
  },
  {
    id: 25,
    title: "Perfecta",
    artist: "Miranda!",
    year: "2007",
    image: "/songs/perfecta.jpg",
    youtubeUrl: "https://youtu.be/a3hOeU7w59o",
    genre: "Pop / Rock",
    message:
      "Porque para quien amas, esa persona puede parecer simplemente perfecta.",
  },
  {
    id: 26,
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    year: "1961",
    image: "/songs/cant-help-falling-in-love.jpg",
    youtubeUrl: "https://youtu.be/TlrNxJqODBc",
    genre: "Románticas",
    message:
      "Porque algunas veces simplemente no puedes evitar enamorarte.",
  },
  {
    id: 27,
    title: "Out of My League",
    artist: "Fitz and The Tantrums",
    year: "2013",
    image: "/songs/out-of-my-league.jpg",
    youtubeUrl: "https://youtu.be/Z4mbxaa3XL8",
    genre: "Pop / Rock",
    message:
      "Para esa persona que sientes que es demasiado especial para ser real.",
  },
  {
    id: 28,
    title: "Francés Limón",
    artist: "Los Enanitos Verdes",
    year: "1986",
    image: "/songs/frances-limon.jpg",
    youtubeUrl: "https://youtu.be/G57CgtX-BsI",
    genre: "Pop / Rock",
    message:
      "Una canción clásica del rock en español con una esencia romántica muy particular.",
  },
  {
    id: 29,
    title: "Perfect",
    artist: "Ed Sheeran",
    year: "2017",
    image: "/songs/perfect.jpg",
    youtubeUrl: "https://youtu.be/2Vv-BfVoq4g",
    genre: "Románticas",
    message:
      "Una canción para imaginar un amor que quieres conservar para siempre.",
  },
  {
    id: 30,
    title: "Tan Natural",
    artist: "Felipe Peláez",
    year: "2013",
    image: "/songs/tan-natural.jpg",
    youtubeUrl: "https://youtu.be/c2jgy0QrnqQ",
    genre: "Vallenato",
    message:
      "Porque amar puede sentirse tan natural como respirar.",
  },
  {
    id: 31,
    title: "El Amor Más Grande del Planeta",
    artist: "Felipe Peláez",
    year: "2009",
    image: "/songs/el-amor-mas-grande.jpg",
    youtubeUrl: "https://youtu.be/FBScYYaoeRc",
    genre: "Vallenato",
    message:
      "Una declaración enorme para un amor que se siente inmenso.",
  },
  {
    id: 32,
    title: "Nuestro Sueño",
    artist: "Grupo Niche",
    year: "1988",
    image: "/songs/nuestro-sueno.jpg",
    youtubeUrl: "https://youtu.be/mJ9p21-KXD4",
    genre: "Salsa",
    message:
      "Porque los sueños compartidos son una de las partes más bonitas de una relación.",
  },
  {
    id: 33,
    title: "Bajo el Agua",
    artist: "Manuel Medrano",
    year: "2015",
    image: "/songs/bajo-el-agua.jpg",
    youtubeUrl: "https://youtu.be/zLX_GcXt2pI",
    genre: "Indie",
    message:
      "Una canción que transmite esa sensación de querer estar completamente cerca de alguien.",
  },
  {
    id: 34,
    title: "Mi Celosa Hermosa",
    artist: "Felipe Peláez",
    year: "2013",
    image: "/songs/mi-celosa-hermosa.jpg",
    youtubeUrl: "https://youtu.be/DS14-4g0wcs",
    genre: "Vallenato",
    message:
      "Porque hasta los pequeños celos pueden formar parte de una historia de amor.",
  },
  {
    id: 35,
    title: "Tragao de Ti",
    artist: "Peter Manjarrés",
    year: "2010",
    image: "/songs/tragao-de-ti.jpg",
    youtubeUrl: "https://youtu.be/4nmez937ePQ",
    genre: "Vallenato",
    message:
      "Cuando estás completamente enamorado y ya no puedes disimularlo.",
  },
  {
    id: 36,
    title: "ADMV",
    artist: "Maluma",
    year: "2020",
    image: "/songs/ADMV.jpg",
    youtubeUrl: "https://youtu.be/lNBSdFw0t_w",
    genre: "Urbano",
    message:
      "Una canción que imagina el amor incluso cuando los años comienzan a pasar.",
  },
  {
    id: 37,
    title: "Mi Niña Bonita",
    artist: "Chino & Nacho",
    year: "2009",
    image: "/songs/mi-nina-bonita.jpg",
    youtubeUrl: "https://youtu.be/E3wAxXWzEvA",
    genre: "Urbano",
    message:
      "Una de esas canciones que convierten el enamoramiento en una celebración.",
  },
  {
    id: 38,
    title: "Aquel Nap",
    artist: "Rauw Alejandro",
    year: "2021",
    image: "/songs/aquel-nap.jpg",
    youtubeUrl: "https://youtu.be/G11s5l0ZuLs",
    genre: "Urbano",
    message:
      "Una canción íntima que habla de querer detener el tiempo junto a alguien.",
  },
  {
    id: 39,
    title: "Algo Mágico",
    artist: "Rauw Alejandro",
    year: "2021",
    image: "/songs/algo-magico.jpg",
    youtubeUrl: "https://youtu.be/pNzPDyvoOkQ",
    genre: "Urbano",
    message:
      "Porque algunas conexiones simplemente se sienten mágicas.",
  },
  {
    id: 40,
    title: "Cosas Que No Te Dije",
    artist: "Saiko",
    year: "2021",
    image: "/songs/cosas-que-no-te-dije.jpg",
    youtubeUrl: "https://youtu.be/_ovs3OmADCQ",
    genre: "Urbano",
    message:
      "Para todas esas cosas que sentimos y que muchas veces no nos atrevemos a decir.",
  },
  {
    id: 41,
    title: "Yo Quisiera",
    artist: "Reik",
    year: "2005",
    image: "/songs/yo-quisiera.jpg",
    youtubeUrl: "https://youtu.be/QZKrLIoMyxY",
    genre: "Románticas",
    message:
      "Porque a veces quieres estar cerca de alguien incluso cuando no puedes.",
  },
  {
    id: 42,
    title: "Lugar Seguro",
    artist: "Jay Wheeler",
    year: "2022",
    image: "/songs/lugar-seguro.jpg",
    youtubeUrl: "https://youtu.be/0IiaodARHt0",
    genre: "Urbano",
    message:
      "Hay personas que terminan convirtiéndose en nuestro lugar seguro.",
  },
  {
    id: 43,
    title: "Solamente Tú",
    artist: "Pablo Alborán",
    year: "2010",
    image: "/songs/solamente-tu.jpg",
    youtubeUrl: "https://youtu.be/F0rwOsAteXM",
    genre: "Románticas",
    message:
      "Porque a veces solamente necesitas a una persona para sentir que todo tiene sentido.",
  },
  {
    id: 44,
    title: "La Promesa",
    artist: "Melendi",
    year: "2014",
    image: "/songs/la-promesa.jpg",
    youtubeUrl: "https://youtu.be/KnjtN2OaAG4",
    genre: "Románticas",
    message:
      "Una promesa de cuidar los sueños de la persona que amas.",
  },
  {
    id: 45,
    title: "Tu Jardín con Enanitos",
    artist: "Melendi",
    year: "2012",
    image: "/songs/tu-jardin-con-enanitos.jpg",
    youtubeUrl: "https://youtu.be/v3-9eDFDAFw",
    genre: "Románticas",
    message:
      "Una canción que mezcla ternura, nostalgia y amor.",
  },
  {
    id: 46,
    title: "Abrázame Fuerte",
    artist: "Jay Wheeler",
    year: "2022",
    image: "/songs/abrazame-fuerte.jpg",
    youtubeUrl: "https://youtu.be/3EnlOFXeaUA",
    genre: "Urbano",
    message:
      "Porque a veces un abrazo es todo lo que necesitas.",
  },
  {
    id: 47,
    title: "Media Luna",
    artist: "Mora",
    year: "2023",
    image: "/songs/media-luna.jpg",
    youtubeUrl: "https://youtu.be/H3ZZA-X1QXE",
    genre: "Urbano",
    message:
      "Una canción para esos sentimientos que aparecen incluso en medio de la noche.",
  },
  {
    id: 48,
    title: "PPC",
    artist: "Roa",
    year: "2025",
    image: "/songs/ppc.jpg",
    youtubeUrl: "https://youtu.be/1wCW8JbWr0U",
    genre: "Urbano",
    message:
      "Una conexión intensa que se vuelve difícil de ignorar.",
  },
  {
    id: 49,
    title: "4 Life",
    artist: "Kris R",
    year: "2026",
    image: "/songs/4-life.jpg",
    youtubeUrl: "https://youtu.be/bslNoCMejnw",
    genre: "Urbano",
    message:
      "Porque cuando realmente quieres a alguien, quieres que sea para toda la vida.",
  },
  {
    id: 50,
    title: "Contigo Na' Más",
    artist: "Remix",
    year: "2024",
    image: "/songs/contigo-na-mas.jpg",
    youtubeUrl: "https://youtu.be/gST7bQGGaGA",
    genre: "Urbano",
    message:
      "Una canción para decir que, entre tantas personas, solamente quieres estar con esa.",
  },
  {
    id: 51,
    title: "Mil Vidas",
    artist: "Mora",
    year: "2025",
    image: "/songs/mil-vidas.jpg",
    youtubeUrl: "https://youtu.be/OxyGjeiw0OI",
    genre: "Urbano",
    message:
      "Porque si pudiera vivir mil vidas, elegiría encontrarte en todas.",
  },
  {
    id: 52,
    title: "Mi Demonia",
    artist: "Roa",
    year: "2025",
    image: "/songs/mi-demonia.jpg",
    youtubeUrl: "https://youtu.be/Pu3vfGHsZVc",
    genre: "Urbano",
    message:
      "Una conexión intensa y complicada que termina siendo imposible de ignorar.",
  },
  {
    id: 53,
    title: "Reina",
    artist: "Mora",
    year: "2023",
    image: "/songs/reina-mora.jpg",
    youtubeUrl: "https://youtu.be/uZ9Jk2rG6Qw",
    genre: "Urbano",
    message:
      "Porque para ti esa persona puede ser literalmente tu reina.",
  },
  {
    id: 54,
    title: "Virgen",
    artist: "Adolescent's Orquesta",
    year: "1997",
    image: "/songs/virgen.jpg",
    youtubeUrl: "https://youtu.be/pz9O3UeM_o0",
    genre: "Salsa",
    message:
      "Una de las canciones románticas más reconocibles de Adolescent's Orquesta.",
  },
  {
    id: 55,
    title: "Enamorado de Ti",
    artist: "Willie González",
    year: "1990",
    image: "/songs/enamorado-de-ti.jpg",
    youtubeUrl: "https://youtu.be/Q3y0fkcGJSc",
    genre: "Salsa",
    message:
      "Una declaración directa para esa persona que ocupa todos tus pensamientos.",
  },
  {
    id: 56,
    title: "Te Regalo",
    artist: "Reels B",
    year: "2024",
    image: "/songs/te-regalo.jpg",
    youtubeUrl: "https://youtu.be/yYh3Q8J0J2E",
    genre: "Urbano",
    message:
      "Porque cuando amas a alguien quieres entregarle todo lo bonito que tienes.",
  },
  {
    id: 57,
    title: "Reina Pepiada",
    artist: "Álvaro Díaz",
    year: "2020",
    image: "/songs/reina-pepiada.jpg",
    youtubeUrl: "https://youtu.be/Zn37zIBGv5M",
    genre: "Urbano",
    message:
      "Una canción con ese estilo especial de Álvaro Díaz para una persona que destaca entre todas.",
  },
  {
    id: 58,
    title: "Quiero Morir en tu Piel",
    artist: "Willie González",
    year: "2006",
    image: "/songs/quiero-morir-en-tu-piel.jpg",
    youtubeUrl: "https://youtu.be/_m-iB3Y3ia8",
    genre: "Salsa",
    message:
      "Una canción intensa de salsa romántica.",
  },
  {
    id: 59,
    title: "Si Tú Me Besas",
    artist: "Víctor Manuelle",
    year: "2011",
    image: "/songs/si-tu-me-besas.jpg",
    youtubeUrl: "https://youtu.be/TuY1py-wPl4",
    genre: "Salsa",
    message:
      "Porque un beso de la persona correcta puede cambiarlo todo.",
  },
  {
    id: 60,
    title: "Aiunii",
    artist: "Jay Wheeler",
    year: "2025",
    image: "/songs/aiunii.jpg",
    youtubeUrl: "https://youtu.be/Bx3rT9nP7YA",
    genre: "Urbano",
    message:
      "Una canción para esos sentimientos que aparecen cuando alguien empieza a importar demasiado.",
  },
  {
    id: 61,
    title: "Quisiera",
    artist: "Pasabordo",
    year: "2009",
    image: "/songs/quisiera.jpg",
    youtubeUrl: "https://youtu.be/_M6V0t0xBeo",
    genre: "Pop / Rock",
    message:
      "Una canción llena de deseos y sentimientos por esa persona especial.",
  },
  {
    id: 62,
    title: "Cometas",
    artist: "Bacalao Men",
    year: "2015",
    image: "/songs/cometas.jpg",
    youtubeUrl: "https://youtu.be/vkv0er6K6B8",
    genre: "Pop / Rock",
    message:
      "Una canción para imaginar momentos bonitos junto a alguien.",
  },
  {
    id: 63,
    title: "Andas en mi Cabeza",
    artist: "Chino & Nacho",
    year: "2016",
    image: "/songs/andas-en-mi-cabeza.jpg",
    youtubeUrl: "https://youtu.be/AMTAQ-AJS4Y",
    genre: "Urbano",
    message:
      "Porque cuando alguien te importa de verdad, termina estando en tu cabeza a todas horas.",
  },
  {
    id: 64,
    title: "Tú y Yo",
    artist: "La Misma Gente",
    year: "1990",
    image: "/songs/tu-y-yo.jpg",
    youtubeUrl: "https://youtu.be/sy_r7H0HvNc",
    genre: "Salsa",
    message:
      "Porque al final lo importante son simplemente tú y yo.",
  },
  {
    id: 65,
    title: "Die With a Smile",
    artist: "Bruno Mars",
    year: "2024",
    image: "/songs/die-with-a-smile.jpg",
    youtubeUrl: "https://youtu.be/kPa7bsKwL-c",
    genre: "Pop / Rock",
    message:
      "Una canción sobre querer estar al lado de la persona que amas hasta el último momento.",
  },
  {
    id: 66,
    title: "Mi Santa",
    artist: "Romeo Santos",
    year: "2012",
    image: "/songs/mi-santa.jpg",
    youtubeUrl: "https://youtu.be/Hz9lhqxl_gQ",
    genre: "Románticas",
    message:
      "Para esa persona que sientes que llegó a tu vida como una bendición.",
  },
  {
    id: 67,
    title: "Mis Cinco Sentidos",
    artist: "Kaleth Morales",
    year: "2005",
    image: "/songs/mis-cinco-sentidos.jpg",
    youtubeUrl: "https://youtu.be/tK8CzcaX1NY",
    genre: "Vallenato",
    message:
      "Cuando todos tus sentidos parecen buscar a la misma persona.",
  },
  {
    id: 68,
    title: "Eres Mi Religión",
    artist: "Maná",
    year: "2002",
    image: "/songs/eres-mi-religion.jpg",
    youtubeUrl: "https://youtu.be/mrhcucasAlw",
    genre: "Pop / Rock",
    message:
      "Una canción que convierte el amor en algo casi sagrado.",
  },
  {
    id: 69,
    title: "Todo Contigo",
    artist: "Blessd",
    year: "2026",
    image: "/songs/todo-contigo.jpg",
    youtubeUrl: "https://youtu.be/z0vB2A1xoTM",
    genre: "Urbano",
    message:
      "Porque cuando estás con la persona correcta, todo se siente diferente.",
  },
  {
    id: 70,
    title: "Palabras Sobran",
    artist: "Blessd",
    year: "2023",
    image: "/songs/palabras-sobran.jpg",
    youtubeUrl: "https://youtu.be/FXO40R1_wgc",
    genre: "Urbano",
    message:
      "Porque hay momentos en los que las palabras simplemente sobran.",
  },
  {
    id: 71,
    title: "De Millón a Cero",
    artist: "Kaleth Morales",
    year: "2005",
    image: "/songs/de-millon-a-cero.jpg",
    youtubeUrl: "https://youtu.be/7K_kYlth-tI",
    genre: "Vallenato",
    message:
      "Una canción sobre cómo la ausencia de alguien puede cambiarlo todo.",
  },
  {
    id: 72,
    title: "San Lucas",
    artist: "Kevin Kaarl",
    year: "2019",
    image: "/songs/san-lucas.jpg",
    youtubeUrl: "https://youtu.be/7-Ikexq03O0",
    genre: "Indie",
    message:
      "Una canción que habla de escapar juntos y construir una vida lejos de todo.",
  },
  {
    id: 73,
    title: "La Gloria Eres Tú",
    artist: "Luis Miguel",
    year: "1991",
    image: "/songs/la-gloria-eres-tu.jpg",
    youtubeUrl: "https://youtu.be/LRrJ1twjDv8",
    genre: "Románticas",
    message:
      "Un clásico romántico para decirle a alguien lo importante que es para ti.",
  },
  {
    id: 74,
    title: "Volví a Nacer",
    artist: "Carlos Vives",
    year: "2012",
    image: "/songs/volvi-a-nacer.jpg",
    youtubeUrl: "https://youtu.be/CJ_zRSv3Hr8",
    genre: "Vallenato",
    message:
      "Porque encontrar a alguien puede sentirse como comenzar una vida nueva.",
  },
  {
    id: 75,
    title: "La Medalla",
    artist: "Camilo & Evaluna",
    year: "2026",
    image: "/songs/la-medalla.jpg",
    youtubeUrl: "https://youtu.be/tEsAuXQ79AA",
    genre: "Pop / Rock",
    message:
      "Una canción sobre elegir a la persona que quieres tener a tu lado.",
  },
  {
    id: 76,
    title: "Fin del Mundo",
    artist: "Mora",
    year: "2023",
    image: "/songs/fin-del-mundo.jpg",
    youtubeUrl: "https://youtu.be/Xer2dDQldaE",
    genre: "Urbano",
    message:
      "Porque incluso si el mundo terminara, querrías estar junto a esa persona.",
  },
  {
    id: 77,
    title: "¿Y Si Te Quedas, Qué?",
    artist: "Santiago Cruz",
    year: "2012",
    image: "/songs/y-si-te-quedas-que.jpg",
    youtubeUrl: "https://youtu.be/geFJZW9vpSM",
    genre: "Románticas",
    message:
      "Una pregunta sencilla que puede cambiar toda una historia de amor.",
  },
  {
    id: 78,
    title: "Las Locuras Mías",
    artist: "Silvestre Dangond",
    year: "2020",
    image: "/songs/las-locuras-mias.jpg",
    youtubeUrl: "https://youtu.be/LqKscPDW8Y0",
    genre: "Vallenato",
    message:
      "Porque el amor también nos lleva a hacer las locuras más bonitas.",
  },
  {
    id: 79,
    title: "Fantasía",
    artist: "Roa",
    year: "2025",
    image: "/songs/fantasia.jpg",
    youtubeUrl: "https://youtu.be/feFKZjh8Xlo",
    genre: "Urbano",
    message:
      "Para esa persona que parece demasiado perfecta para ser real.",
  },
  {
    id: 80,
    title: "Vivo Pensando en Ti",
    artist: "Felipe Peláez ft. Maluma",
    year: "2017",
    image: "/songs/vivo-pensando-en-ti.jpg",
    youtubeUrl: "https://youtu.be/xnG9lJKPH-I",
    genre: "Vallenato",
    message:
      "Porque cuando alguien te importa, termina apareciendo en tus pensamientos todo el tiempo.",
  },
  {
    id: 81,
    title: "Loka",
    artist: "Luar La L",
    year: "2026",
    image: "/songs/loka.jpg",
    youtubeUrl: "https://youtu.be/CZcaX2YDc9E",
    genre: "Urbano",
    message:
      "Una canción reciente para darle un toque diferente a la playlist.",
  },
  {
    id: 82,
    title: "Me Voy Enamorando",
    artist: "Chino & Nacho",
    year: "2015",
    image: "/songs/me-voy-enamorando.jpg",
    youtubeUrl: "https://youtu.be/EgIadOqK6pQ",
    genre: "Urbano",
    message:
      "Porque enamorarse muchas veces sucede poco a poco, casi sin darse cuenta.",
  },
  {
    id: 83,
    title: "Amor de Siempre",
    artist: "Cuco",
    year: "2019",
    image: "/songs/amor-de-siempre.jpg",
    youtubeUrl: "https://youtu.be/Y5b8K4xQ9M0",
    genre: "Indie",
    message:
      "Una canción que transmite ese deseo de conservar un amor para siempre.",
  },
  {
    id: 84,
    title: "Reina",
    artist: "Roa",
    year: "2025",
    image: "/songs/reina-roa.jpg",
    youtubeUrl: "https://youtu.be/VK7EALIPh6g",
    genre: "Urbano",
    message:
      "Para esa persona que ocupa un lugar especial y único en tu vida.",
  },
];

const genres = [
  {
    id: "Todas",
    label: "Todas",
    icon: "💖",
  },
  {
    id: "Románticas",
    label: "Románticas",
    icon: "🌹",
  },
  {
    id: "Salsa",
    label: "Salsa",
    icon: "🎶",
  },
  {
    id: "Vallenato",
    label: "Vallenato",
    icon: "💛",
  },
  {
    id: "Urbano",
    label: "Urbano",
    icon: "🌙",
  },
  {
    id: "Pop / Rock",
    label: "Pop / Rock",
    icon: "🎸",
  },
  {
    id: "Indie",
    label: "Indie",
    icon: "🌿",
  },
];

function Songs() {
  const [selectedSong, setSelectedSong] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("Todas");

  const handleSongClick = (songId) => {
    setSelectedSong((current) =>
      current === songId ? null : songId
    );
  };

  const filteredSongs =
    selectedGenre === "Todas"
      ? songs
      : songs.filter(
          (song) => song.genre === selectedGenre
        );

  const currentGenre = genres.find(
    (genre) => genre.id === selectedGenre
  );

  return (
    <section className="inner-page songs-page">
      <SectionTitle
        eyebrow="Capítulo musical"
        title="Canciones para dedicarte"
        description="Hay cosas que no siempre sé cómo decirte, pero algunas canciones parecen hacerlo por mí."
      />

      {/* ==========================================
          FILTROS POR GÉNERO
      ========================================== */}

      <div className="songs-category-wrapper">
        <p className="songs-category-label">
          Elige una vibra para escuchar 💗
        </p>

        <div className="songs-categories">
          {genres.map((genre) => (
            <button
              key={genre.id}
              type="button"
              className={`songs-category ${
                selectedGenre === genre.id
                  ? "songs-category-active"
                  : ""
              }`}
              onClick={() => {
                setSelectedGenre(genre.id);
                setSelectedSong(null);
              }}
            >
              <span className="songs-category-icon">
                {genre.icon}
              </span>

              <span>{genre.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={selectedGenre}
            className="songs-category-count"
            initial={{
              opacity: 0,
              y: -5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 5,
            }}
          >
            {currentGenre?.icon}{" "}
            {selectedGenre === "Todas"
              ? "Todas tus canciones especiales"
              : `${filteredSongs.length} ${
                  filteredSongs.length === 1
                    ? "canción"
                    : "canciones"
                } de ${selectedGenre.toLowerCase()}`}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* ==========================================
          LISTA DE CANCIONES
      ========================================== */}

      <motion.div
        layout
        className="songs-list"
      >
        <AnimatePresence mode="popLayout">
          {filteredSongs.map((song, index) => {
            const isSelected =
              selectedSong === song.id;

            return (
              <motion.article
                layout
                key={song.id}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                }}
                transition={{
                  duration: 0.3,
                }}
                className={`song-card ${
                  isSelected
                    ? "song-card-selected"
                    : ""
                }`}
              >
                {/* ==========================================
                    INFORMACIÓN PRINCIPAL
                ========================================== */}

                <div className="song-main">
                  <div className="song-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="song-cover">
                    <motion.div
                      className={`vinyl-disc ${
                        isSelected
                          ? "vinyl-disc-playing"
                          : ""
                      }`}
                      animate={
                        isSelected
                          ? { rotate: 360 }
                          : { rotate: 0 }
                      }
                      transition={
                        isSelected
                          ? {
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear",
                            }
                          : {
                              duration: 0.3,
                            }
                      }
                    >
                      <div className="vinyl-grooves"></div>

                      <div className="vinyl-label">
                        <span>♥</span>
                      </div>

                      <div className="vinyl-center"></div>
                    </motion.div>
                  </div>

                  <div className="song-info">
                    <h2>{song.title}</h2>

                    <p>{song.artist}</p>

                    <span className="song-year">
                      {song.year}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleSongClick(song.id)
                    }
                    className="song-button"
                  >
                    {isSelected
                      ? "Cerrar"
                      : "Escuchar"}

                    <span>
                      {isSelected ? "×" : "▶"}
                    </span>
                  </button>
                </div>

                {/* ==========================================
                    CONTENIDO EXPANDIDO
                ========================================== */}

                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                        y: -15,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        y: -15,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="song-expanded"
                    >
                      {/* ==================================
                          TARJETA DE YOUTUBE
                      ================================== */}

                      <div className="youtube-redirect-card">
                        <div className="youtube-floating-note note-one">
                          ♪
                        </div>

                        <div className="youtube-floating-note note-two">
                          ♫
                        </div>

                        <div className="youtube-floating-heart">
                          ♥
                        </div>

                        <div className="youtube-redirect-content">
                          <div className="youtube-play-icon">
                            <span>▶</span>
                          </div>

                          <span className="youtube-eyebrow">
                            🎵 Una canción para ti
                          </span>

                          <h3>{song.title}</h3>

                          <p>
                            {song.artist}
                            {song.year
                              ? ` · ${song.year}`
                              : ""}
                          </p>

                          <a
                            href={song.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="youtube-redirect-button"
                            onClick={(e) =>
                              e.stopPropagation()
                            }
                          >
                            <span className="button-play">
                              ▶
                            </span>

                            Escuchar en YouTube

                            <span className="button-arrow">
                              ↗
                            </span>
                          </a>

                          <small>
                            Se abrirá en una nueva pestaña
                          </small>
                        </div>
                      </div>

                      {/* ==================================
                          MENSAJE PERSONAL
                      ================================== */}

                      <div className="song-message">
                        <span className="eyebrow">
                          💌 Por qué te la dedico
                        </span>

                        <h3>
                          Esta canción me hace pensar en ti
                        </h3>

                        <p>{song.message}</p>

                        <div className="song-love">
                          ♥
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Songs;