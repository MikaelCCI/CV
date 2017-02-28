function cacher(id_div) { // c'est comme si je defini la fonction cacher avec en paramètre d'entrée(id_div) 
  $('#'+id_div).hide(); //-- ici dans le corps de la fonction je met la formule de tel sorte à ce quelle soit 
 // de la forme  $("#id_d_un_div"); pour lui indiquer ce qu'il faut faire avec le paramètre d'entrée id_div (ici je veux appliquer la fonction cacher ( avec .hide() )  (un peu comme
 // en java où l'on defini la fonction avec ses paramètres d'entrée et dans le corps de la fonction je décris la façon dont les paramètes seront traités et ce que la fonction fera. )
  }
function afficher(id_div) { // même chose que précedement mais cette fois ci avec la fonction afficher
  $('#'+id_div).show();
  }
function alternatif(id_div) {// j'ai appelé cette fonction alternatif ( par rapport au fait que je vais utiliser le bouton toggle).La fonction toggle() fonction de la
//manière suivante: quand mon élément est affiché, je peux l'effacer et quand il est afficher, je peux le cacher ( il remplace a la base les fonction cacher ( hide () ) et afficher  ( show () )  
  $('#'+id_div).toggle();
  }