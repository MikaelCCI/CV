function cacher(id_div) { 
  $('#'+id_div).hide(); }
function afficher(id_div) { 
  $('#'+id_div).show();
  }
function alternatif(id_div) { 
  $('#'+id_div).toggle();
  }

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
		  
 