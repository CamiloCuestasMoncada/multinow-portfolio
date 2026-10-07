// Textos del juego compartidos por la página del juego y su press kit.
// Solo hechos confirmados por el equipo: no agregar mecánicas ni datos sin validar.
import type { Lang } from '../i18n/utils';

export const STEAM_URL = 'https://store.steampowered.com/app/4826960/Honey_Im_an_Agent/';
export const TRAILER_ID = 'QMAFuDrRqJk';

export const honeyText: Record<Lang, {
  tagline: string;
  sub: string;
  about1: string;
  about2: string;
  about2Em: string;
  about3: string;
  phases: { titulo: string; desc: string }[];
  features: { title: string; desc: string }[];
}> = {
  es: {
    tagline: 'Un agente secreto por accidente con una esposa que no debe enterarse',
    sub: 'Un hombre inofensivo se convierte, sin quererlo, en agente secreto. Para mantener su doble vida tiene que escaparse de casa por las noches sin que su esposa lo note, cumplir misiones, balancearse con su gancho de agarre y defenderse con un paraguas que también le sirve de paracaídas.',
    about1: 'es un juego original de Multinow: una aventura 2D en pixel art que combina sigilo táctico y comedia con ambientación de cine noir.',
    about2: 'El protagonista es un hombre común y de aspecto inofensivo que, por accidente, termina metido en misiones peligrosas como agente secreto. Durante el juego lo verás evolucionar como personaje, pero su reto más grande sigue siendo el mismo:',
    about2Em: 'que su esposa nunca descubra a qué se dedica.',
    about3: 'Cada misión tiene dos partes, las dos con sigilo, acertijos ligeros y humor:',
    phases: [
      { titulo: 'La Infiltración Casera', desc: 'En plena noche, sal de tu casa a escondidas usando el sigilo para que tu esposa no se dé cuenta de que no estás.' },
      { titulo: 'La Misión de Campo',     desc: 'Ya en las calles del bajo mundo, recorre los escenarios balanceándote con el gancho de agarre, resuelve acertijos y enfréntate a los enemigos con la única arma que tienes: un paraguas.' },
    ],
    features: [
      { title: 'Doble Vida y Humor Ácido',      desc: 'La historia junta el riesgo de enfrentarse a criminales con los secretos que hay que guardar en casa, y de esa mezcla sale el humor.' },
      { title: 'Mecánica de Gancho y Paraguas', desc: 'Muévete por los escenarios balanceándote con el gancho de agarre. El paraguas cumple dos funciones: paracaídas y arma de combate.' },
      { title: 'Sigilo Táctico y Tensión',      desc: 'Aprende los patrones de movimiento, mantente fuera de los conos de visión y decide bien tu camino, tanto en la calle como dentro de casa.' },
      { title: 'Acertijos y Puzzles Ligeros',   desc: 'Entre momentos de tensión aparecen desafíos de lógica, tanto en casa como durante la misión de campo.' },
      { title: 'Estética Noir Pixelada',        desc: 'Pixel art con ambientación noir, en homenaje a los juegos de la vieja escuela. Pensado para disfrutarse con mando.' },
      { title: 'Infiltración Casera',           desc: 'Antes de cada misión hay que salir de casa a escondidas en plena noche, con todo el sigilo posible para que tu esposa no se dé cuenta.' },
    ],
  },
  en: {
    tagline: 'An accidental secret agent with a wife who must never find out',
    sub: 'A harmless man becomes a secret agent without meaning to. To keep up his double life, he has to sneak out of the house at night without his wife noticing, complete missions, swing around with his grappling hook and defend himself with an umbrella that doubles as a parachute.',
    about1: 'is an original game by Multinow: a 2D pixel art adventure that combines tactical stealth and comedy with a film noir setting.',
    about2: 'The protagonist is an ordinary, harmless-looking man who accidentally ends up on dangerous missions as a secret agent. Throughout the game you\'ll see him grow as a character, but his biggest challenge stays the same:',
    about2Em: 'making sure his wife never finds out what he does.',
    about3: 'Every mission has two parts, both with stealth, light puzzles and humor:',
    phases: [
      { titulo: 'The Home Infiltration', desc: 'In the dead of night, sneak out of your house using stealth so your wife doesn\'t notice you\'re gone.' },
      { titulo: 'The Field Mission',     desc: 'Out on the streets of the underworld, make your way through each level swinging with your grappling hook, solve puzzles and take on enemies with the only weapon you have: an umbrella.' },
    ],
    features: [
      { title: 'Double Life and Dark Humor',     desc: 'The story mixes the risk of facing criminals with the secrets you have to keep at home, and that mix is where the humor comes from.' },
      { title: 'Grappling Hook and Umbrella',    desc: 'Move through each level by swinging with the grappling hook. The umbrella serves two purposes: parachute and combat weapon.' },
      { title: 'Tactical Stealth and Tension',   desc: 'Learn movement patterns, stay out of vision cones and choose your path wisely, both on the street and inside the house.' },
      { title: 'Light Riddles and Puzzles',      desc: 'Between tense moments, logic challenges show up, both at home and during the field mission.' },
      { title: 'Pixelated Noir Aesthetic',       desc: 'Pixel art with a noir setting, as a tribute to old-school games. Designed to be enjoyed with a controller.' },
      { title: 'Home Infiltration',              desc: 'Before every mission you have to sneak out of the house in the dead of night, as stealthily as possible so your wife doesn\'t notice.' },
    ],
  },
};
