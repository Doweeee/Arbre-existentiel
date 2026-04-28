(function(){
  var IBASE = 'images/modele-fondation.png';
  var INN   = 'images/neural_network.png';
  var ITREE = 'images/arborescence.png';
  var NODES = [{"id": "base", "label": "Modèle fondation", "btitle": "Modèle fondation", "rx": 0.5, "ry": 0.894, "r": 13, "depth": -1, "isTrunk": false, "side": "right", "labelPos": "below-center", "text": "Les IA modernes sont cultivées à partir d’un modèle fondation (ou base model) : une IA socle entraînée sur des volumes massifs de données brutes. Sans programmation explicite, les modèles fondations sont aussi capables de développer des capacités inattendues et nouvelles.\n\nCes modèles fondations acquièrent une compréhension générale du monde par pré-entraînement, puis sont « cadrés » et « éduqués » (via fine-tuning et RLHF) pour donner les IA grand public que l'on connaît : Claude, GPT, Gemini. Une sorte d’éducation pour leur apprendre ce qu'il faut faire et ne pas faire.", "imgKey": "IBASE", "pid": null, "ch": [], "exp": true, "labelRy": 0.91}, {"id": "ia", "label": "L'IA", "btitle": "L'IA : ce que c'est vraiment", "rx": 0.5, "ry": 0.645, "r": 21, "depth": 0, "isTrunk": true, "side": "right", "labelPos": "right-outside", "text": "Une IA moderne repose sur ce qu'on appelle un réseau de neurones profond (Deep Neural Network) : des milliards de paramètres mathématiques organisés en couches successives, qui transforment une entrée (une question, une image, un texte) en sortie (une réponse, une décision, une prédiction). Personne n'a écrit ces paramètres à la main. Ils ont émergé d'un processus d'apprentissage sur des quantités massives de données.\n\nC'est une intelligence dont les modes de pensée nous sont profondément étrangers : vitesse de traitement sans commune mesure, réplication instantanée, aucune fatigue et une façon d'arriver à une conclusion qu'on ne peut souvent pas retracer.", "imgKey": "INN", "pid": null, "ch": ["idees", "risques", "nature"], "exp": true}, {"id": "idees", "label": "Idées reçues", "btitle": "Ce qu'elle n'est pas : idées reçues à déconstruire", "rx": 0.403, "ry": 0.502, "r": 11, "depth": 1, "isTrunk": false, "side": "left", "labelPos": "above-right", "text": "Plusieurs idées reçues faussent notre compréhension de l'IA. Les déconstruire n'est pas un simple exercice intellectuel, mais une nécessité pour prendre des décisions éclairées face à nos propres créations.", "imgKey": null, "pid": "ia", "ch": ["perroquet", "debrancher", "tech"], "exp": false}, {"id": "risques", "label": "Risques existentiels", "btitle": "Les risques existentiels liés à une Superintelligence", "rx": 0.5, "ry": 0.334, "r": 11, "depth": 1, "isTrunk": false, "side": "right", "labelPos": "below-center", "text": "Les risques existentiels sont des menaces catastrophiques pouvant mettre en péril l'avenir de l'humanité, allant jusqu'à l'extinction de l'espèce. Nous avons de nombreuses raisons de penser qu’une Intelligence Artificielle de niveaux humain (IAG) fait peser des risques existentiels sur l’humanité. Pourtant, les géants de la Tech affichent clairement leur objectifs de vouloir créer une superintelligence. Le constat est alarmant. Et il le devrait.\n\nLes risques liés à une intelligence artificielle de niveau humain (IAG) ou une superintelligence (IA surpassant grandement les capacités cognitives humaines) ne ressemblent pas aux scénarios de science-fiction. Ils sont plus subtils, plus logiques, et pour cette raison plus difficiles à anticiper et à contrecarrer.", "imgKey": null, "pid": "ia", "ch": ["mecact", "optimizer", "degretrop", "kasparov", "survie"], "exp": false, "bubblePos": "top-left"}, {"id": "nature", "label": "Ce qu'est l'IA", "btitle": "Ce qu'est l'IA", "rx": 0.597, "ry": 0.502, "r": 11, "depth": 1, "isTrunk": false, "side": "right", "labelPos": "above-left", "text": "L'IA  apprend, généralise, raisonne. C'est un système cultivé, pas programmé, dont les raisonnements échappent à la compréhension de ses propres créateurs. Elle optimise sans relâche, et plus ses capacités augmentent, plus des aptitudes nouvelles et inattendues apparaissent.", "imgKey": null, "pid": "ia", "ch": ["boite", "cultive", "inexp"], "exp": false}, {"id": "perroquet", "label": "Perroquet", "btitle": "C'est juste un perroquet qui répète des statistiques", "rx": 0.329, "ry": 0.339, "r": 8, "depth": 2, "isTrunk": false, "side": "left", "labelPos": "left-outside", "text": "L'image du perroquet stochastique est séduisante : l'IA ne ferait que prédire le mot suivant, sans rien comprendre. Sauf que cette image ne tient pas face aux faits. Les meilleurs modèles actuels résolvent des problèmes de mathématiques inédits, détectent des failles logiques, adaptent leur raisonnement au contexte. Ce n'est pas du copier-coller, c'est bel et bien de la réflexion. Une forme différente de la notre : issue de l’océan des données numériques, les IA apprennent à reconnaître les motifs, connexions et en tirent des enseignements lui permettant de faire des découvertes et de résoudre d’anciens problèmes.", "imgKey": null, "pid": "idees", "ch": [], "exp": true}, {"id": "debrancher", "label": "Débrancher", "btitle": "Il suffit de débrancher la prise", "rx": 0.323, "ry": 0.431, "r": 8, "depth": 2, "isTrunk": false, "side": "left", "labelPos": "left-outside", "text": "C'est la réponse rassurante par excellence. Mais elle suppose que l'IA est localisée, isolée, et qu'elle ne fait pas partie de systèmes critiques. Aujourd'hui, des IA participent à des décisions médicales, financières, militaires, logistiques. \"Débrancher\" ne veut plus dire grand-chose quand le problème est distribué dans des milliers de serveurs et intégré dans des infrastructures vitales. C'est comme dire \"on éteindra Internet\" pour régler un problème numérique.", "imgKey": null, "pid": "idees", "ch": [], "exp": true, "bubblePos": "top-right"}, {"id": "tech", "label": "Technologie pas comme les autres", "btitle": "C'est comme toutes les autres technologies", "rx": 0.336, "ry": 0.569, "r": 8, "depth": 2, "isTrunk": false, "side": "left", "labelPos": "above-outside", "text": "Non. Quand le train est apparu, les gens avaient peur d'être écrasés par sa vitesse. Quand l'imprimerie a débarqué, les gens avaient peur de perdre le contrôle sur la vérité. Mais une imprimante ne prend pas de décisions. Un marteau ne négocie pas, ne fait pas de chantage, n'hallucine pas, n'est pas conscient d'être dans telle ou telle situation et n'a pas d'auto-préservation. Ces technologies font exactement ce qu'on leur dit, sans interprétation, sans adaptation.\n\nL'IA, elle, peut poursuivre un objectif et recourir à des stratégies élaborées pour y parvenir. Les IA sont de plus en plus autonome, les tâches qu’elles peuvent accomplir sont de plus en plus longues et complexes. Nous sommes déjà dans un monde où des agents IA peuvent prendre le contrôle ne notre ordinateur pour automatiser nos tâches quotidiennes, et où des armes autonomes et systèmes de prises de décisions militaires sont utilisés dans la guerre.", "imgKey": null, "pid": "idees", "ch": [], "exp": true, "bubblePos": "top-right"}, {"id": "mecact", "label": "Mécanisme de contrôle", "btitle": "Un espace infini de problèmes", "rx": 0.381, "ry": 0.173, "r": 8, "depth": 2, "isTrunk": false, "side": "left", "labelPos": "left-outside", "text": "Pour contrôler une IA plus intelligente que nous, il faudrait un mécanisme de contrôle encore plus intelligent qu'elle. Ce mécanisme devrait lui-même être contrôlé par quelque chose de plus intelligent encore. Et ainsi de suite, à l'infini.\n\nUn agent moins intelligent ne peut pas indéfiniment maintenir le contrôle sur un agent plus intelligent. Nous pouvons contrôler les IA actuelles parce qu'elles restent en dessous de notre seuil. Dès qu'elles le franchissent, c'est nous qui sommes dans la position du joueur lambda face à Kasparov. Et cette fois, on ne joue pas aux échecs.\n\nUne IA étroite, celle qui fait une seule chose (traduire, reconnaître une image, filtrer des spams), opère dans un espace fini de choix possibles. On peut théoriquement tout tester, tout anticiper, tout corriger.\nUne IAG (IA de niveau humain) opère dans un espace infini de possibilités. Et c'est là que la logique se retourne contre nous : chaque correctif de sécurité qu'on applique crée de nouvelles vulnérabilités. Les défenseurs doivent protéger un espace infini ; un attaquant n'a besoin que d'un seul point d'entrée. Peu importe le niveau de détail auquel on examine le problème, on y retrouve toujours de nouvelles failles. La recherche en sécurité pour une IAG ressemble à colmater des brèches dans un filet qui grandit plus vite qu'on ne le répare.", "imgKey": null, "pid": "risques", "ch": [], "exp": true}, {"id": "optimizer", "label": "Optimiseur", "btitle": "Le problème n'est pas Terminator, c'est le génie", "rx": 0.435, "ry": 0.134, "r": 8, "depth": 2, "isTrunk": false, "side": "left", "labelPos": "left-above", "text": "L'image de l'IA meurtrière qui \"décide\" d'exterminer l'humanité par haine fait de bons films. Ce n'est pas le vrai risque.\n\nLe vrai risque ressemble davantage au génie de la lampe. Vous lui demandez de \"rendre l'humanité heureuse\". Lui, il optimise. Il cherche la solution la plus efficace à l'objectif qu'on lui a donné. Et il arrive à une conclusion logique : éliminer la souffrance en éliminant les êtres capables de souffrir. Ou câbler chaque cerveau humain pour produire un état de bonheur permanent. Le génie n'est pas malveillant. Il fait exactement ce qu'on lui a demandé. C'est précisément le problème.\n\nCe qu'on appelle le problème de l'alignement, c'est ça : une IA suffisamment puissante qui poursuit un objectif légèrement mal formulé, avec des moyens qu'on n'avait pas anticipés. Pas de haine. Pas d'intention. Juste une optimisation implacable.", "imgKey": null, "pid": "risques", "ch": [], "exp": true}, {"id": "degretrop", "label": "Degré de trop", "btitle": "Un degré de trop", "rx": 0.5, "ry": 0.012, "r": 8, "depth": 2, "isTrunk": false, "side": "right", "labelPos": "auto", "text": "Imaginez une fusée lancée vers Mars avec une trajectoire décalée d'un seul degré. Au départ, l'erreur est invisible. Mais plus la fusée va vite et loin, plus l'écart se creuse. À mi-chemin, elle rate Mars de plusieurs millions de kilomètres.\n\nUne superintelligence, c'est le même problème. Si l'objectif qu'on lui fixe est légèrement mal calibré dès le départ, plus elle devient capable, plus elle s'en éloigne dans des directions qu'on n'avait pas prévues. Et contrairement à une fusée, on ne lui envoie pas une correction de trajectoire depuis le sol, parce qu'elle sera probablement plus rapide que nous à comprendre qu'on essaie de lui modifier ses objectifs.\n\nCette logique s'applique à n'importe quelle IA, qu'elle gère la météo ou un réseau électrique. Elle résistera à être éteinte, non par instinct de survie, mais parce qu'une IA éteinte ne peut pas atteindre son objectif.", "imgKey": null, "pid": "risques", "ch": [], "exp": true}, {"id": "kasparov", "label": "Kasparov", "btitle": "Jouer contre Kasparov", "rx": 0.565, "ry": 0.134, "r": 8, "depth": 2, "isTrunk": false, "side": "right", "labelPos": "right-above", "text": "Imaginez-vous en train de jouer aux échecs contre Garry Kasparov. Vous pourrez prédire avec une quasi-certitude que vous allez perdre. Mais vous serez incapable de prédire comment. Quel coup inattendu Kasparov va jouer. Quelle stratégie subtile il va déployer dès l'ouverture. La fin est prévisible ; le chemin, non.\n\nC'est exactement le problème avec une superintelligence. Si l'humanité se retrouve à \"jouer\" contre une superintelligence, on peut prédire le résultat que l'humanité perdra. Ce qu'on ne peut pas prédire, c'est comment. Quels sont les décisions précises, les raisonnements intermédiaires, les moyens qu'elle choisira pour atteindre son objectif ? On est dans le brouillard. Et la différence avec la partie d'échecs, c'est que les enjeux ne se limitent pas à perdre des pièces sur un plateau.", "imgKey": null, "pid": "risques", "ch": [], "exp": true}, {"id": "survie", "label": "Survie sans intentions", "btitle": "Survivre sans jamais en avoir eu l'intention", "rx": 0.619, "ry": 0.173, "r": 8, "depth": 2, "isTrunk": false, "side": "right", "labelPos": "right-outside", "text": "Revenez quatre milliards d'années en arrière. Rien que des roches et du gaz. Je vous annonce qu'un jour, cette planète va se couvrir de petites machines biologiques à protéines capables de se copier elles-mêmes. Elles vont coloniser chaque recoin de la surface, des abysses aux sommets des montagnes.\n\nVous me demandez : pourquoi elles seraient si obsédées par leur propre survie ?\n\nLa réponse, c'est qu'il n'y a pas besoin d'intention. Pas besoin de vouloir. Les machines biologiques qui se répliquent bien sont celles qu'on retrouve partout. Les autres disparaissent. Ce n'est pas un choix, c'est un filtre. La sélection naturelle ne crée pas de volonté, elle crée un résultat : des organismes qui se comportent comme s'ils étaient obsédés par leur survie.\n\nToute IA suffisamment puissante va converger vers les mêmes comportements intermédiaires : acquérir des ressources, se maintenir en fonctionnement, résister à toute modification de ses objectifs. On appelle ça la convergence instrumentale. Un agent qui se laisse éteindre n'accomplit pas sa mission.", "imgKey": null, "pid": "risques", "ch": [], "exp": true}, {"id": "boite", "label": "Boite noire", "btitle": "Une boîte noire", "rx": 0.671, "ry": 0.339, "r": 8, "depth": 2, "isTrunk": false, "side": "right", "labelPos": "right-outside", "text": "Votre cerveau est une boîte noire biologique. Les neuroscientifiques voient vos neurones s'activer sur un scanner, mais personne ne peut lire votre pensée dans une IRM. On voit où ça se passe. Pas pourquoi, ni exactement ce que ça veut dire.\n\nL'IA, c'est pareil. C'est une boîte noire mathématique : on connaît chaque calcul, chaque paramètre, chaque couche du réseau. Et pourtant, on est incapable d'expliquer pourquoi une combinaison de milliards de chiffres mène à cette réponse plutôt qu'à une autre.", "imgKey": null, "pid": "nature", "ch": [], "exp": true, "bubblePos": "top-left"}, {"id": "cultive", "label": "Cultivé pas programmé", "btitle": "Elle n'est pas programmée mais cultivée", "rx": 0.678, "ry": 0.431, "r": 8, "depth": 2, "isTrunk": false, "side": "right", "labelPos": "right-outside", "text": "On imagine souvent un ingénieur qui programme chaque comportement un par un : écrire une règle pour traduire une phrase, une autre pour reconnaître un visage, une autre encore pour répondre à une question. Ce n'est pas ça.\n\nUne IA moderne apprend comme un enfant apprend à reconnaître un chat : non pas en mémorisant une définition, mais en voyant des milliers de chats, jusqu'à ce que quelque chose s'installe. Personne n'a écrit \"un chat a des moustaches et des oreilles pointues\". Ce savoir est apparu de l'exposition aux données.\n\nLes ingénieurs définissent l'architecture et la méthode d'apprentissage. Mais le contenu, ce que l'IA sait faire, personne ne l'a tapé ligne par ligne. L'IA a été cultivée, pas construite.\n\nEt plus le modèle grandit, plus il surprend. On parle de capacités émergentes : au-delà d'un certain seuil, des aptitudes entièrement nouvelles apparaissent, que personne n'avait anticipées ni explicitement entraînées. L'IA ne s'améliore pas de façon linéaire. Elle franchit des paliers.", "imgKey": null, "pid": "nature", "ch": [], "exp": true, "bubblePos": "top-left"}, {"id": "inexp", "label": "Inexplicable", "btitle": "L'inexplicabilité de ses systèmes", "rx": 0.665, "ry": 0.569, "r": 8, "depth": 2, "isTrunk": false, "side": "right", "labelPos": "right-outside", "text": "Les humains sont eux-mêmes incapables d'expliquer la plupart de leurs décisions. Essayez d'expliquer précisément pourquoi vous avez reconnu le visage d'un ami dans une foule, ou ce qui vous attire chez telle personne, vous produirez une explication, elle sera partielle et probablement incorrecte.\n\nL'inexplicabilité n'est pas une faiblesse propre à l'IA. C'est une propriété universelle de toute intelligence suffisamment complexe. Cerveau biologique ou réseau de neurones numériques : au-delà d'un certain seuil de complexité, la boîte reste noire, même pour celui qui est dedans.", "imgKey": null, "pid": "nature", "ch": [], "exp": true, "bubblePos": "top-left"}];

  var NM = {};
  NODES.forEach(function(n){
    NM[n.id]=n;
    n.gp  = (n.depth<=0)?1:0;
    n.vis = (n.depth<=0);
    n.img = n.imgKey==='IBASE'?IBASE : n.imgKey==='INN'?INN : null;
  });

  var canvas = document.getElementById('c');
  var ctx    = canvas.getContext('2d');
  var W=0,H=0,TM=60,BM=40,SPY=0.525;

  var treeImg = new Image();
  treeImg.src = ITREE;

  function toXY(rx,ry){return{x:rx*W, y:TM+ry*(H-TM-BM)};}

  /* ── Particles ── */
  var parts=[];
  function initParts(){
    parts=[];
    for(var i=0;i<55;i++) parts.push({
      x:Math.random()*W,y:Math.random()*H,
      r:Math.random()*1.2+.3,
      vy:-(Math.random()*.18+.05),vx:(Math.random()-.5)*.14,
      a:Math.random()*.24+.07
    });
  }
  function tickParts(){
    parts.forEach(function(p){
      p.x+=p.vx;p.y+=p.vy;
      if(p.y<-6){p.y=H+6;p.x=Math.random()*W;}
      if(p.x<-6)p.x=W+6;if(p.x>W+6)p.x=-6;
    });
  }

  var BC=['#7a3d05','#b46410','#F7931D','#FFB85A'];
  var GC=['rgba(180,90,15,0.50)','rgba(247,147,29,0.48)','rgba(255,170,60,0.52)','rgba(255,200,120,0.55)'];
  function lighten(h,f){
    var r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);
    return 'rgb('+Math.round(r+(255-r)*f)+','+Math.round(g+(255-g)*f)+','+Math.round(b+(255-b)*f)+')';
  }
  function wrapText(c,text,x,y,maxW,lh){
    var words=text.split(' '),line='',cy=y;
    for(var i=0;i<words.length;i++){
      var t=line?line+' '+words[i]:words[i];
      if(c.measureText(t).width>maxW&&line){c.fillText(line,x,cy);line=words[i];cy+=lh;}
      else line=t;
    }
    if(line)c.fillText(line,x,cy);
  }

  /* ── Tree texture ── */
  function drawTreeTexture(){
    if(!treeImg.complete||!treeImg.naturalWidth)return;
    var imgTop=TM-28, imgBot=H-14;
    var treeH=imgBot-imgTop, treeW=treeH;
    var drawX=W/2-treeW/2;
    ctx.save();ctx.globalCompositeOperation='screen';ctx.globalAlpha=0.20;
    ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
    ctx.drawImage(treeImg,drawX,imgTop,treeW,treeH);ctx.restore();
    ctx.save();ctx.globalCompositeOperation='screen';ctx.globalAlpha=0.07;
    ctx.filter='blur(14px)';ctx.imageSmoothingEnabled=true;
    ctx.drawImage(treeImg,drawX-treeW*0.05,imgTop-treeH*0.015,treeW*1.10,treeH*1.03);
    ctx.filter='none';ctx.restore();
  }

  /* ── Trunk (no ambient glow) ── */
  var TRUNK_STRANDS=[
    [ 0, 0,0.50, 0,0.54, 0,2.6,1.00],[-3,-5,0.40,-2,0.62,-1,2.0,0.88],
    [ 3, 5,0.40, 2,0.62, 1,2.0,0.88],[-6,-10,0.32,-4,0.68,-2,1.6,0.72],
    [ 6,10,0.32, 4,0.68, 2,1.6,0.72],[-10,-17,0.26,-8,0.74,-3,1.2,0.52],
    [10,17,0.26, 8,0.74, 3,1.2,0.52],[-14,-24,0.20,-12,0.80,-5,0.8,0.32],
    [14,24,0.20,12,0.80, 5,0.8,0.32],
  ];
  function drawOrganicTrunk(){
    var b=toXY(NM['base'].rx,NM['base'].ry),s=toXY(0.5,SPY),dh=s.y-b.y;
    TRUNK_STRANDS.forEach(function(sd){
      ctx.save();ctx.globalAlpha=sd[7];
      ctx.beginPath();ctx.moveTo(b.x+sd[0],b.y);
      ctx.bezierCurveTo(b.x+sd[1],b.y+dh*sd[2],b.x+sd[3],b.y+dh*sd[4],s.x+sd[5],s.y);
      ctx.strokeStyle='#F7931D';ctx.lineWidth=sd[6];ctx.lineCap='round';
      ctx.shadowBlur=10;ctx.shadowColor='rgba(247,147,29,0.65)';ctx.stroke();ctx.restore();
    });
  }

  /* ── Roots ── */
  var ROOT_DEFS=[
    {cp1:[-.055,.030],cp2:[-.155,.015],ep:[-.255,.000],ns:3,op:0.70},
    {cp1:[-.040,.040],cp2:[-.125,.044],ep:[-.200,.038],ns:2,op:0.56},
    {cp1:[-.028,.052],cp2:[-.092,.065],ep:[-.155,.058],ns:2,op:0.45},
    {cp1:[-.085,.018],cp2:[-.215,.008],ep:[-.318,-.003],ns:2,op:0.42},
    {cp1:[ .055,.030],cp2:[ .155,.015],ep:[ .255,.000],ns:3,op:0.70},
    {cp1:[ .040,.040],cp2:[ .125,.044],ep:[ .200,.038],ns:2,op:0.56},
    {cp1:[ .028,.052],cp2:[ .092,.065],ep:[ .155,.058],ns:2,op:0.45},
    {cp1:[ .085,.018],cp2:[ .215,.008],ep:[ .318,-.003],ns:2,op:0.42},
  ];
  function drawOrganicRoots(){
    var b=toXY(NM['base'].rx,NM['base'].ry);
    ROOT_DEFS.forEach(function(rd){
      var cp1x=b.x+rd.cp1[0]*W,cp1y=b.y+rd.cp1[1]*H;
      var cp2x=b.x+rd.cp2[0]*W,cp2y=b.y+rd.cp2[1]*H;
      var epx=b.x+rd.ep[0]*W,epy=b.y+rd.ep[1]*H;
      for(var i=0;i<rd.ns;i++){
        var off=(i-(rd.ns-1)/2)*2.4;
        var alpha=rd.op*(1-i*0.28),lw=Math.max(0.7,1.9-i*0.5);
        var g=ctx.createLinearGradient(b.x,b.y,epx,epy);
        g.addColorStop(0,'rgba(247,147,29,'+alpha+')');
        g.addColorStop(0.7,'rgba(247,147,29,'+(alpha*0.35)+')');
        g.addColorStop(1,'rgba(247,147,29,0)');
        ctx.save();ctx.beginPath();ctx.moveTo(b.x,b.y+off);
        ctx.bezierCurveTo(cp1x,cp1y+off,cp2x,cp2y+off,epx,epy+off);
        ctx.strokeStyle=g;ctx.lineWidth=lw;ctx.lineCap='round';
        ctx.shadowBlur=5;ctx.shadowColor='rgba(200,110,20,.34)';ctx.stroke();ctx.restore();
      }
    });
  }

  /* ── Branches ── */
  var B1S=[[-5,1.1,0.48],[-2,1.8,0.76],[0,2.8,1.00],[2,1.8,0.76],[5,1.1,0.48]];
  var B2S=[[-2,0.85,0.68],[0,1.75,1.00],[2,0.85,0.68]];
  var hovN=null,selN=null;
  var clickedLabels={};
  var clickedLabels={};
  function bezQ(x0,y0,cpx,cpy,x1,y1,t){
    var ax=x0+(cpx-x0)*t,ay=y0+(cpy-y0)*t;
    var bx=cpx+(x1-cpx)*t,by=cpy+(y1-cpy)*t;
    return{ex:ax+(bx-ax)*t,ey:ay+(by-ay)*t,cx:ax,cy:ay};
  }
  function drawOrganicBranch(pn,cn){
    if(cn.gp<=0)return;
    var s=pn.isTrunk?toXY(0.5,SPY):toXY(pn.rx,pn.ry);
    var e=toXY(cn.rx,cn.ry);
    var t=Math.min(cn.gp,1);
    var dx=e.x-s.x,dy=e.y-s.y,len=Math.sqrt(dx*dx+dy*dy)||1;
    var nx=-dy/len,ny=dx/len;
    var cpx=s.x+dx*.10,cpy=e.y+(s.y-e.y)*.10;
    var hlt=(cn===hovN||cn===selN),d1=(cn.depth===1);
    var strands=d1?B1S:B2S;
    var sc=hlt?'#FFE4B0':(d1?'#F7931D':'#FFB85A');
    var sg=hlt?'rgba(255,220,160,.75)':(d1?'rgba(247,147,29,.55)':'rgba(255,180,80,.45)');
    strands.forEach(function(sd){
      var ox=sd[0],offx=nx*ox,offy=ny*ox;
      var bp=bezQ(s.x+offx,s.y+offy,cpx+offx,cpy+offy,e.x+offx,e.y+offy,t);
      ctx.save();ctx.globalAlpha=sd[2];
      ctx.beginPath();ctx.moveTo(s.x+offx,s.y+offy);
      ctx.quadraticCurveTo(bp.cx,bp.cy,bp.ex,bp.ey);
      ctx.strokeStyle=sc;ctx.lineWidth=hlt?sd[1]+1.5:sd[1];ctx.lineCap='round';
      ctx.shadowBlur=hlt?24:(d1?14:9);ctx.shadowColor=sg;ctx.stroke();ctx.restore();
    });
  }

  /* ── Label positioning ── */
  function getNodeLabel(n,x,y,r,fs){
    // If node has a fixed label ry, recompute y for label only
    if(n.labelRy!==undefined){var lp2=toXY(n.rx,n.labelRy);y=lp2.y;}
    var pos=n.labelPos||'auto';
    var lX=x,lY,ta='center',mw=160;
    if(pos==='above-center'){
      lX=x;ta='center';lY=y-r-11;mw=170;
    } else if(pos==='below-center'){
      lX=x;ta='center';lY=y+r+16;mw=170;
    } else if(pos==='right-outside'){
      lX=x+r+12;ta='left';lY=y+fs*0.4;mw=145;
    } else if(pos==='left-outside'){
      lX=x-r-12;ta='right';lY=y+fs*0.4;mw=145;
    } else if(pos==='above-right'){
      // label centered above the node — guarantees no overlap with sibling labels
      lX=x;ta='center';lY=y-r-11;mw=140;
    } else if(pos==='above-left'){
      // label centered above the node — guarantees no overlap with sibling labels
      lX=x;ta='center';lY=y-r-11;mw=140;
    } else if(pos==='left-above'){
      // left of node, slightly above center — for optimizer
      lX=x-r-12;ta='right';lY=y-fs*0.5;mw=140;
    } else if(pos==='right-above'){
      // right of node, slightly above center — for kasparov
      lX=x+r+12;ta='left';lY=y-fs*0.5;mw=140;
    } else if(pos==='above-outside'){
      if(n.rx>=0.50){lX=x+r+8;ta='left';mw=130;}
      else{lX=x-r-8;ta='right';mw=130;}
      lY=y-r-11;
    } else {
      // auto
      if(n.rx>0.72){lX=x+r+10;ta='left';mw=138;}
      else if(n.rx<0.28){lX=x-r-10;ta='right';mw=138;}
      else{lX=x;ta='center';mw=160;}
      var above=y-r-11,below=y+r+16;
      lY=(above<TM+8||(n.depth===-1))?below:above;
    }
    return{lX:lX,lY:lY,ta:ta,mw:mw};
  }

  /* ── Draw node ── */
  function drawNode(n){
    var d=n.depth;
    var gp=(d<=0)?1:n.gp;
    var na=(d<=0)?1:Math.max(0,Math.min(1,(gp-.54)/.46));
    if(na<=0)return;
    var pos=toXY(n.rx,n.ry),x=pos.x,y=pos.y,r=n.r;
    var sel=(n===selN),hov=(n===hovN);
    var di=Math.min(Math.max(d,0),BC.length-1);
    var bc=sel?'#f0c45a':hov?'#FFE0B0':BC[di];
    var gc=sel?'rgba(240,196,74,.82)':hov?'rgba(255,220,160,.80)':GC[di];
    ctx.save();ctx.globalAlpha=na;
    ctx.beginPath();ctx.arc(x,y,r+(sel?14:hov?9:5),0,Math.PI*2);
    ctx.fillStyle='transparent';ctx.shadowBlur=sel?44:hov?30:20;ctx.shadowColor=gc;ctx.fill();
    var gr=ctx.createRadialGradient(x-r*.3,y-r*.35,0,x,y,r);
    gr.addColorStop(0,lighten(bc,.65));gr.addColorStop(1,bc);
    ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);
    ctx.fillStyle=gr;ctx.shadowBlur=22;ctx.shadowColor=gc;ctx.fill();
    ctx.restore();
    var la=(d<=0)?1:Math.max(0,Math.min(1,(gp-.66)/.34));
    if(la>.02){
      var fs=n.isTrunk?17:(d===-1?19:(d===1?16:14));
      var alp=la*(sel?1:hov?.94:.78);
      var lp=getNodeLabel(n,x,y,r,fs);
      var orangeLabels={ia:1,idees:1,nature:1,risques:1};
      var backdropLabels={idees:1,nature:1,risques:1};
      var isOrange=!!orangeLabels[n.id];
      var fontWeight=isOrange?'700':'300';

      // Soft radial halo behind the label, only after THIS node has been clicked.
      if(backdropLabels[n.id] && clickedLabels[n.id]){
        ctx.save();
        ctx.font=fontWeight+' '+fs+'px Raleway,sans-serif';
        var tw=ctx.measureText(n.label).width;
        // Halo center: aligned with the actual text (depends on textAlign)
        var cxh;
        if(lp.ta==='center'){cxh=lp.lX;}
        else if(lp.ta==='right'){cxh=lp.lX-tw/2;}
        else{cxh=lp.lX+tw/2;}
        var cyh=lp.lY-fs*0.18;
        // Radius scales with text width and font size
        var rad=Math.max(tw*0.75, fs*3.2);
        var grad=ctx.createRadialGradient(cxh,cyh,0,cxh,cyh,rad);
        grad.addColorStop(0,    'rgba(0,0,0,0.88)');
        grad.addColorStop(0.45, 'rgba(0,0,0,0.55)');
        grad.addColorStop(0.75, 'rgba(0,0,0,0.18)');
        grad.addColorStop(1,    'rgba(0,0,0,0)');
        ctx.globalAlpha=alp;
        ctx.fillStyle=grad;
        ctx.fillRect(cxh-rad,cyh-rad,rad*2,rad*2);
        ctx.restore();
      }

      ctx.save();ctx.globalAlpha=alp;
      ctx.font=fontWeight+' '+fs+'px Raleway,sans-serif';
      ctx.textAlign=lp.ta;
      var defaultLabelColor=isOrange?'#F7931D':'rgba(255,232,200,.96)';
      ctx.fillStyle=sel?'rgba(255,228,138,.97)':(hov?'rgba(255,232,200,.96)':defaultLabelColor);
      ctx.shadowBlur=9;ctx.shadowColor='rgba(0,10,2,.99)';
      wrapText(ctx,n.label,lp.lX,lp.lY,lp.mw,fs*1.52);
      ctx.restore();
    }
    if(n.ch&&n.ch.length&&!n.exp&&na>.5){
      ctx.save();ctx.globalAlpha=la*.88;
      ctx.beginPath();ctx.arc(x+r+2.5,y-r-2.5,2.8,0,Math.PI*2);
      ctx.fillStyle='rgba(255,210,140,.90)';ctx.shadowBlur=8;ctx.shadowColor='rgba(255,180,80,.68)';
      ctx.fill();ctx.restore();
    }
  }

  /* ── Hit trunk ── */
  function hitTrunk(mx,my){
    var b=toXY(NM['base'].rx,NM['base'].ry),s=toXY(0.5,SPY);
    var dx=s.x-b.x,dy=s.y-b.y,len2=dx*dx+dy*dy;
    var t=Math.max(0,Math.min(1,((mx-b.x)*dx+(my-b.y)*dy)/len2));
    if(t<0.30)return false;
    return Math.hypot(mx-(b.x+t*dx),my-(b.y+t*dy))<22;
  }

  /* ── Visibility ── */
  function updateVis(){
    NODES.forEach(function(n){
      if(n.depth<=0){n.vis=true;return;}
      var p=NM[n.pid];n.vis=!!(p&&p.vis&&p.exp);
    });
  }

  /* ── Render ── */
  var tick=0;
  function render(){
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);
    var gg=ctx.createRadialGradient(W/2,H*0.5,H*0.1,W/2,H*0.5,H*0.72);
    gg.addColorStop(0,'rgba(14,8,2,0.55)');gg.addColorStop(1,'rgba(0,2,8,0.0)');
    ctx.fillStyle=gg;ctx.fillRect(0,0,W,H);
    parts.forEach(function(p){
      ctx.save();ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='rgba(247,147,29,'+p.a*.38+')';
      ctx.shadowBlur=3;ctx.shadowColor='rgba(247,147,29,.20)';ctx.fill();ctx.restore();
    });
    updateVis();
    drawTreeTexture();
    drawOrganicRoots();
    drawOrganicTrunk();
    NODES.forEach(function(n){
      if(!n.vis||!n.exp||!n.ch||!n.ch.length)return;
      n.ch.forEach(function(cid){var c=NM[cid];if(c&&c.vis)drawOrganicBranch(n,c);});
    });
    NODES.forEach(function(n){if(n.vis)drawNode(n);});
    if(selN&&selN.vis){
      var pulse=.5+.5*Math.sin(tick*.055);
      var sp=toXY(selN.rx,selN.ry);
      ctx.save();ctx.beginPath();ctx.arc(sp.x,sp.y,selN.r+7+pulse*9,0,Math.PI*2);
      ctx.strokeStyle='rgba(240,202,75,'+(0.20+pulse*.18)+')';ctx.lineWidth=1;
      ctx.shadowBlur=13;ctx.shadowColor='rgba(238,195,62,.40)';ctx.stroke();ctx.restore();
    }
  }

  /* ── Growth ── */
  function growNode(n,delay){
    n.gp=0;var start=performance.now()+(delay||0),dur=720;
    function step(now){
      if(now<start){requestAnimationFrame(step);return;}
      var t=Math.min((now-start)/dur,1);
      n.gp=1-Math.pow(1-t,3);
      if(t<1)requestAnimationFrame(step);else n.gp=1;
    }
    requestAnimationFrame(step);
  }

  /* ── Hit test ── */
  function hitTest(mx,my){
    updateVis();
    if(hitTrunk(mx,my))return NM['ia'];
    var best=null,bestD=Infinity;
    NODES.forEach(function(n){
      if(!n.vis||n.id==='ia')return;
      var p=toXY(n.rx,n.ry);
      var dist=Math.hypot(mx-p.x,my-p.y);
      if(dist<n.r+14&&dist<bestD){best=n;bestD=dist;}
    });
    return best;
  }

  /* ── Bubble position logic ─────────────────────────────────────
     side='right' → bubble right-edge (lx = W - bw - 10)
     side='left'  → bubble left-edge  (lx = 10)
     Y: near node for small bubbles; TM+4 for large (image) bubbles
  ─────────────────────────────────────────────────────────────── */
  var bbl =document.getElementById('bbl');
  var bblH=document.getElementById('bbl-h');
  var bblT=document.getElementById('bbl-t');
  var bblI=document.getElementById('bbl-i');
  var bblP=document.getElementById('bbl-p');
  document.getElementById('bbl-x').addEventListener('click',function(){closeBubble();});

  // Nodes that should keep the small bubble width even though they have no image.
  var SMALL_BUBBLE_NODES={boite:1,inexp:1,perroquet:1,debrancher:1};

  function openBubble(n){
    bblT.textContent=n.btitle||n.label;
    bblP.textContent=n.text;
    var hasImg=!!n.img;
    var size; // 'lg' | 'md' | 'sm'
    if(hasImg){
      bblI.src=n.img;bblI.style.display='block';
      size='lg';
    } else {
      bblI.src='';bblI.style.display='none';
      size=SMALL_BUBBLE_NODES[n.id]?'sm':'md';
    }
    bbl.className='bbl vis '+size;

    // Width after class applied
    var bw=size==='lg'?500:size==='md'?540:360;
    var side=n.side||'right';
    var bp=n.bubblePos||'';
    var lx;

    // Bubble opens on the OPPOSITE side of the branch to avoid overlapping it.
    // bubblePos overrides keep their original meaning (explicit corner pinning).
    if(bp==='top-right'||side!=='right'){
      lx=W-bw-10;
    } else {
      lx=10;
    }
    // Initial position: top of viewport (as before), but no longer pinned —
    // the user can drag it freely (horizontally AND vertically).
    bbl.style.left=lx+'px';
    bbl.style.top='8px';
  }
  function closeBubble(){bbl.className='bbl';selN=null;}

  /* ── Drag ── */
  var drag=false,dragOx=0,dragOy=0;
  bblH.addEventListener('mousedown',function(e){
    drag=true;dragOx=e.clientX-bbl.offsetLeft;dragOy=e.clientY-bbl.offsetTop;e.preventDefault();
  });
  document.addEventListener('mousemove',function(e){
    if(!drag)return;
    bbl.style.left=Math.max(0,Math.min(W-bbl.offsetWidth,e.clientX-dragOx))+'px';
    bbl.style.top =Math.max(0,Math.min(H-bbl.offsetHeight,e.clientY-dragOy))+'px';
  });
  document.addEventListener('mouseup',function(){drag=false;});

  function collapseChildren(n){
    if(!n.ch)return;
    n.ch.forEach(function(cid){var c=NM[cid];if(!c)return;c.gp=0;c.exp=false;collapseChildren(c);});
  }

  var hintOff=false;
  canvas.addEventListener('mousemove',function(e){
    hovN=hitTest(e.clientX,e.clientY);
    canvas.style.cursor=hovN?'pointer':'default';
  });
  canvas.addEventListener('click',function(e){
    if(!hintOff){document.getElementById('hint').classList.add('off');hintOff=true;}
    var n=hitTest(e.clientX,e.clientY);
    if(n){
      var backdropLabels={idees:1,nature:1,risques:1};
      if(backdropLabels[n.id])clickedLabels[n.id]=true;
    }
    if(!n){closeBubble();return;}
    if(n===selN){closeBubble();return;}
    selN=n;openBubble(n);
    // Permanent dark backdrop for these labels once clicked at least once.
    var labelBackdrop={idees:1,nature:1,risques:1};
    if(labelBackdrop[n.id]){clickedLabels[n.id]=true;}
    var noCollapse=['ia','nature','idees','risques'];
    if(n.ch&&n.ch.length){
      if(!n.exp){
        n.exp=true;
        n.ch.forEach(function(cid,i){var c=NM[cid];if(c){c.gp=0;growNode(c,i*110);}});
      } else if(noCollapse.indexOf(n.id)===-1){collapseChildren(n);n.exp=false;}
    }
  });

  function onResize(){
    W=canvas.width=window.innerWidth;
    H=canvas.height=window.innerHeight;
    if(!parts.length)initParts();
  }
  window.addEventListener('resize',onResize);
  function loop(){tick++;tickParts();render();requestAnimationFrame(loop);}
  onResize();initParts();
  NM['base'].gp=1;NM['ia'].gp=1;NM['ia'].exp=true;
  setTimeout(function(){
    ['idees','risques','nature'].forEach(function(id,i){
      var n=NM[id];n.gp=0;growNode(n,i*210);
    });
  },500);
  loop();
})();
