import MercurioImg from '../images/Mercurio.png';
import VenusImg from '../images/Venus.png';
import TerraImg from '../images/Terra.png';
import MarteImg from '../images/Marte.png';
import JupiterImg from '../images/Jupiter.png';
import SaturnoImg from '../images/Saturno.png';
import Uranoimg from '../images/Urano.png';
import Netunoimg from '../images/Netuno.png';

const infoMercurio = 'Mercúrio é o primeiro planeta do sistema solar, a contar a partir da proximidade com o Sol, distando-se em apenas 57,9 milhões de quilômetros da estrela em média. Com um diâmetro de 4878 km, é o menor entre os planetas do nosso sistema solar e também o que realiza mais rapidamente o seu movimento de translação, executado a uma velocidade de aproximadamente 47,87 km/s, levando, assim, 88 dias para completar sua volta ao redor do sol.';
const infoVenus = 'Vênus é um planeta do sistema solar, localiza-se no segundo lugar a partir do sol, além disso, é o sexto maior entre todos os outros planetas.\n\nVênus possui tamanho e massa semelhante a do planeta Terra, por isso os planetas citados eram considerados gêmeos, no entanto, as características parecidas se limitam à proporção corporal. Salvo esse ponto apresentado, os dois planetas são totalmente distintos, uma vez que Vênus não oferece condições para proliferação de vida.\n\nEm Vênus a atmosfera é muito compacta, formada por uma enorme quantidade de gás carbônico, por ser muito densa desenvolve um elevado efeito estufa que faz o planeta produzir altíssimas temperaturas. Onde os raios solares incidem de forma perpendicular na superfície do planeta as temperaturas atingem até 460ºC.\n\nOutra particularidade do planeta Vênus é quanto aos movimentos de rotação e translação. Para a realização total do primeiro movimento são necessários 243 dias (referente aos dias terrestres) e no segundo, 224 dias, dessa forma um ano em Vênus é menor que 1 dia.\n\nO planeta em questão já recebeu diversos nomes, como Lúcifer e Vésper, no Brasil é conhecido como Estrela Dalva. O planeta emite grande luz, diante desse fator é superado somente pela lua, por isso pode ser visualizado a olho nu.';
const infoTerra = 'É onde nois vive!';
const infoMarte = 'Marte é o quarto planeta mais próximo do Sol e o segundo menor planeta do sistema solar, depois de Mercúrio, sendo consideravelmente menor que o planeta Terra.\n\nPossui duas pequenas luas de formato irregular: Fobos (medo) e Deimos (pânico). Seus nomes derivam da mitologia grega e representam os filhos de Ares (Marte) e Afrodite (Vênus).\n\nApresenta uma coloração avermelhada, pela presença de óxido de ferro na sua superfície. Por isso, recebeu o nome de Marte, em homenagem ao deus romano da guerra.\n\nMarte é um dos planetas mais estudados do sistema solar. Podendo ser visto da Terra a olho nu, ou seja, sem auxílio de um telescópio.\n\nA duração do dia em Marte aproxima-se do planeta Terra, com 24 horas e 37 minutos, embora o ano marciano tenha duração de 687 dias terrestres.';
const infoJupiter = 'Júpiter é o maior planeta do Sistema Solar, o quinto a partir do Sol e o quarto corpo celeste mais brilhante no céu – os demais são o Sol, a Lua e Vênus. A massa é 318 vezes superior à da Terra e maior que todos os planetas do Sistema Solar juntos.\n\nTem cerca de 143 mil quilômetros de diâmetro no equador, o que equivale a 11 vezes mais que o diâmetro da Terra. É orbitado por 67 satélites naturais, situando-se a uma distância média de 778,3 milhões de quilômetros do Sol.';
const infoSaturno = 'É um instrutor da trybe';
const infoUrano = 'O planeta Urano é o terceiro maior do Sistema Solar e está posicionado na sétima órbita a partir do Sol. Formado principalmente por gases e fluidos, Urano não possui uma superfície sólida como a Terra. Sua estrutura é composta, ainda, por sistemas de anéis que orbitam ao seu redor, os quais são menos brilhantes do que os de outros planetas, como Saturno. Ao todo, Urano possui 27 luas conhecidas. Apenas uma sonda espacial visitou o planeta, sendo a maior parte das descobertas ao seu respeito feita com o auxílio de telescópios.';
const infoNetuno = 'Netuno é um planeta pertencente ao Sistema Solar. Trata-se do oitavo mais distante do Sol, o que confere a ele temperaturas muito baixas, em torno de -200 °C. O planeta Netuno é classificado como um gigante de gelo em função de sua composição, que é feita por gases como hélio, metano, hidrogênio e amônia, e da ausência de uma superfície sólida. Netuno foi descoberto em 1846 e, desde então, foi muito estudado por astrônomos de todo o mundo. Apesar disso, é ainda um planeta pouco explorado.';

const Planets = [
  { name: 'Mercúrio', image: MercurioImg, info: infoMercurio },
  { name: 'Vênus', image: VenusImg, info: infoVenus },
  { name: 'Terra', image: TerraImg, info: infoTerra },
  { name: 'Marte', image: MarteImg, info: infoMarte },
  { name: 'Júpiter', image: JupiterImg, info: infoJupiter },
  { name: 'Saturno', image: SaturnoImg, info: infoSaturno },
  { name: 'Urano', image: Uranoimg, info: infoUrano },
  { name: 'Netuno', image: Netunoimg, info: infoNetuno },
];

export default Planets;
