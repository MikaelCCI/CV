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
  /*function soumettre(table.identification) {
	  if ($('#'+id_div.pseudo== qqch){
		  
		  Créer un formulaire de contact qui contient 
		  les champs (HTML5) suivants:

Nom
Email
Téléphone
Message

Rappel : les formulaires doivent contenir des entrées typées :

<form>
  <input type="text" name="nom" />
    ...
</form>
Créer aussi un bouton de soumission en fin de formulaire.

Ajouter un event listener "onclick" sur le bouton de 
soumission, appelant une fonction de vérification des champs.

Créer la fonction de vérification de champs dans le head :

<!DOCTYPE html>
  <html>
    <head>
      ...
      <script language="javascript" type="text/javascript">
        ...
      </script>
    </head>
  ...
  */
  function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}
  
  function verifPseudo(champ)
  {
	  if(champ.value.length < 2 || champ.value.length > 25)
	  {
		  surligne(champ, true);
		  return false;
	  }
	  else
	  {
		  surligne(champ,false);
		  return true;
	  }
  }
  function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifNumero(champ)
{
   var num = parseInt(champ);
   if(isNaN(num) && (num.length != 10))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}
  function verifForm(f)
{
   var pseudoOk = verifPseudo(f.pseudo);
   var mailOk = verifMail(f.email);
   var numeroOk = verifNumero(f.numero);
   
   if(pseudoOk && mailOk && numeroOk)
      return true;
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}
		  
 