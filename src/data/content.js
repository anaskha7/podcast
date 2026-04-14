export const siteMeta = {
  title: "Debate sobre la Copa de África 2025",
  shortTitle: "Podcast CAN 2025",
  author: "Anas Kharbouch",
  publicUrl: "https://podcast-react-anas.vercel.app",
  repoUrl: "https://github.com/anaskha7/podcast",
  fullEpisodeSrc: "/media/episodio-can-2025.mp3",
  promoVideoSrc: "/media/promo-video.mp4",
  promoPosterSrc: "/media/promo-poster.png"
};

export const projectOverview = [
  {
    title: "Podcast integrado",
    text: "La web reúne el audio principal, tres capítulos separados y la transcripción completa en la misma interfaz."
  },
  {
    title: "Promoción integrada",
    text: "El material promocional está dentro de la propia página mediante un vídeo reproducible sin salir de la web."
  },
  {
    title: "Accesibilidad básica",
    text: "Se ha trabajado la estructura semántica, la navegación con teclado, el foco visible, los textos claros y el contraste."
  }
];

export const chapters = [
  {
    title: "Capítulo 1",
    duration: "Parte inicial",
    description: "Primer bloque del debate, con las primeras opiniones sobre laterales, intensidad y favoritismos.",
    src: "/media/capitulo-1.mp3"
  },
  {
    title: "Capítulo 2",
    duration: "Parte central",
    description: "Comparación entre selecciones y análisis del nivel de Marruecos, Nigeria, Camerún y Argelia.",
    src: "/media/capitulo-2.mp3"
  },
  {
    title: "Capítulo 3",
    duration: "Parte final",
    description: "Cierre del episodio con pronósticos, semifinales y debate sobre el peso histórico de cada selección.",
    src: "/media/capitulo-3.mp3"
  }
];

export const auditBaseline = {
  performance: 57,
  accessibility: 100,
  bestPractices: 92,
  seo: 100,
  notes: [
    "La web inicial cargaba contenido pesado y tenía margen de mejora en rendimiento.",
    "La estructura básica ya era correcta, pero faltaban páginas reales y una arquitectura más clara.",
    "La experiencia no estaba separada en inicio, podcast y contacto."
  ]
};

export const auditFinal = {
  performance: 100,
  accessibility: 100,
  bestPractices: 100,
  seo: 100,
  notes: [
    "La home alcanza 100 en rendimiento, accesibilidad, buenas prácticas y SEO tras la reorganización final.",
    "La página de contacto también alcanza 100 en accesibilidad gracias a labels, validación por texto y aria-live.",
    "Se han corregido además detalles de publicación como favicon, robots.txt y sitemap."
  ]
};

export const reportContent = {
  introduction:
    "Este proyecto presenta un podcast sobre la Copa de África 2025 dentro de una web hecha con React. La idea principal ha sido integrar en un solo producto el audio, la promoción en vídeo, la transcripción y una navegación clara para cualquier persona usuaria.",
  pour: [
    "Perceptible: el contenido se presenta con texto claro, contraste suficiente, controles visibles y transcripción del audio.",
    "Operable: toda la navegación principal y el formulario se pueden usar con teclado y con foco visible.",
    "Comprensible: cada página tiene una estructura sencilla, títulos claros y mensajes de error escritos con texto.",
    "Robusto: la web usa HTML semántico, etiquetas asociadas a los campos del formulario y atributos ARIA para mensajes dinámicos."
  ],
  problems: [
    "La versión anterior estaba concentrada en una sola página y eso no encajaba con el requisito de tener inicio, podcast y contacto.",
    "Faltaba un formulario accesible con validación explicada por texto.",
    "No existía un botón dentro de la web para generar y descargar el informe en PDF.",
    "La navegación y la presentación visual necesitaban una estructura más profesional."
  ],
  fixes: [
    "Se ha creado una estructura de tres páginas con React Router y navegación principal.",
    "Se ha añadido una página del podcast con reproductor principal, tres capítulos y transcripción completa.",
    "Se ha añadido una página de contacto con campos obligatorios, labels, mensajes de error y aria-live.",
    "Se ha implementado la descarga del informe PDF desde la propia app.",
    "Se ha mejorado la presentación visual para que el resultado sea más serio y más claro."
  ],
  advancedImprovement:
    "La mejora avanzada aplicada es prefers-reduced-motion. Si una persona usuaria tiene activada la reducción de movimiento, la web elimina animaciones y desplazamientos suaves para que la experiencia sea más cómoda.",
  result:
    "El resultado final es una web publicada con URL pública en Vercel, código en GitHub, podcast integrado, vídeo promocional dentro de la web, transcripción visible, contacto accesible e informe descargable.",
  conclusion:
    "La práctica queda resuelta como un único producto final, no como piezas separadas. La web reúne contenido, accesibilidad, publicación online y documentación en un formato coherente."
};

export const transcript = [
  {
    time: "56:11",
    speaker: "Debate",
    text: "Es la verdad, bro. ¿Sabes quiénes son nuestros laterales, hermano? No lo sabes. ¿Por qué hablas? Abde, Ibrahim..."
  },
  {
    time: "56:16",
    speaker: "Debate",
    text: "Díaz van a aprovechar que los laterales son mucho más débiles que la calidad que tienen ellos."
  },
  {
    time: "56:26",
    speaker: "Debate",
    text: "Ha dicho que lateral se va a comer a Brahim. Vale, tete, lo que tú digas. Mañana te lo demuestro."
  },
  {
    time: "56:32",
    speaker: "Debate",
    text: "Mañana. Ya veremos el desenlace, chavales. Ya veremos."
  },
  {
    time: "56:37",
    speaker: "Debate",
    text: "Sí, ven a defender. Defiende, defiende. El que sabe de fútbol, el que sabe de fútbol."
  },
  {
    time: "56:48",
    speaker: "Debate",
    text: "No, no voy a atacar a nadie. Ya lo han atacado bastante, la verdad."
  },
  {
    time: "56:54",
    speaker: "Debate",
    text: "Después de todos estos debates, ¿qué os están pareciendo, tío? Leo, muy bien, tío. El capítulo está guapo."
  },
  {
    time: "57:06",
    speaker: "Debate",
    text: "Mira, mira, bro. Habla. No, no, tú habla. A ver, argumenta, argumenta."
  },
  {
    time: "57:11",
    speaker: "Debate",
    text: "Paso directamente a cómo estás viendo. Me has sorprendido el egipcio, la verdad. Ha defendido, ha hecho un cuatro contra uno bastante cambiado."
  },
  {
    time: "57:24",
    speaker: "Debate",
    text: "Acepto que ha ganado, pero no era un cuatro contra uno. La palabra más repetida, no vamos a entrar."
  },
  {
    time: "57:35",
    speaker: "Debate",
    text: "Es uno contra uno y habéis entrado todos. Yo le dije: tú eres el que más ha entrado."
  },
  {
    time: "57:40",
    speaker: "Debate",
    text: "Yo soy neutral, hermano. Yo soy neutral. Bueno, bueno, bueno."
  },
  {
    time: "57:45",
    speaker: "Debate",
    text: "La verdad que la estoy disfrutando. Marruecos no voy a decir que está jugando bien, pero está cumpliendo."
  },
  {
    time: "57:56",
    speaker: "Debate",
    text: "Si tienes calidad e igualas la intensidad, se nota esa calidad mucho más."
  },
  {
    time: "58:01",
    speaker: "Debate",
    text: "Por eso el otro día contra Camerún me sorprendió bastante, porque vi Marruecos bastante intenso, corrían bastante."
  },
  {
    time: "58:14",
    speaker: "Debate",
    text: "Cuando son jugadores de Europa vienen a pasearse porque dicen: no, esto es África, no sé qué, no se lo toman tan en serio."
  },
  {
    time: "58:19",
    speaker: "Debate",
    text: "Entonces cuando se lo toman en serio se nota muchísimo más. Por eso creo que Camerún sufrió bastante porque no tenían tiempo de pensar."
  },
  {
    time: "58:30",
    speaker: "Debate",
    text: "Y contra Nigeria veo el partido, no voy a decir complicado, porque creo que Nigeria tiene bastantes jugadores muy buenos."
  },
  {
    time: "58:43",
    speaker: "Debate",
    text: "No voy a decir equipo porque no creo que sean equipo, pero creo que los centros que hacen con Osimhen nos pueden destrozar."
  },
  {
    time: "58:57",
    speaker: "Debate",
    text: "Tú no estás muy confiado para mañana, entonces no te veo muy confiado."
  },
  {
    time: "59:03",
    speaker: "Debate",
    text: "Creo que todos los primeros goles de Nigeria en todos los partidos han sido de centro y gol de cabeza de Osimhen."
  },
  {
    time: "59:15",
    speaker: "Debate",
    text: "¿No crees que por eso es neutralizable Nigeria? O sea, por el hecho de siempre empezar así."
  },
  {
    time: "59:22",
    speaker: "Debate",
    text: "Sí, pero ¿cómo lo defiendes? Yo, por ejemplo, si le doy punto a Marruecos, es que creo que individualmente la intensidad que tiene cada jugador y luego lo que se convierte en colectivo no lo tiene Nigeria."
  },
  {
    time: "59:35",
    speaker: "Debate",
    text: "Si Marruecos empuja adelante fuerte con la intensidad que tiene cada jugador, Nigeria no va a llegar a realizar esos centros."
  },
  {
    time: "59:52",
    speaker: "Debate",
    text: "Si Marruecos es valiente y sale de esa manera, yo creo que tumba a Nigeria. Si va a la contra los van a machacar."
  },
  {
    time: "1:00:03",
    speaker: "Debate",
    text: "Contra Argelia no han tirado a portería. Cada balón que tenían se lo quitaban. Juegan muy en equipo."
  },
  {
    time: "1:00:16",
    speaker: "Debate",
    text: "¿Antes del partido de Argelia te había convencido Nigeria? Nigeria sí convenció desde el principio."
  },
  {
    time: "1:00:29",
    speaker: "Debate",
    text: "A mí del todo no, hasta el partido contra Argelia yo no vi que fuera un equipo equilibrado totalmente."
  },
  {
    time: "1:00:36",
    speaker: "Debate",
    text: "Los primeros partidos te acepto que el ataque perfecto, pero desde el medio para atrás no valía. Cualquier equipo bien armado detrás le revienta."
  },
  {
    time: "1:00:54",
    speaker: "Debate",
    text: "¿Tú no crees que Argelia después de hacer 120 minutos? No es excusa, pero hay un factor que puede hacer que juegues así."
  },
  {
    time: "1:01:11",
    speaker: "Debate",
    text: "Yo creo que el físico puede hacer que un equipo baje el nivel muchísimo."
  },
  {
    time: "1:01:27",
    speaker: "Debate",
    text: "Desde el minuto cero hasta el 90 estaban frescos y no llegaban. Ahí ha habido una diferencia de nivel abismal."
  },
  {
    time: "1:01:40",
    speaker: "Debate",
    text: "Yo creo que los de Camerún no podían hablar de árbitros porque los han bañado."
  },
  {
    time: "1:01:45",
    speaker: "Debate",
    text: "A ver, no, el partido de Marruecos no creo que fuera un baño. Para mí futbolísticamente sí fue un baño."
  },
  {
    time: "1:02:04",
    speaker: "Debate",
    text: "Para mí fue un baño cuando un equipo te somete así. Cuando el rival tiene el balón y tú no puedes ni llegar a su campo."
  },
  {
    time: "1:02:27",
    speaker: "Debate",
    text: "¿Estás viendo, Anas, un mejor fútbol en esta edición? Claro, porque los campos condicionan un poco."
  },
  {
    time: "1:02:46",
    speaker: "Debate",
    text: "Muchos dicen que Marruecos está siendo ayudada. Hay cosas que sí veo que chirrían, como el primer penalti."
  },
  {
    time: "1:03:05",
    speaker: "Debate",
    text: "Penalti de Amrabat contra Mali en el último minuto. El árbitro no se puede equivocar, hay VAR."
  },
  {
    time: "1:03:17",
    speaker: "Debate",
    text: "¿Piensas que Marruecos está siendo favorecido? Obviamente sí. Yo creo que sí, un poco."
  },
  {
    time: "1:03:41",
    speaker: "Debate",
    text: "A ver, chicos, las cosas como son. Siempre ha sido así. No será porque este año sea en Marruecos."
  },
  {
    time: "1:04:03",
    speaker: "Debate",
    text: "¿Tú cómo lo ves siendo marroquí? De objetivo, por favor. En algunos partidos sí que ha habido cierto favor."
  },
  {
    time: "1:04:14",
    speaker: "Debate",
    text: "Para mí en Camerún hay un penalti muy claro en el primer tiempo. En esas dos jugadas sí que huele un poco raro."
  },
  {
    time: "1:04:32",
    speaker: "Debate",
    text: "Con todo esto, ¿tú crees que la CAN sale de Marruecos? Yo creo que no. Imposible. La ganáis."
  },
  {
    time: "1:04:45",
    speaker: "Debate",
    text: "De momento la copa se queda. ¿Qué le pasa a esta? Ahora habla."
  },
  {
    time: "1:05:01",
    speaker: "Debate",
    text: "Está siendo más objetivo. A ver, el penalti es penalti, porque más que nada iba hacia una dirección y cambia."
  },
  {
    time: "1:05:21",
    speaker: "Debate",
    text: "Si él está parado, mete el pie para quitar el balón y el otro alza el pie para cruzar y adelantarlo, chocan."
  },
  {
    time: "1:05:52",
    speaker: "Debate",
    text: "Alex, entonces porra. Semifinal y final. ¿A quién ves? Obviamente a tu equipo."
  },
  {
    time: "1:06:03",
    speaker: "Debate",
    text: "Yo creo que Marruecos gana 2-1. No quiero ver prórrogas, la verdad."
  },
  {
    time: "1:06:16",
    speaker: "Debate",
    text: "Veo imposible que en ese partido no encajemos. Nuestra peor parte es la defensa y lo mejor suyo la delantera."
  },
  {
    time: "1:06:39",
    speaker: "Debate",
    text: "Leo, el más objetivo, diciendo tú aquí el que no tiene equipo. Yo lo veo muy confiados con Nigeria."
  },
  {
    time: "1:06:58",
    speaker: "Debate",
    text: "Todo el mundo considera que Nigeria está muy por encima, bro. Yo tampoco la he visto tan por encima."
  },
  {
    time: "1:07:15",
    speaker: "Debate",
    text: "Yo a Nigeria no la veo. ¿Tú a quién ves entonces? Menos a Senegal, a todos."
  },
  {
    time: "1:07:28",
    speaker: "Debate",
    text: "Senegal no ha tenido un partido así difícil, brillante tampoco, contra un rival complicado."
  },
  {
    time: "1:07:44",
    speaker: "Debate",
    text: "No me has dicho la porra de la final. Por eso mismo yo creo que va a llegar Senegal, ¿vale? Y pongo un para Marruecos."
  },
  {
    time: "1:08:00",
    speaker: "Debate",
    text: "No ha tenido. Mira, dime con qué selección sólida habéis jugado fuerte."
  },
  {
    time: "1:08:27",
    speaker: "Debate",
    text: "Congo no es fácil. Nigeria no pudo contra ellos y se van ellos al Mundial."
  },
  {
    time: "1:08:57",
    speaker: "Debate",
    text: "Te he preguntado qué selecciones son sólidas, con qué selección habéis jugado fuerte."
  },
  {
    time: "1:09:09",
    speaker: "Debate",
    text: "No hemos jugado con una selección que tú digas. Pero Camerún y Marruecos ha tenido los golpes."
  },
  {
    time: "1:09:21",
    speaker: "Debate",
    text: "Camerún venía de meter tres goles y veníais todos diciendo que cuidado con Camerún y ahora no es mejor."
  },
  {
    time: "1:09:40",
    speaker: "Debate",
    text: "Antes del partido Marruecos-Camerún y Nigeria-Argelia casi todo el mundo daba por favorita a Argelia y Camerún."
  },
  {
    time: "1:09:57",
    speaker: "Debate",
    text: "Para mí Camerún tiene un nivel más alto de todos los equipos."
  },
  {
    time: "1:10:09",
    speaker: "Debate",
    text: "Ahora mismo en África, Marruecos y Senegal, cualquiera que juegue contra ellos, los dos son favoritos."
  },
  {
    time: "1:10:22",
    speaker: "Debate",
    text: "Senegal-Marruecos. Ya lo ha dicho. No, no, el nivel realmente de estos dos equipos que son los grandes de África."
  },
  {
    time: "1:10:34",
    speaker: "Debate",
    text: "Para mí juega mejor Senegal, muchísimo mejor Senegal que Marruecos."
  },
  {
    time: "1:10:45",
    speaker: "Debate",
    text: "Lo único que me hace dudar es que Senegal no ha tenido un equipo que te diga: todo lo que ha tenido de problemas Senegal es porque lo ha hecho él mismo."
  },
  {
    time: "1:10:59",
    speaker: "Debate",
    text: "Senegal no jugó con el 100% nunca. Cuando quieren se meten y ganan el partido."
  },
  {
    time: "1:11:10",
    speaker: "Debate",
    text: "Eso es lo que puede hacer que a lo mejor te toque Egipto, te meten un gol y se acabó el partido."
  },
  {
    time: "1:11:22",
    speaker: "Debate",
    text: "Por eso el otro día Marruecos me sorprendió tanto, por sacar ese nivel de intensidad porque es lo que cuesta."
  },
  {
    time: "1:11:34",
    speaker: "Debate",
    text: "Si Senegal saca ese nivel de intensidad y juega al nivel que tiene, se va a notar la diferencia."
  },
  {
    time: "1:11:46",
    speaker: "Debate",
    text: "Aún no habéis visto al mejor Senegal. Ya lo sé, no hemos jugado al 100%."
  },
  {
    time: "1:11:58",
    speaker: "Debate",
    text: "Lo has dicho mil veces. Vamos a ser los campeones de esta copa. Nos la llevamos a casa."
  },
  {
    time: "1:12:15",
    speaker: "Debate",
    text: "¿Tú qué opinas sobre esa declaración? Está claro. Repítelo. Vamos a ser los campeones de esta Copa Africana."
  },
  {
    time: "1:12:33",
    speaker: "Debate",
    text: "Y si Senegal gana dos seguidas, hay que callarse la boca."
  },
  {
    time: "1:12:41",
    speaker: "Debate",
    text: "Yo convencido. Yo Egipto no quiero que la gane. Ya tienen bastante."
  },
  {
    time: "1:12:59",
    speaker: "Debate",
    text: "Yo prefiero antes a Senegal en la final que a Egipto."
  },
  {
    time: "1:13:10",
    speaker: "Debate",
    text: "Si llega Senegal-Marruecos, la gente va a ver el partido."
  },
  {
    time: "1:13:21",
    speaker: "Debate",
    text: "Habéis ganado una copa y os creéis los reyes. Tenemos siete. Somos realistas."
  },
  {
    time: "1:13:38",
    speaker: "Debate",
    text: "Nosotros perdemos mañana, da el caso hipotético. El primer nombre que va a dar miedo es Egipto."
  },
  {
    time: "1:13:51",
    speaker: "Debate",
    text: "Esto es como el Real Madrid en Europa. Da igual lo que le digas."
  },
  {
    time: "1:14:02",
    speaker: "Debate",
    text: "Las cosas son como son. Ganar una copa te hace campeón; ganar siete es leyenda."
  },
  {
    time: "1:14:16",
    speaker: "Debate",
    text: "Podéis decir que son los reyes Marruecos y Egipto, pero ahora mismo a nivel de selección Senegal y Marruecos están por encima de Egipto."
  },
  {
    time: "1:14:38",
    speaker: "Debate",
    text: "No te lo niego. Competir competís, historia tenéis, pero ahora mismo también estáis en semifinales."
  },
  {
    time: "1:14:52",
    speaker: "Debate",
    text: "No, pero cuando hablamos de selección... Moja, ¿estás de vuelta?"
  }
];
