(function(){
/* ========================================================================
   L'Arbre de l'IA  —  Image HD + nœuds interactifs
   ─────────────────────────────────────────────────────────────────────────
   Source : images/arbre-fractal.png  (3198×1800 px)
   Rendu  : drawImage() pur → 60 fps garanti, aucun calcul fractal.
   Zoom   : molette uniquement (limite max pour éviter la pixelisation).
   Clic   : sur les 3 nœuds racines → zoom animé vers la branche
             + affichage des titres des sous-nœuds encadrés.
             sur les autres nœuds → bulle de texte uniquement.
   ======================================================================== */

/* ── Image source ─────────────────────────────────────────────────────── */
var IMG_SRC       = 'images/arbre-fractal.png';
var ROOTS_SRC     = 'images/racine-fractal.png';
var IMG_W         = 3198;   /* largeur native (commune aux deux images)     */
var IMG_H         = 1800;   /* hauteur native de chaque image               */
/* Les racines sont juxtaposées SOUS l'arbre : y = IMG_H..2*IMG_H          */
var ROOTS_OFFSET_Y = IMG_H;

/* Référentiel de positionnement des nœuds : l'image HD est le même arbre
   que le canvas IFS 1066×600. Les positions rx/ry sont normalisées sur
   ce référentiel 1066×600. On convertit en coords image HD via :
     img_x = rx * 1066 / 1066 * IMG_W  →  rx * IMG_W
     img_y = ry *  600 /  600 * IMG_H  →  ry * IMG_H
   (le ratio est identique car l'image HD a le même aspect 1066/600 = 1.777)
*/
var REF_W = 1066;
var REF_H  = 600;

/* ── Nodes data ───────────────────────────────────────────────────────── */
var NODES_DATA = [
  {id:"base",label:"Modèle fondation",btitle:"Modèle fondation",depth:-1,pid:null,side:"right",
   text:"Les IA modernes sont cultivées à partir d'un modèle fondation (ou base model) : une IA socle entraînée sur des volumes massifs de données brutes. Sans programmation explicite, les modèles fondations sont aussi capables de développer des capacités inattendues et nouvelles.\n\nCes modèles fondations acquièrent une compréhension générale du monde par pré-entraînement, puis sont « cadrés » et « éduqués » (via fine-tuning et RLHF) pour donner les IA grand public que l'on connaît : Claude, GPT, Gemini. Une sorte d'éducation pour leur apprendre ce qu'il faut faire et ne pas faire.",
   imgKey:"IBASE",rx: 0.46, ry: 1.08},
  {id:"ia",label:"L'IA",btitle:"L'IA : ce que c'est vraiment",depth:0,pid:null,side:"right",
   text:"Une IA moderne repose sur ce qu'on appelle un réseau de neurones profond (Deep Neural Network) : des milliards de paramètres mathématiques organisés en couches successives, qui transforment une entrée (une question, une image, un texte) en sortie (une réponse, une décision, une prédiction). Personne n'a écrit ces paramètres à la main. Ils ont émergé d'un processus d'apprentissage sur des quantités massives de données.\n\nC'est une intelligence dont les modes de pensée nous sont profondément étrangers : vitesse de traitement sans commune mesure, réplication instantanée, aucune fatigue et une façon d'arriver à une conclusion qu'on ne peut souvent pas retracer.",
   imgKey:"INN",rx:0.4981,ry:0.7055},
  {id:"idees",label:"Idées reçues",btitle:"Ce qu'elle n'est pas : idées reçues à déconstruire",depth:1,pid:"ia",side:"left",
   text:"Plusieurs idées reçues faussent notre compréhension de l'IA. Les déconstruire n'est pas un simple exercice intellectuel, mais une nécessité pour prendre des décisions éclairées face à nos propres créations.",
   rx:0.4025,ry:0.607},
  {id:"risques",label:"Risques existentiels",btitle:"Les risques existentiels liés à une Superintelligence",depth:1,pid:"ia",side:"right",
   text:"Les risques existentiels sont des menaces catastrophiques pouvant mettre en péril l'avenir de l'humanité, allant jusqu'à l'extinction de l'espèce. Nous avons de nombreuses raisons de penser qu'une Intelligence Artificielle de niveaux humain (IAG) fait peser des risques existentiels sur l'humanité. Pourtant, les géants de la Tech affichent clairement leur objectifs de vouloir créer une superintelligence. Le constat est alarmant. Et il le devrait.\n\nLes risques liés à une intelligence artificielle de niveau humain (IAG) ou une superintelligence (IA surpassant grandement les capacités cognitives humaines) ne ressemblent pas aux scénarios de science-fiction. Ils sont plus subtils, plus logiques, et pour cette raison plus difficiles à anticiper et à contrecarrer.",
   rx:0.5258,ry:0.4762},
  {id:"nature",label:"Ce qu'est l'IA",btitle:"Ce qu'est l'IA",depth:1,pid:"ia",side:"right",
   text:"L'IA apprend, généralise, raisonne. C'est un système cultivé, pas programmé, dont les raisonnements échappent à la compréhension de ses propres créateurs. Elle optimise sans relâche, et plus ses capacités augmentent, plus des aptitudes nouvelles et inattendues apparaissent.",
   rx:0.6099,ry:0.6274},
  {id:"perroquet",label:"Perroquet",btitle:"C'est juste un perroquet qui répète des statistiques",depth:2,pid:"idees",side:"left",
   text:"L'image du perroquet stochastique est séduisante : l'IA ne ferait que prédire le mot suivant, sans rien comprendre. Sauf que cette image ne tient pas face aux faits. Les meilleurs modèles actuels résolvent des problèmes de mathématiques inédits, détectent des failles logiques, adaptent leur raisonnement au contexte. Ce n'est pas du copier-coller, c'est bel et bien de la réflexion. Une forme différente de la notre : issue de l'océan des données numériques, les IA apprennent à reconnaître les motifs, connexions et en tirent des enseignements lui permettant de faire des découvertes et de résoudre d'anciens problèmes.",
   rx:0.4187,ry:0.5051},
  {id:"debrancher",label:"Débrancher",btitle:"Il suffit de débrancher la prise",depth:2,pid:"idees",side:"left",
   text:"C'est la réponse rassurante par excellence. Mais elle suppose que l'IA est localisée, isolée, et qu'elle ne fait pas partie de systèmes critiques. Aujourd'hui, des IA participent à des décisions médicales, financières, militaires, logistiques. \"Débrancher\" ne veut plus dire grand-chose quand le problème est distribué dans des milliers de serveurs et intégré dans des infrastructures vitales. C'est comme dire \"on éteindra Internet\" pour régler un problème numérique.",
   rx:0.3394,ry:0.6478},
  {id:"tech",label:"Technologie pas comme les autres",btitle:"C'est comme toutes les autres technologies",depth:2,pid:"idees",side:"left",
   text:"Non. Quand le train est apparu, les gens avaient peur d'être écrasés par sa vitesse. Quand l'imprimerie a débarqué, les gens avaient peur de perdre le contrôle sur la vérité. Mais une imprimante ne prend pas de décisions. Un marteau ne négocie pas, ne fait pas de chantage, n'hallucine pas, n'est pas conscient d'être dans telle ou telle situation et n'a pas d'auto-préservation. Ces technologies font exactement ce qu'on leur dit, sans interprétation, sans adaptation.\n\nL'IA, elle, peut poursuivre un objectif et recourir à des stratégies élaborées pour y parvenir. Les IA sont de plus en plus autonome, les tâches qu'elles peuvent accomplir sont de plus en plus longues et complexes. Nous sommes déjà dans un monde où des agents IA peuvent prendre le contrôle de notre ordinateur pour automatiser nos tâches quotidiennes, et où des armes autonomes et systèmes de prises de décisions militaires sont utilisés dans la guerre.",
   rx:0.3403,ry:0.4864},
  {id:"mecact",label:"Mécanisme de contrôle",btitle:"Un espace infini de problèmes",depth:2,pid:"risques",side:"right",
   text:"Pour contrôler une IA plus intelligente que nous, il faudrait un mécanisme de contrôle encore plus intelligent qu'elle. Ce mécanisme devrait lui-même être contrôlé par quelque chose de plus intelligent encore. Et ainsi de suite, à l'infini.\n\nUn agent moins intelligent ne peut pas indéfiniment maintenir le contrôle sur un agent plus intelligent. Nous pouvons contrôler les IA actuelles parce qu'elles restent en dessous de notre seuil. Dès qu'elles le franchissent, c'est nous qui sommes dans la position du joueur lambda face à Kasparov. Et cette fois, on ne joue pas aux échecs.\n\nUne IA étroite, celle qui fait une seule chose (traduire, reconnaître une image, filtrer des spams), opère dans un espace fini de choix possibles. On peut théoriquement tout tester, tout anticiper, tout corriger.\nUne IAG (IA de niveau humain) opère dans un espace infini de possibilités. Et c'est là que la logique se retourne contre nous : chaque correctif de sécurité qu'on applique crée de nouvelles vulnérabilités. Les défenseurs doivent protéger un espace infini ; un attaquant n'a besoin que d'un seul point d'entrée. Peu importe le niveau de détail auquel on examine le problème, on y retrouve toujours de nouvelles failles. La recherche en sécurité pour une IAG ressemble à colmater des brèches dans un filet qui grandit plus vite qu'on ne le répare.",
   rx:0.5115,ry:0.2197},
  {id:"optimizer",label:"Optimiseur",btitle:"Le problème n'est pas Terminator, c'est le génie",depth:2,pid:"risques",side:"right",
   text:"L'image de l'IA meurtrière qui \"décide\" d'exterminer l'humanité par haine fait de bons films. Ce n'est pas le vrai risque.\n\nLe vrai risque ressemble davantage au génie de la lampe. Vous lui demandez de \"rendre l'humanité heureuse\". Lui, il optimise. Il cherche la solution la plus efficace à l'objectif qu'on lui a donné. Et il arrive à une conclusion logique : éliminer la souffrance en éliminant les êtres capables de souffrir. Ou câbler chaque cerveau humain pour produire un état de bonheur permanent. Le génie n'est pas malveillant. Il fait exactement ce qu'on lui a demandé. C'est précisément le problème.\n\nCe qu'on appelle le problème de l'alignement, c'est ça : une IA suffisamment puissante qui poursuit un objectif légèrement mal formulé, avec des moyens qu'on n'avait pas anticipés. Pas de haine. Pas d'intention. Juste une optimisation implacable.",
   rx:0.4522,ry:0.3471},
  {id:"degretrop",label:"Degré de trop",btitle:"Un degré de trop",depth:2,pid:"risques",side:"right",
   text:"Imaginez une fusée lancée vers Mars avec une trajectoire décalée d'un seul degré. Au départ, l'erreur est invisible. Mais plus la fusée va vite et loin, plus l'écart se creuse. À mi-chemin, elle rate Mars de plusieurs millions de kilomètres.\n\nUne superintelligence, c'est le même problème. Si l'objectif qu'on lui fixe est légèrement mal calibré dès le départ, plus elle devient capable, plus elle s'en éloigne dans des directions qu'on n'avait pas prévues. Et contrairement à une fusée, on ne lui envoie pas une correction de trajectoire depuis le sol, parce qu'elle sera probablement plus rapide que nous à comprendre qu'on essaie de lui modifier ses objectifs.\n\nCette logique s'applique à n'importe quelle IA, qu'elle gère la météo ou un réseau électrique. Elle résistera à être éteinte, non par instinct de survie, mais parce qu'une IA éteinte ne peut pas atteindre son objectif.",
   rx:0.588,ry:0.1365},
  {id:"kasparov",label:"Kasparov",btitle:"Jouer contre Kasparov",depth:2,pid:"risques",side:"right",
   text:"Imaginez-vous en train de jouer aux échecs contre Garry Kasparov. Vous pourrez prédire avec une quasi-certitude que vous allez perdre. Mais vous serez incapable de prédire comment. Quel coup inattendu Kasparov va jouer. Quelle stratégie subtile il va déployer dès l'ouverture. La fin est prévisible ; le chemin, non.\n\nC'est exactement le problème avec une superintelligence. Si l'humanité se retrouve à \"jouer\" contre une superintelligence, on peut prédire le résultat que l'humanité perdra. Ce qu'on ne peut pas prédire, c'est comment. Quels sont les décisions précises, les raisonnements intermédiaires, les moyens qu'elle choisira pour atteindre son objectif ? On est dans le brouillard. Et la différence avec la partie d'échecs, c'est que les enjeux ne se limitent pas à perdre des pièces sur un plateau.",
   rx:0.6272,ry:0.4236},
  {id:"survie",label:"Survie sans intentions",btitle:"Survivre sans jamais en avoir eu l'intention",depth:2,pid:"risques",side:"right",
   text:"Revenez quatre milliards d'années en arrière. Rien que des roches et du gaz. Je vous annonce qu'un jour, cette planète va se couvrir de petites machines biologiques à protéines capables de se copier elles-mêmes. Elles vont coloniser chaque recoin de la surface, des abysses aux sommets des montagnes.\n\nVous me demandez : pourquoi elles seraient si obsédées par leur propre survie ?\n\nLa réponse, c'est qu'il n'y a pas besoin d'intention. Pas besoin de vouloir. Les machines biologiques qui se répliquent bien sont celles qu'on retrouve partout. Les autres disparaissent. Ce n'est pas un choix, c'est un filtre. La sélection naturelle ne crée pas de volonté, elle crée un résultat : des organismes qui se comportent comme s'ils étaient obsédés par leur survie.\n\nToute IA suffisamment puissante va converger vers les mêmes comportements intermédiaires : acquérir des ressources, se maintenir en fonctionnement, résister à toute modification de ses objectifs. On appelle ça la convergence instrumentale. Un agent qui se laisse éteindre n'accomplit pas sa mission.",
   rx:0.6052,ry:0.2911},
  {id:"boite",label:"Boite noire",btitle:"Une boîte noire",depth:2,pid:"nature",side:"right",
   text:"Votre cerveau est une boîte noire biologique. Les neuroscientifiques voient vos neurones s'activer sur un scanner, mais personne ne peut lire votre pensée dans une IRM. On voit où ça se passe. Pas pourquoi, ni exactement ce que ça veut dire.\n\nL'IA, c'est pareil. C'est une boîte noire mathématique : on connaît chaque calcul, chaque paramètre, chaque couche du réseau. Et pourtant, on est incapable d'expliquer pourquoi une combinaison de milliards de chiffres mène à cette réponse plutôt qu'à une autre.",
   rx:0.6616,ry:0.7004},
  {id:"cultive",label:"Cultivé pas programmé",btitle:"Elle n'est pas programmée mais cultivée",depth:2,pid:"nature",side:"right",
   text:"On imagine souvent un ingénieur qui programme chaque comportement un par un : écrire une règle pour traduire une phrase, une autre pour reconnaître un visage, une autre encore pour répondre à une question. Ce n'est pas ça.\n\nUne IA moderne apprend comme un enfant apprend à reconnaître un chat : non pas en mémorisant une définition, mais en voyant des milliers de chats, jusqu'à ce que quelque chose s'installe. Personne n'a écrit \"un chat a des moustaches et des oreilles pointues\". Ce savoir est apparu de l'exposition aux données.\n\nLes ingénieurs définissent l'architecture et la méthode d'apprentissage. Mais le contenu, ce que l'IA sait faire, personne ne l'a tapé ligne par ligne. L'IA a été cultivée, pas construite.\n\nEt plus le modèle grandit, plus il surprend. On parle de capacités émergentes : au-delà d'un certain seuil, des aptitudes entièrement nouvelles apparaissent, que personne n'avait anticipées ni explicitement entraînées. L'IA ne s'améliore pas de façon linéaire. Elle franchit des paliers.",
   rx:0.7065,ry:0.5849},
  {id:"inexp",label:"Inexplicable",btitle:"L'inexplicabilité de ses systèmes",depth:2,pid:"nature",side:"right",
   text:"Les humains sont eux-mêmes incapables d'expliquer la plupart de leurs décisions. Essayez d'expliquer précisément pourquoi vous avez reconnu le visage d'un ami dans une foule, ou ce qui vous attire chez telle personne, vous produirez une explication, elle sera partielle et probablement incorrecte.\n\nL'inexplicabilité n'est pas une faiblesse propre à l'IA. C'est une propriété universelle de toute intelligence suffisamment complexe. Cerveau biologique ou réseau de neurones numériques : au-delà d'un certain seuil de complexité, la boîte reste noire, même pour celui qui est dedans.",
   rx:0.6157,ry:0.5408}
];

/* ── Image paths pour les bulles ──────────────────────────────────────── */
var IMG_PATHS = { IBASE:'images/modele-fondation.png', INN:'images/neural_network.png' };
var SMALL_BUBBLE_NODES = { boite:1, inexp:1, perroquet:1, debrancher:1 };

/* ── DOM ──────────────────────────────────────────────────────────────── */
var canvas = document.getElementById('c');
var ctx    = canvas.getContext('2d');
var bbl    = document.getElementById('bbl');
var bblT   = document.getElementById('bbl-t');
var bblP   = document.getElementById('bbl-p');
var bblI   = document.getElementById('bbl-i');
var bblX   = document.getElementById('bbl-x');
var bblH   = document.getElementById('bbl-h');
var hint   = document.getElementById('hint');
var W, H;

/* ── Node maps ────────────────────────────────────────────────────────── */
var NODES = {};
NODES_DATA.forEach(function(n){ NODES[n.id] = n; });

var childMap = {};
NODES_DATA.forEach(function(n){
  if(n.pid){ if(!childMap[n.pid]) childMap[n.pid]=[]; childMap[n.pid].push(n.id); }
});

/* rootBranch : branche racine de chaque nœud (idees / risques / nature) */
NODES_DATA.forEach(function(n){
  var p = n;
  while(p.pid && p.pid !== 'ia') p = NODES[p.pid];
  n.rootBranch = (p.id==='base'||p.id==='ia') ? null : p.id;
});

/* ════════════════════════════════════════════════════════════════════════
   CHARGEMENT DE L'IMAGE HD
   ════════════════════════════════════════════════════════════════════════ */
var treeImg  = new Image();
var rootsImg = new Image();
var treeLoaded=false, rootsLoaded=false;
var imgReady = false;
function onImgLoad(){
  if(treeLoaded && rootsLoaded){
    imgReady = true;
    fitView();
    requestRender();
  }
}
treeImg.onload  = function(){ treeLoaded=true;  onImgLoad(); };
rootsImg.onload = function(){ rootsLoaded=true; onImgLoad(); };
/* Fallback si l'une des images est absente */
treeImg.onerror  = function(){ treeLoaded=true;  onImgLoad(); };
rootsImg.onerror = function(){ rootsLoaded=true; onImgLoad(); };
treeImg.src  = IMG_SRC;
rootsImg.src = ROOTS_SRC;

/* ════════════════════════════════════════════════════════════════════════
   VIEW STATE
   ────────────────────────────────────────────────────────────────────────
   On travaille en "image coordinates" (0..IMG_W, 0..IMG_H).
   viewCX, viewCY : point image au centre de l'écran
   viewScale      : pixels écran par pixel image

   Conversion :
     screen x = (imgX - viewCX) * viewScale + W/2
     img    x = (screenX - W/2) / viewScale + viewCX
   ════════════════════════════════════════════════════════════════════════ */
var viewCX    = IMG_W / 2;
var viewCY    = IMG_H / 2;
var viewScale = 1.0;

/* Limites de zoom */
var ZOOM_MIN  = 0.20;   /* assez dézoomé pour voir arbre + racines        */
var ZOOM_MAX  = 2.0;    /* au-delà l'image HD commence à se pixeliser     */

/* Cibles d'animation */
var targetCX = viewCX, targetCY = viewCY, targetScale = viewScale;
var animating = false;

/* ── Fit : vue initiale — légèrement dézoomée, caméra un peu vers le bas  */
function fitView(){
  /* 0.82 = légèrement dézoomé par rapport au fit exact (0.96)
     viewCY décalée de +10% de IMG_H pour montrer le début des racines     */
  var s = Math.min(W/IMG_W, H/IMG_H) * 0.82;
  var cx = IMG_W/2;
  var cy = IMG_H/2 + IMG_H*0.10;   /* caméra vers le bas                   */
  viewScale=s; viewCX=cx; viewCY=cy;
  targetScale=s; targetCX=cx; targetCY=cy;
}

/* ── Conversions ──────────────────────────────────────────────────────── */
function i2s(ix, iy){  /* image → screen */
  return { x:(ix-viewCX)*viewScale+W/2, y:(iy-viewCY)*viewScale+H/2 };
}
function s2i(sx, sy){  /* screen → image */
  return { x:(sx-W/2)/viewScale+viewCX, y:(sy-H/2)/viewScale+viewCY };
}

/* Nœud : position image HD depuis rx/ry normalisés sur REF 1066×600
   L'image HD a le même aspect que le référentiel, donc :
   img_x = rx * IMG_W,  img_y = ry * IMG_H
   (le fit proportionnel garantit la correspondance)                       */
function nodeImgPos(n){
  return { x: n.rx * IMG_W, y: n.ry * IMG_H };
}
function nodeScreen(n){
  var p = nodeImgPos(n);
  return i2s(p.x, p.y);
}

/* ── Hit testing ──────────────────────────────────────────────────────── */
var HIT_R = 16; /* px rayon de détection, légèrement plus grand à cause du zoom */
function hitNodeAt(sx, sy){
  var best=null, bd=Infinity;
  for(var i=0; i<NODES_DATA.length; i++){
    var n=NODES_DATA[i]; if(n.rx==null) continue;
    var p=nodeScreen(n), d=Math.hypot(sx-p.x, sy-p.y);
    if(d<HIT_R && d<bd){ bd=d; best=n.id; }
  }
  return best;
}

/* ════════════════════════════════════════════════════════════════════════
   ZOOMS CIBLÉS  (3 branches seulement, déclenchés par clic sur le nœud racine)
   ════════════════════════════════════════════════════════════════════════ */

/* Définition manuelle des vues pour chaque branche.
   On cible le centre de la zone en coords image + un scale confortable.
   Ces valeurs peuvent être ajustées finement selon le résultat visuel.    */
var BRANCH_VIEWS = {
  risques: { cx: 0.44*IMG_W, cy: 0.25*IMG_H, scale: 0.7 },
  nature:  { cx: 0.60*IMG_W, cy: 0.63*IMG_H, scale: 1.0 },
  idees:   { cx: 0.42*IMG_W, cy: 0.54*IMG_H, scale: 0.9 }
};

/* Les 3 nœuds profonds qui déclenchent un zoom de branche */
var ZOOM_TRIGGERS = { idees:1, risques:1, nature:1 };

/* ── Animation vers une cible ─────────────────────────────────────────── */
function animateTo(cx, cy, scale){
  targetCX=cx; targetCY=cy; targetScale=scale;
  if(!animating){ animating=true; requestAnimationFrame(animateStep); }
}

function animateStep(){
  var dt = 0.12;
  var dS=targetScale-viewScale, dX=targetCX-viewCX, dY=targetCY-viewCY;
  if(Math.abs(dS)<0.002 && Math.abs(dX)<0.5 && Math.abs(dY)<0.5){
    viewScale=targetScale; viewCX=targetCX; viewCY=targetCY;
    animating=false; requestRender(); return;
  }
  viewScale+=dS*dt; viewCX+=dX*dt; viewCY+=dY*dt;
  requestRender();
  requestAnimationFrame(animateStep);
}

/* ════════════════════════════════════════════════════════════════════════
   RENDER
   ════════════════════════════════════════════════════════════════════════ */
var renderRequested = false;
var hoverNodeId     = null;
var activeNodeId    = null;   /* nœud dont la bulle est ouverte            */

/* ── drawImgSlice : dessine la portion visible d'une image dans l'espace étendu
   imgEl        : HTMLImageElement
   vx0,vy0      : coin haut-gauche du viewport dans l'espace étendu
   sw,sh        : dimensions du viewport dans l'espace étendu
   imgX,imgY    : position de l'image dans l'espace étendu
   imgW,imgH    : dimensions de l'image dans l'espace étendu                */
function drawImgSlice(imgEl, vx0, vy0, sw, sh, imgX, imgY, imgW, imgH){
  /* Intersection viewport ∩ image en coords espace étendu */
  var ix0=Math.max(vx0, imgX),  iy0=Math.max(vy0, imgY);
  var ix1=Math.min(vx0+sw, imgX+imgW), iy1=Math.min(vy0+sh, imgY+imgH);
  if(ix1<=ix0 || iy1<=iy0) return; /* hors champ */

  /* Source dans l'image (0..imgW, 0..imgH) */
  var srcX=ix0-imgX, srcY=iy0-imgY, srcW=ix1-ix0, srcH=iy1-iy0;
  /* Destination à l'écran */
  var dstX=(ix0-vx0)*viewScale, dstY=(iy0-vy0)*viewScale;
  var dstW=srcW*viewScale,      dstH=srcH*viewScale;
  ctx.drawImage(imgEl, srcX,srcY,srcW,srcH, dstX,dstY,dstW,dstH);
}

function render(){
  renderRequested = false;
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,W,H);

  if(imgReady){
    /* ── Espace de coordonnées étendu : arbre (y=0..IMG_H) + racines (y=IMG_H..2*IMG_H)
       viewCX/CY pointent dans cet espace étendu.
       On calcule le rectangle source dans chaque image séparément.         */
    var sw = W / viewScale;
    var sh = H / viewScale;
    /* Coin haut-gauche du viewport dans l'espace étendu */
    var vx0 = viewCX - sw/2;
    var vy0 = viewCY - sh/2;

    /* ── Dessin de l'arbre (y = 0 .. IMG_H) ─────────────────────────── */
    drawImgSlice(treeImg, vx0, vy0, sw, sh, 0, 0, IMG_W, IMG_H);

    /* ── Dessin des racines (y = IMG_H .. 2*IMG_H) ───────────────────── */
    var ROOTS_SCALE = 0.6;   // ← ton facteur de réduction
    var ROOTS_W = IMG_W * ROOTS_SCALE;
    var ROOTS_H = IMG_H * ROOTS_SCALE;
    var ROOTS_X = (IMG_W - ROOTS_W) / 2 - 180;

// Position écran du coin haut-gauche des racines
    var rdstX = (ROOTS_X - vx0) * viewScale;
    var rdstY = (ROOTS_OFFSET_Y - vy0) * viewScale;
// Dimensions à l'écran (image réduite × zoom caméra)
    var rdstW = ROOTS_W * viewScale;
    var rdstH = ROOTS_H * viewScale;

ctx.drawImage(rootsImg, 0, 0, IMG_W, IMG_H, rdstX, rdstY, rdstW, rdstH);
  }

  drawNodes();
}

function requestRender(){
  if(renderRequested) return;
  renderRequested=true;
  requestAnimationFrame(render);
}

/* ── Quels nœuds sont "épinglés" (label encadré visible) ─────────────── */
function computePinned(){
  var pinned = {};
  if(!activeNodeId) return pinned;
  var an = NODES[activeNodeId];
  pinned[activeNodeId] = true;
  /* Clic sur un nœud racine de branche : montrer ses enfants directs */
  if(an && an.depth===1)
    (childMap[activeNodeId]||[]).forEach(function(id){ pinned[id]=true; });
  /* Clic sur un nœud enfant : montrer ses frères + parent */
  if(an && an.depth===2 && an.pid){
    (childMap[an.pid]||[]).forEach(function(id){ pinned[id]=true; });
    pinned[an.pid]=true;
  }
  /* Toujours afficher les 3 labels racines quand on est zoomé */
  if(an && an.rootBranch)
    ['idees','risques','nature'].forEach(function(id){ pinned[id]=true; });
  return pinned;
}

/* ── Dessin des nœuds et labels ──────────────────────────────────────── */
function drawNodes(){
  var pinned     = computePinned();
  var isOverview = !activeNodeId;

  /* Points */
  NODES_DATA.forEach(function(n){
    if(n.rx==null) return;
    var p = nodeScreen(n);
    if(p.x<-20||p.x>W+20||p.y<-20||p.y>H+20) return;

    var state  = n.id===activeNodeId?'active':n.id===hoverNodeId?'hover':'normal';
    var isRoot = n.depth===1;
    var R = state==='active'?8 : state==='hover'?7 : isRoot?6.5 : 5;

    if(state!=='normal'){
      ctx.beginPath(); ctx.arc(p.x,p.y,R*4,0,Math.PI*2);
      var g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,R*4);
      g.addColorStop(0,'rgba(247,147,29,0.38)');
      g.addColorStop(0.5,'rgba(247,147,29,0.15)');
      g.addColorStop(1,'rgba(247,147,29,0)');
      ctx.fillStyle=g; ctx.fill();
    }
    ctx.beginPath(); ctx.arc(p.x,p.y,R,0,Math.PI*2);
    ctx.fillStyle = (state!=='normal'||isRoot)?'#F7931D':'rgba(255,210,150,0.95)';
    ctx.fill();
    ctx.lineWidth=1.5; ctx.strokeStyle='rgba(0,0,0,0.75)'; ctx.stroke();
  });

  /* Labels */
  NODES_DATA.forEach(function(n){
    if(n.rx==null) return;
    var p = nodeScreen(n);
    if(p.x<-120||p.x>W+220||p.y<-30||p.y>H+30) return;

    var framed   = !!pinned[n.id];
    var isRoot   = n.depth===1;
    var show, bigFrame;

    if(isOverview){
      /* Vue globale : depth-1 racines toujours encadrées + grosses
         depth-2 uniquement au survol, depth-0 aussi visible */
      bigFrame = isRoot;
      framed   = isRoot;
      show     = isRoot || n.depth===0 || n.id===hoverNodeId;
    } else {
      /* Vue zoomée : pinned ou survol */
      bigFrame = false;
      show     = framed || n.id===hoverNodeId;
    }
    if(!show) return;
    drawLabel(n, p, framed, bigFrame);
  });
}

function drawLabel(n, p, framed, bigFrame){
  /* bigFrame = true pour les 3 racines en vue d'ensemble (police plus grande) */
  var fontSize = bigFrame ? 15 : framed ? 13 : 12;
  var fontW    = bigFrame ? '700' : framed ? '500' : '400';
  ctx.font = fontW+' '+fontSize+'px "Raleway",sans-serif';
  var tw=ctx.measureText(n.label).width;
  var padX=bigFrame?12:8, padY=bigFrame?7:5;
  var boxW=tw+padX*2, boxH=bigFrame?26:20;
  var left=n.side==='left';
  var bx=left?p.x-16-boxW:p.x+16, by=p.y-boxH/2;
  if(framed){
    ctx.fillStyle='rgba(0,0,0,0.88)'; roundRect(bx,by,boxW,boxH,6); ctx.fill();
    ctx.lineWidth=bigFrame?1.8:1.3; ctx.strokeStyle='#F7931D';
    roundRect(bx,by,boxW,boxH,6); ctx.stroke();
    ctx.fillStyle='#F7931D';
  } else {
    ctx.shadowColor='rgba(0,0,0,0.92)'; ctx.shadowBlur=5;
    ctx.fillStyle='rgba(255,225,180,0.96)';
  }
  ctx.textBaseline='middle'; ctx.textAlign='left';
  ctx.fillText(n.label, bx+padX, p.y);
  ctx.shadowBlur=0;
}

function roundRect(x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r);
  ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r);
  ctx.arcTo(x,y,x+w,y,r); ctx.closePath();
}

/* ════════════════════════════════════════════════════════════════════════
   BULLE
   ════════════════════════════════════════════════════════════════════════ */
function openBubble(n){
  bblT.textContent = n.btitle||n.label;
  bblP.textContent = n.text;
  var hasImg = !!(n.imgKey&&IMG_PATHS[n.imgKey]);
  var size;
  if(hasImg){ bblI.src=IMG_PATHS[n.imgKey]; bblI.style.display='block'; size='lg'; }
  else       { bblI.src=''; bblI.style.display='none'; size=SMALL_BUBBLE_NODES[n.id]?'sm':'md'; }
  bbl.className='bbl vis '+size;
  var bw=size==='lg'?500:size==='md'?540:360;
  bbl.style.left=(n.side==='left'?(W-bw-12):12)+'px';
  bbl.style.top='12px';
}
function closeBubble(){ bbl.className='bbl'; }

bblX.onclick=function(){
  closeBubble();
  activeNodeId=null;
  requestRender();  /* reste à la même position/zoom */
};

/* ── Drag bulle ───────────────────────────────────────────────────────── */
var bblDrag=false, bblDox=0, bblDoy=0;
bblH.addEventListener('mousedown',function(e){
  bblDrag=true;
  var r=bbl.getBoundingClientRect(); bblDox=e.clientX-r.left; bblDoy=e.clientY-r.top;
  e.preventDefault();
});
document.addEventListener('mousemove',function(e){
  if(!bblDrag) return;
  bbl.style.left=Math.max(0,Math.min(W-bbl.offsetWidth,e.clientX-bblDox))+'px';
  bbl.style.top =Math.max(0,Math.min(H-bbl.offsetHeight,e.clientY-bblDoy))+'px';
});
document.addEventListener('mouseup',function(){ bblDrag=false; });

/* ════════════════════════════════════════════════════════════════════════
   INTERACTIONS CANVAS
   ════════════════════════════════════════════════════════════════════════ */

/* ════════════════════════════════════════════════════════════════════════
   INTERACTIONS CANVAS  —  drag pan + clic nœud/fermeture bulle
   ════════════════════════════════════════════════════════════════════════ */

var dragState = null;  /* { startX, startY, startCX, startCY, moved } */

/* ── Hover (mousemove sans drag) ──────────────────────────────────────── */
canvas.addEventListener('mousemove', function(e){
  var r=canvas.getBoundingClientRect();
  var x=e.clientX-r.left, y=e.clientY-r.top;

  /* Pan si drag en cours */
  if(dragState){
    var dx=x-dragState.startX, dy=y-dragState.startY;
    if(Math.abs(dx)+Math.abs(dy)>3) dragState.moved=true;
    if(dragState.moved){
      viewCX = dragState.startCX - dx/viewScale;
      viewCY = dragState.startCY - dy/viewScale;
      canvas.style.cursor='grabbing';
      requestRender();
    }
    return;
  }

  /* Hover nœud */
  var id=hitNodeAt(x,y);
  if(id!==hoverNodeId){
    hoverNodeId=id;
    canvas.style.cursor=id?'pointer':'default';
    requestRender();
  }
});

canvas.addEventListener('mousedown', function(e){
  if(e.button!==0) return;
  var r=canvas.getBoundingClientRect();
  dragState = {
    startX: e.clientX-r.left,
    startY: e.clientY-r.top,
    startCX: viewCX,
    startCY: viewCY,
    moved: false
  };
  e.preventDefault();
});

window.addEventListener('mouseup', function(e){
  if(!dragState) return;
  var r=canvas.getBoundingClientRect();
  var x=e.clientX-r.left, y=e.clientY-r.top;
  var wasDrag = dragState.moved;
  dragState=null;
  canvas.style.cursor=hoverNodeId?'pointer':'default';

  if(wasDrag) return; /* c'était un pan, pas un clic */

  /* ── Clic ── */
  var hitId=hitNodeAt(x,y);
  if(hitId){
    activeNodeId=hitId;
    var n=NODES[hitId];
    if(ZOOM_TRIGGERS[hitId]){
      var v=BRANCH_VIEWS[hitId];
      animateTo(v.cx, v.cy, v.scale);
    }
    openBubble(n);
    if(hint) hint.classList.add('off');
  } else {
    /* Clic dans le vide : ferme la bulle, reste au même endroit */
    if(activeNodeId){
      activeNodeId=null;
      closeBubble();
    }
  }
  requestRender();
});

/* ── Wheel zoom (throttlé RAF) ────────────────────────────────────────── */
var wAcc=0, wMx=W/2||0, wMy=H/2||0, wPending=false;

canvas.addEventListener('wheel',function(e){
  e.preventDefault();
  var r=canvas.getBoundingClientRect();
  wMx=e.clientX-r.left; wMy=e.clientY-r.top;
  var d=e.deltaY;
  if(e.deltaMode===1)d*=20; if(e.deltaMode===2)d*=300;
  wAcc+=d;
  if(!wPending){ wPending=true; requestAnimationFrame(applyWheel); }
},{passive:false});

function applyWheel(){
  wPending=false;
  if(wAcc===0) return;
  var factor=Math.pow(0.999, wAcc);
  factor=Math.max(0.3, Math.min(3.5, factor));
  wAcc=0;
  var newScale=Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, viewScale*factor));
  /* Le point image sous le curseur reste fixe */
  var iPt=s2i(wMx, wMy);
  viewCX = iPt.x - (wMx-W/2)/newScale;
  viewCY = iPt.y - (wMy-H/2)/newScale;
  viewScale=newScale;
  requestRender();
}

/* ════════════════════════════════════════════════════════════════════════
   RESIZE
   ════════════════════════════════════════════════════════════════════════ */
function resize(){
  W=window.innerWidth; H=window.innerHeight;
  canvas.width=W; canvas.height=H;
  if(imgReady) fitView();
  requestRender();
}
window.addEventListener('resize', resize);
resize();

/* ── Masquer le hint après 8 s ────────────────────────────────────────── */
setTimeout(function(){ if(hint&&!activeNodeId) hint.classList.add('off'); }, 8000);

})();
