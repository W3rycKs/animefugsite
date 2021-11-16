//VARS_UNIVERSAIS___________________________________________________________________________
//[url_lancamentos],[section],[anime_id],[none],[main],[limit],[container_video],[container_episodes],
	//[limit2],[exit_episode],[fav_button],[fav_button_icon],[on_off_fav],[add_button],[lista],[si]
//SPLASH_SCREEN_____________________________________________________________________________
//RA_____________________________________________________________________________________
var lancamentos_p = document.getElementById("lancamento")
var pesquisar_p = document.getElementById("pesquisar")
var favoritos_p = document.getElementById("favoritos")
var lista_desejos_p = document.getElementById("lista_desejos")
var vistos_p = document.getElementById("vistos")
//HIDE_____________________________________________________________________________________
var container_video = document.getElementById("container_video")
var container_episodes = document.getElementById("container_episodes")
function hides() {
lancamentos_p.style.color = "#FF8C00"
container_video.style.display = "none"
container_episodes.style.display = "none"
}

//SELECÇÃO_DE_BOTOES______________________________________________________________________________
var section = 0
var lancamentos = document.getElementById("Lançamentos")
var pesquisar = document.getElementById("Pesquisar")
var favoritos = document.getElementById("Favoritos")
var lista = document.getElementById("Lista_desejos")
var vistos = document.getElementById("Vistos")

lancamentos.addEventListener("click",function () {
  section = 0
  lancamentos_p.style.color = "#FF8C00"
  pesquisar_p.style.color = "#f9f9f9"
  favoritos_p.style.color = "#f9f9f9"
  lista_desejos_p.style.color = "#f9f9f9"
  vistos_p.style.color = "#f9f9f9"
})

pesquisar.addEventListener("click", function () {
  section = 1
  pesquisar_p.style.color = "#FF8C00"
  lancamentos_p.style.color = "#f9f9f9"	
  favoritos_p.style.color = "#f9f9f9"
  lista_desejos_p.style.color = "#f9f9f9"
  vistos_p.style.color = "#f9f9f9"
})

favoritos.addEventListener("click", function () {
  section = 2
  pesquisar_p.style.color = "#f9f9f9"
  lancamentos_p.style.color = "#f9f9f9"	
  favoritos_p.style.color = "#FF8C00"	
  lista_desejos_p.style.color = "#f9f9f9"
  vistos_p.style.color = "#f9f9f9"
})

lista.addEventListener("click",function () {
  section = 3
  lista_desejos_p.style.color = "#FF8C00"
  pesquisar_p.style.color = "#f9f9f9"
  favoritos_p.style.color = "#f9f9f9"
  lancamentos_p.style.color = "#f9f9f9"
  vistos_p.style.color = "#f9f9f9"
})

vistos.addEventListener("click", function () {
  section = 4
  pesquisar_p.style.color = "#f9f9f9"
  favoritos_p.style.color = "#f9f9f9" 
  lancamentos_p.style.color = "#f9f9f9"
  lista_desejos_p.style.color = "#f9f9f9"
  vistos_p.style.color = "#FF8C00"
})

//LANCAMENTOS____________________________________________________________________________________
//CODIGO_DE_CONTAINER____________________________________________________________________________
/*array.forEach(function (obj) {
		var container = document.createElement("div")
		container.classList.add("anime_container")
		var image_container = document.createElement("div")
		var anime_image = document.createElement("img")
		anime_image.src = "https://cdn.appanimeplus.tk/img/"+obj.category_image
		image_container.appendChild(anime_image)
		var title = document.createElement("p")
		var p1 = document.createTextNode(obj.title)
		title.appendChild(p1)
		container.appendChild(image_container)
		container.appendChild(title)
		container.id = obj.category_id
		main.appendChild(container)
	})*/
//FUNCAO_ABRIR_CONTAINER_EPISODIOS_______________________________________________________________
var limit2 = 0
function abri_container_ep() {	
var animefug_title = document.getElementById("tab_bar_top_p")
var title_episode = document.getElementById("title_episode")
var description = document.getElementById("description")
title_episode.style.marginLeft = "65px"
container_episodes.style.opacity = "25%"
container_episodes.style.display = "block"
if (section==0) {main.innerHTML = none}
if (section==1) {document.querySelectorAll("div.anime_container").forEach(function (obj) {obj.remove()})}
if (section==3) {document.querySelectorAll("div.anime_container").forEach(function (obj) {obj.remove()})}
if (section==4) {document.querySelectorAll("div.anime_container").forEach(function (obj) {obj.remove()})} 	
setTimeout(function () {container_episodes.style.opacity = "50%"},100)
setTimeout(function () {container_episodes.style.opacity = "75%"},150)
setTimeout(function () {container_episodes.style.opacity = "100%"},200)
var xml = new XMLHttpRequest
xml.open("GET", "https://appanimeplus.tk/play-api.php?info="+anime_id)
xml.onreadystatechange = () => {
	if (limit2==0) {
        //ok
        var info = JSON.parse(xml.responseText)[0]
        if (info.category_name.length<=15) {title_episode.innerHTML = info.category_name}
        else {title_episode.innerHTML = info.category_name.substring(0,15)+"..."}
        var img = "https://cdn.appanimeplus.tk/img/"+info.category_image
        anime_ep_img.src = img	
        description.innerHTML = info.category_description
        //ok
	limit2 = 1}
}
xml.send()

var limit3 = 0
var xml2 = new XMLHttpRequest()
xml2.open("GET","https://appanimeplus.tk/play-api.php?cat_id="+anime_id)
xml2.onreadystatechange = () => {
 if (limit3==0) {
   //ok
 var array_ep = JSON.parse(xml2.responseText)
 show_ep_container(array_ep)

//acessar_ep salvo____
if (localStorage.getItem(anime_id)!=null) {
	var save_ep = JSON.parse(localStorage.getItem(anime_id))
	save_ep.forEach(function (obj) {
    document.getElementById(obj).style.color = "#FF8C00"
  })

}


//ok__________________
 limit3 = 1}
}
xml2.send()

if (localStorage.getItem("favoritos")!=null) {
	var fav = JSON.parse(localStorage.getItem("favoritos")).indexOf(anime_id)
	if (fav>=0) {on_fav()} 
}

if (localStorage.getItem("lista_desejos")!=null) {var ld = JSON.parse(localStorage.getItem("lista_desejos"));
if (ld.indexOf(anime_id)!= -1) {document.getElementById("add_icon").innerHTML = "-"}}

if (localStorage.getItem("assistindo")!=null && section==4 && sa==0) {var as = JSON.parse(localStorage.getItem("assistindo"))
if (as.indexOf(anime_id)!= -1) {document.getElementById("add_icon").innerHTML = "-"}}

if (localStorage.getItem("assistindo")!=null && section==4 && sa==1) {var as = JSON.parse(localStorage.getItem("assistidos"))
if (as.indexOf(anime_id)!= -1) {document.getElementById("add_icon").innerHTML = "-"}}
}

//APARECER_EPISODIOS_ANIME_______________________________________________________________________
function show_ep_container (array) {
	array.forEach(function (obj) {
      var div = document.createElement("div")
      var p_ep = document.createElement("p")
      div.classList.add("container_episode_")
      var title_name = document.createTextNode(obj.title)
      p_ep.appendChild(title_name)
      div.id = obj.video_id
      div.append(p_ep)
      div.onclick = function () {
      	salvar_ep(div.id); 
        salvar_nos_vistos(div.id)
      	container_video_open(div.id)
      }
      container_episodes.appendChild(div)
	})



}

//SAIR_DO_CONTAINER_EP___________________________________________________________________________
var si = 0
var sa = 0
var exit_episode = document.getElementById("exit_episode")
exit_episode.addEventListener("click", function () {
    if (section==0) {show_ep()}
    //if (section==1) {pesquisar_anime()}
    if (section==3) {limit7=0;mostrar_lista()} 
    if (section==2) {mostrar_favoritos()}
    if (section==1 && si==0) {pesquisar_anime()}
    if (section==1 && si==1) {mostrar_categorias(String(localStorage.getItem("select")))}
    if (section==4 && sa==0) {mostrar_assistindo()}
    if (section==4 && sa==1) {mostrar_assistidos()}
    document.getElementById("search_ep").value = none 
    var title_episode = document.getElementById("title_episode")
    title_episode.innerHTML = none
    var img = document.getElementById("anime_ep_img")
    anime_ep_img.src = none
    var description = document.getElementById("description")
    description.innerHTML = none
    document.getElementById("add_icon").innerHTML = "+"
    off_fav()
    on_off_fav = 0
    limit = 0
    limit2 = 0
    limit3 = 0
    limit5 = 0
    limit6 = 0
    limit7 = 0
    sd_hd_state = 0
    var video_ep = document.querySelectorAll("div.container_episode_")
        container_episodes.opacity = "75%"
    	setTimeout(function () {container_episodes.style.opacity = "50%"},50)
        setTimeout(function () {container_episodes.style.opacity = "25%"},100)
        setTimeout(function () {container_episodes.style.display = "none"},150)
        video_ep.forEach(function (obj) {
        	obj.remove()
        })



})


//FUNCAO_LANCAMENTOS_____________________________________________________________________________
var main = document.getElementById("container_principal")
var anime_id = null
var limit = 0
function novos_lancamentos(array) {if (limit==0) {
	array.forEach(function (obj) {
		var container = document.createElement("div")
		container.classList.add("anime_container")
		var image_container = document.createElement("div")
		var anime_image = document.createElement("img")
		anime_image.src = "https://cdn.appanimeplus.tk/img/"+obj.category_image
		image_container.appendChild(anime_image)
		var title = document.createElement("p")
		var p1 = document.createTextNode(obj.title)
		title.appendChild(p1)
		container.appendChild(image_container)
		container.appendChild(title)
		container.id = obj.category_id
		container.onclick = function () {
			//eventos_de_click
            anime_id = String(container.id)
            abri_container_ep()
			//eventos_de_click
		}
		main.appendChild(container)

	})
limit=1}
}


//APARECER_EPISODIOS_____________________________________________________________________________
var url_lancamentos = "https://appanimeplus.tk/play-api.php?latest"
function show_ep() {
var xml = new XMLHttpRequest()
xml.open("GET",url_lancamentos)
xml.onreadystatechange = () => {
var array = JSON.parse(xml.responseText)

novos_lancamentos(array)
}
xml.send()
}

//BOTAO_LANCAMENTOS______________________________________________________________________________
var none = ""
lancamentos.addEventListener("click", function () {
section = 0
limit = 0	
main.innerHTML = none
show_ep()
})

//FAVORITOS______________________________________________________________________________________
var fav_button = document.getElementById("on_off_1")
var fav_button_icon = document.getElementById("on_off_1_icon")
var on_off_fav = 0
fav_button.addEventListener("click", function () {
  if (on_off_fav==0) {
  	on_fav()

  	return false;
  }
  else {off_fav();return false;}
})

//função_animation_fav_
function on_fav() {
	fav_button_icon.style.marginLeft = "5px"
	setTimeout(function () {fav_button_icon.style.marginLeft = "10px"},50)
	setTimeout(function () {fav_button_icon.style.marginLeft = "15px"},100)
	setTimeout(function () {fav_button_icon.style.marginLeft = "20px"},150)
	setTimeout(function () {fav_button_icon.style.marginLeft = "25px"},200)
  	on_off_fav = 1	
	document.getElementById("heart").src = "fav_on.png"
}
function off_fav() {
	fav_button_icon.style.marginLeft = "20px"
	setTimeout(function () {fav_button_icon.style.marginLeft = "15px"},50)
	setTimeout(function () {fav_button_icon.style.marginLeft = "10px"},100)
	setTimeout(function () {fav_button_icon.style.marginLeft = "5px"},150)
	setTimeout(function () {fav_button_icon.style.marginLeft = "0px"},200)
	on_off_fav=0;
	document.getElementById("heart").src = "fav_off.png"
}
//FAVORITOS_EVENTOS____________________________________________________________________________
fav_button.addEventListener("click", function () {
	if (localStorage.getItem("favoritos")==null) {
		var array = JSON.stringify([anime_id])
		localStorage.setItem("favoritos",array)
	}
	else {var favoritos = JSON.parse(localStorage.getItem("favoritos"))
          var test = favoritos.indexOf(anime_id)
          if (test == -1) {favoritos.push(anime_id); localStorage.setItem("favoritos",JSON.stringify(favoritos))}
          else {favoritos.splice(favoritos.indexOf(anime_id),1); localStorage.setItem("favoritos", JSON.stringify(favoritos))}
          }
})

//PESQUISAR_EP_________________________________________________________________________________
var search_ep = document.getElementById("search_ep")
search_ep.addEventListener("click", function () {
	search_ep.style.background = "transparent"
})
search_ep.addEventListener("change", function () {
	var value = search_ep.value
	var video_ep = document.querySelectorAll("div.container_episode_")
	var limit4 = 0
    var url_anime = "https://appanimeplus.tk/play-api.php?cat_id="+anime_id
	if (value=="") {search_ep.style.background = "url('search.png')"; video_ep.forEach(function (obj2) {obj2.remove()});
var xml4 = new XMLHttpRequest()
xml4.open("GET",url_anime)
xml4.onreadystatechange = () => {
if (limit4==0) { 	
array2 = JSON.parse(xml4.responseText)
show_ep_container(array2)
if (localStorage.getItem(anime_id)!=null) {
  var save_ep = JSON.parse(localStorage.getItem(anime_id))
  save_ep.forEach(function (obj) {
    document.getElementById(obj).style.color = "#FF8C00"
  })

}
limit4=1;
return false;}
}
xml4.send()
}

else {
video_ep.forEach(function (obj2) {obj2.remove()})	
var xml3 = new XMLHttpRequest()
xml3.open("GET",url_anime)
xml3.onreadystatechange = () => {
if (limit4==0) {
array2 = JSON.parse(xml3.responseText)
array2.forEach(function (obj) {	
if (obj.title.indexOf(value)!= -1) {video_ep.forEach(function (obj2) {obj2.remove()}); 
var new_ce = document.createElement("div")
new_ce.classList.add("container_episode_")
var new_pe = document.createElement("p")
var text_ep = document.createTextNode(obj.title)
new_pe.appendChild(text_ep)
new_ce.id = obj.video_id
new_ce.onclick = function () {
        salvar_ep(new_ce.id); 
        salvar_nos_vistos(new_ce.id)
        container_video_open(new_ce.id)
        document.getElementById(new_ce.id).style.color = "#FF8C00"
}
new_ce.appendChild(new_pe)

container_episodes.appendChild(new_ce)
if (localStorage.getItem(anime_id)!=null && JSON.parse(localStorage.getItem(anime_id)).indexOf(new_ce.id) != -1) {
  document.getElementById(obj.video_id).style.color = "#FF8C00"
}
}

})
limit4=1;
return false;}
}
xml3.send()		

}	
})
//SALVAR_EPISODIO______________________________________________________________________________________
function salvar_ep(id) {
  var new_id = String(id)
	if (localStorage.getItem(anime_id)==null) {
		localStorage.setItem(anime_id, JSON.stringify([id]))
		document.getElementById(id).style.color = "#FF8C00"
	}
	else {var save = JSON.parse(localStorage.getItem(anime_id))
 if (save.indexOf(new_id)== -1) {save.push(new_id); localStorage.setItem(anime_id, JSON.stringify(save)); save.forEach(function (obj) {
  document.getElementById(id).style.color = "#FF8C00"
 })}
	}
	
}

//ABRIR_CONTAINER_VIDEO________________________________________________________________________________
function container_video_open(id) {
    var url_video = "https://appanimeplus.tk/play-api.php?episodios="+id
    var limit5 = 0
    xml5 = new XMLHttpRequest()
    xml5.open("GET", String(url_video))
    xml5.onreadystatechange = () => {
    if (limit5==0) {
    var obj = JSON.parse(xml5.responseText)[0]
    var player_video = document.getElementById("player_video")
    player_video.src = obj.location
    var p_title_ep = document.getElementById("title_ep")
    var link_download = document.getElementById("link_download")
    var on_off_2 = document.getElementById("on_off_2")
    var on_off_2_icon = document.getElementById("on_off_2_icon")
    var exit_container_player_video = document.getElementById("exit_container_player_video")
    on_off_2.onclick = function () {
      sh_hd(obj,link_download,on_off_2_icon,player_video)
    }
    exit_container_player_video.onclick = function () {
    	exit_container_player(p_title_ep,link_download,on_off_2_icon,player_video)
    }
    link_download.href = obj.location
    if (obj.title.length<=15) {p_title_ep.innerHTML = obj.title}
    else {p_title_ep.innerHTML = obj.title.substring(0,15)+"..."}	

    limit5=1;return false;}}
    xml5.send()



	container_video.style.opacity = "25%"
	container_video.style.display = "block"
	setTimeout(function () {container_video.style.opacity = "25%"},50)
	setTimeout(function () {container_video.style.opacity = "50%"},100)
	setTimeout(function () {container_video.style.opacity = "75%"},150)
	setTimeout(function () {container_video.style.opacity = "100%"},200)
}

//MUDAR_RESOLUÇÃO_______________________________________________________________________________________
var sd_hd_state = 0
function sh_hd(obj,link_download,on_off_2_icon,player_video) {
	if (sd_hd_state==0) {
       link_download.href = obj.locationsd
       player_video.src = obj.locationsd
       on_off_2_icon.style.marginLeft = "5px"
	   setTimeout(function () {on_off_2_icon.style.marginLeft = "10px"},50)
	   setTimeout(function () {on_off_2_icon.style.marginLeft = "15px"},100)
       setTimeout(function () {on_off_2_icon.style.marginLeft = "20px"},150)
	   setTimeout(function () {on_off_2_icon.style.marginLeft = "25px"},200)
  	   sd_hd_state = 1	
	   on_off_2_icon.style.background = "#FF8C00"
	   return false;
	}
	else {
       link_download.href = obj.location
       player_video.src = obj.location
       on_off_2_icon.style.marginLeft = "20px"
	   setTimeout(function () {on_off_2_icon.style.marginLeft = "15px"},50)
	   setTimeout(function () {on_off_2_icon.style.marginLeft = "10px"},100)
       setTimeout(function () {on_off_2_icon.style.marginLeft = "5px"},150)
	   setTimeout(function () {on_off_2_icon.style.marginLeft = "0px"},200)
  	   sd_hd_state = 0	
	   on_off_2_icon.style.background = "#f9f9f9"
	   return false;	   	
	}
}

//SAIR_DO_PLAYER______________________________________________________________________________________
function exit_container_player(p_title_ep,link_download,on_off_2_icon,player_video) {
       link_download.href = ""
       player_video.src = ""
       on_off_2_icon.style.marginLeft = "20px"
	   setTimeout(function () {on_off_2_icon.style.marginLeft = "15px"},50)
	   setTimeout(function () {on_off_2_icon.style.marginLeft = "10px"},100)
       setTimeout(function () {on_off_2_icon.style.marginLeft = "5px"},150)
	   setTimeout(function () {on_off_2_icon.style.marginLeft = "0px"},200)
  	   sd_hd_state = 0	
	   on_off_2_icon.style.background = "#f9f9f9"
	   container_video.style.opacity = "75%"
	   setTimeout(function () {container_video.style.opacity = "50%"},50)
	   setTimeout(function () {container_video.style.opacity = "25%"},100)
	   setTimeout(function () {container_video.style.display = "none"},150)
     document.getElementById("tab_bar_top_video").style.display = "block"
     document.getElementById("tab_bar_top_video").style.opacity = "100%"
     state = 0
}

//PESQUISAR_ANIME_____________________________________________________________________________________
pesquisar.addEventListener("click", function () {
	document.querySelectorAll("div.anime_container").forEach(function (obj) {
		obj.remove()
	})
	main.innerHTML = none
	var input = document.createElement("input")
	input.classList.add("anime_search")
	input.id = "anime_search"
	input.placeholder = "Ex: Naruto, Dragon Ball"
	var div = document.createElement("div")
	div.id ="search_button"
	div.classList.add("search_button")
	div.onclick = function () {pesquisar_anime()}
	var p_start = document.createElement("p")
	var text4 = document.createTextNode("Ir")
  var select = document.createElement("select")
  select.id = "select_category"
  select_categorias(select)
  select.onchange = function () {mostrar_categorias(select.value); localStorage.setItem("select",select.value)}
	p_start.appendChild(text4)
	div.appendChild(p_start)
	main.appendChild(input)
	main.appendChild(div)
  main.appendChild(select)  

})

//PESQUISAR_BUTTON____________________________________________________________________________________
function pesquisar_anime() {
si = 0
var limit6 = 0
limit = 0
document.querySelectorAll("div.anime_container").forEach(function (obj) {obj.remove()})	
var val = document.getElementById("anime_search").value
var xml6 = new XMLHttpRequest()
if (val!="") {
xml6.open("GET","https://appanimeplus.tk/play-api.php?search="+val)
xml6.onreadystatechange = () => {
if (limit6==0) {
var array3 = JSON.parse(xml6.responseText)
novos_lancamentos_mod(array3)

	
limit6=1; return false;}
}

xml6.send()

}


}

//NOSO_LANCAMENTOS_FUNÇÃO_MODIFICADA___________________________________________________________________
function novos_lancamentos_mod(array) {if (limit==0) {
	array.forEach(function (obj) {
		var container = document.createElement("div")
		container.classList.add("anime_container")
		var image_container = document.createElement("div")
		var anime_image = document.createElement("img")
		anime_image.src = "https://cdn.appanimeplus.tk/img/"+obj.category_image
		image_container.appendChild(anime_image)
		var title = document.createElement("p")
		var p1 = document.createTextNode(obj.category_name)
		title.appendChild(p1)
		container.appendChild(image_container)
		container.appendChild(title)
		container.id = obj.id
		container.onclick = function () {
			//eventos_de_click
            anime_id = String(container.id)
            abri_container_ep()
			//eventos_de_click
		}
		main.appendChild(container)

	})
limit=1}
}

//APARECER_FAVORITOS___________________________________________________________________________________
favoritos.addEventListener("click", function () {
  mostrar_favoritos()
})

//FUNÇÃO_MOSTRAR_FAVORITOS_____________________________________________________________________________
function mostrar_favoritos() {
  main.innerHTML = none
  if (localStorage.getItem("favoritos")!=null) {
    var favoritos = JSON.parse(localStorage.getItem("favoritos"))
    favoritos.forEach(function (obj) {
      var limit7 = 0
      var xml7 = new XMLHttpRequest()
      xml7.open("GET","https://appanimeplus.tk/play-api.php?info="+obj)
      xml7.onreadystatechange = () => {
        if (limit7==0) {var array4 = JSON.parse(xml7.responseText)[0]
          var div = document.createElement("div")
          div.id = array4.id
          div.classList.add("anime_container")
          var div1 = document.createElement("div")
          var img = document.createElement("img")
          img.alt = none
          img.src = "https://cdn.appanimeplus.tk/img/"+array4.category_image
          div1.appendChild(img)
          div.appendChild(div1)
          p_title_anime = document.createElement("p")
          text_anime = document.createTextNode(array4.category_name)
          p_title_anime.appendChild(text_anime)
          div.appendChild(p_title_anime)
          div.onclick = function () {
              //eventos_de_click
              anime_id = String(array4.id)
                    abri_container_ep()
              //eventos_de_click
    }
          main.appendChild(div) 


      limit7=1; return false}
      }
      xml7.send()

    })
  }
}

//ADICIONAR_A_LISTA_DE_DESEJOS___________________________________________________________________________
var add_button = document.getElementById("add")
add_button.addEventListener("click", function () {
  if (section==0 || section==1 || section==2 || section==3) {
  if (localStorage.getItem("lista_desejos")==null) {
    localStorage.setItem("lista_desejos",JSON.stringify([anime_id]))
    document.getElementById("add_icon").innerHTML = "-"
  return false;}
  else {var ld = JSON.parse(localStorage.getItem("lista_desejos"));
  if (ld.indexOf(anime_id) == -1) {ld.push(anime_id); localStorage.setItem("lista_desejos", JSON.stringify(ld)); document.getElementById("add_icon").innerHTML = "-"}
  else {ld.splice(ld.indexOf(anime_id),1); localStorage.setItem("lista_desejos", JSON.stringify(ld)); document.getElementById("add_icon").innerHTML = "+"}
  return false;}
}
  if (section==4 && sa==0) {if (localStorage.getItem("assistindo")!=null) {
    var ld = JSON.parse(localStorage.getItem("assistindo"))
    if (ld.indexOf(anime_id)!= -1) {ld.splice(ld.indexOf(anime_id),1); localStorage.setItem("assistindo", JSON.stringify(ld))
    document.getElementById("add_icon").innerHTML = "+"}
    } 
  }

  if (section==4 && sa==1) {if (localStorage.getItem("assistindo")!=null) {
    var ld = JSON.parse(localStorage.getItem("assistidos"))
    if (ld.indexOf(anime_id)!= -1) {ld.splice(ld.indexOf(anime_id),1); localStorage.setItem("assistidos", JSON.stringify(ld))
    document.getElementById("add_icon").innerHTML = "+"}
    } 
  }

})

//LISTA DE DESEJOS_______________________________________________________________________________________
lista.addEventListener("click", function () {
mostrar_lista()
})

//FUNÇÃO_LISTA________________________________________________________________________________________________
function mostrar_lista() {
  main.innerHTML = none
    if (localStorage.getItem("lista_desejos")!=null) {
    var favoritos = JSON.parse(localStorage.getItem("lista_desejos"))
    favoritos.forEach(function (obj) {
      var limit7 = 0
      var xml7 = new XMLHttpRequest()
      xml7.open("GET","https://appanimeplus.tk/play-api.php?info="+obj)
      xml7.onreadystatechange = () => {
        if (limit7==0) {var array4 = JSON.parse(xml7.responseText)[0]
          var div = document.createElement("div")
          div.id = array4.id
          div.classList.add("anime_container")
          var div1 = document.createElement("div")
          var img = document.createElement("img")
          img.alt = none
          img.src = "https://cdn.appanimeplus.tk/img/"+array4.category_image
          div1.appendChild(img)
          div.appendChild(div1)
          p_title_anime = document.createElement("p")
          text_anime = document.createTextNode(array4.category_name)
          p_title_anime.appendChild(text_anime)
          div.appendChild(p_title_anime)
          div.onclick = function () {
              //eventos_de_click
              anime_id = String(array4.id)
                    abri_container_ep()
              //eventos_de_click
    }
          main.appendChild(div) 


      limit7=1; return false}
      }
      xml7.send()

    })
  }
}

//CATEGORIAS__________________________________________________________________________________________________
function select_categorias(select) {
  //aventura
  var option_aventura = document.createElement("option")
  option_aventura.value = "aventura"
  option_aventura.innerHTML = "Aventura"
  //ação
  var option_acao = document.createElement("option")
  option_acao.value = "acao"
  option_acao.innerHTML = "Ação"
  //drama
  var option_drama = document.createElement("option")
  option_drama.value = "drama"
  option_drama.innerHTML = "Drama"
  //dublado
  var option_dublado = document.createElement("option")
  option_dublado.value = "dublado"
  option_dublado.innerHTML = "Dublado"
  //ecchi
  var option_ecchi = document.createElement("option")
  option_ecchi.value = "ecchi"
  option_ecchi.innerHTML = "Ecchi"
  //escolar
  var option_escolar = document.createElement("option")
  option_escolar.value = "escolar"
  option_escolar.innerHTML = "Escolar"
  //esporte
  var option_esporte = document.createElement("option")
  option_esporte.value = "esporte"
  option_esporte.innerHTML = "Esporte" 
  //fantasia 
  var option_fantasia = document.createElement("option")
  option_fantasia.value = "fantasia"
  option_fantasia.innerHTML = "Fantasia"
  //filme
  var option_filme = document.createElement("option")
  option_filme.value = "filme"
  option_filme.innerHTML = "Filme"
  //harem
  var option_harem = document.createElement("option")
  option_harem.value = "harem"
  option_harem.innerHTML = "Harem"
  //historico
  var option_historico = document.createElement("option")
  option_historico.value = "historico"
  option_historico.innerHTML = "Histórico" 
  //jogo
  var option_jogo = document.createElement("option")
  option_jogo.value = "jogo"
  option_jogo.innerHTML = "Jogo"
  //josei 
  var option_josei = document.createElement("option")
  option_josei.value = "josei"
  option_josei.innerHTML = "Josei"
  //magia
  var option_magia = document.createElement("option")
  option_magia.value = "magia"
  option_magia.innerHTML = "Magia"
  //mecha
  var option_mecha = document.createElement("option")
  option_mecha.value = "mecha"
  option_mecha.innerHTML = "Mecha"
  //militar
  var option_militar = document.createElement("option")
  option_militar.value = "militar"
  option_militar.innerHTML = "Militar"
  //misterio
  var option_misterio = document.createElement("option")
  option_misterio.value = "misterio"
  option_misterio.innerHTML = "Mistério"
  //ova
  var option_ova = document.createElement("option")
  option_ova.value = "ova"
  option_ova.innerHTML = "Ova"
  //poderes
  var option_poderes = document.createElement("option")
  option_poderes.value = "poderes"
  option_poderes.innerHTML = "Poderes"
  //psicologico
  var option_psicologico = document.createElement("option")
  option_psicologico.value = "psicologico"
  option_psicologico.innerHTML = "Psicológico"
  //romance
  var option_romance = document.createElement("option")
  option_romance.value = "romance"
  option_romance.innerHTML = "Romance"
  //samurai
  var option_samurai = document.createElement("option")
  option_samurai.value = "samurai"
  option_samurai.innerHTML = "Samurai"
  //sci-fi
  var option_sci_fi = document.createElement("option")
  option_sci_fi.value = "sci-fi"
  option_sci_fi.innerHTML = "Sci-fi"
  //seinen
  var option_seinen = document.createElement("option")
  option_seinen.value = "seinen"
  option_seinen.innerHTML = "Seinen" 
  //shoujo      
  var option_shoujo = document.createElement("option")
  option_shoujo.value = "shoujo"
  option_shoujo.innerHTML = "Shoujo"
  //shounen
  var option_shounen = document.createElement("option")
  option_shounen.value = "shounen"
  option_shounen.innerHTML = "Shounen"
  //slice_of_life
  var option_slice_of_life = document.createElement("option")
  option_slice_of_life.value = "slice_of_life"
  option_slice_of_life.innerHTML = "Slice of Life"
  //sobrenatural
  var option_sobrenatural = document.createElement("option")
  option_sobrenatural.value = "sobrenatural"
  option_sobrenatural.innerHTML = "Sobrenatural"
  //suspense
  var option_suspense = document.createElement("option")
  option_suspense.value = "suspense"
  option_suspense.innerHTML = "Suspense"
  //terror
  var option_terror = document.createElement("option")
  option_terror.value = "terror"
  option_terror.innerHTML = "Terror"
  //yaoi  
  var option_yaoi = document.createElement("option")
  option_yaoi.value = "yaoi"
  option_yaoi.innerHTML = "Yaoi"
  //yuri
  var option_yuri = document.createElement("option")
  option_yuri.value = "yuri"
  option_yuri.innerHTML = "Yuri"

  var array5 = [option_aventura,option_acao,option_drama,option_dublado,option_ecchi,option_escolar,
  option_esporte,option_fantasia,option_filme,option_harem,option_historico,option_jogo,option_josei,
  option_magia,option_mecha,option_militar,option_misterio,option_ova,option_poderes,option_psicologico,
  option_romance,option_samurai,option_sci_fi,option_seinen,option_shoujo,option_shounen,option_slice_of_life,
  option_sobrenatural,option_suspense,option_terror]

  array5.forEach(function (obj) {
    select.appendChild(obj)
  })
}

//FUNÇÃO_APARECER_CATEGORIAS_ANIME_______________________________________________________________________________
function mostrar_categorias(value) {
  si=1
  document.querySelectorAll("div.anime_container").forEach(function (obj) {obj.remove()})
  var url_categorias = "https://appanimeplus.tk/play-api.php?categoria="+String(value)
  var limit8 = 0
  var xml8 = new XMLHttpRequest()
  xml8.open("GET",url_categorias)
  xml8.onreadystatechange = () => {
    if (limit8==0) {
    var array6 = JSON.parse(xml8.responseText)
    limit=0
    novos_lancamentos_mod(array6)


    limit8=1;return false;}
  }
  xml8.send()

}

//TEST_PLAYER_____________________
var state = 0
var player_video_test = document.getElementById("player_video")
player_video_test.addEventListener("click", function () {
  player_video_test.play()
})

player_video_test.onplay = function () {
  var tab_bar_top_video = document.getElementById("tab_bar_top_video")
  setTimeout(function () {tab_bar_top_video.style.opacity = "75%"
  setTimeout(function () {tab_bar_top_video.style.opacity = "50%"},50)
  setTimeout(function () {tab_bar_top_video.style.opacity = "25%"},100)
  setTimeout(function () {tab_bar_top_video.style.display = "none"},150)
  },500)
}
player_video_test.addEventListener("pause", function () {

  var tab_bar_top_video = document.getElementById("tab_bar_top_video")
  setTimeout(function () {tab_bar_top_video.style.display = "block"
  setTimeout(function () {tab_bar_top_video.style.opacity = "50%"},50)
  setTimeout(function () {tab_bar_top_video.style.opacity = "75%"},100)
  setTimeout(function () {tab_bar_top_video.style.opacity = "100%"},150)
  },150)
})

//PEGAR_ID_VISTO_______________________________________________________________________________________________________
function salvar_nos_vistos(id) {
 if (localStorage.getItem("vistos")==null) {
    xml9 = new XMLHttpRequest()
    xml9.open("GET", "https://appanimeplus.tk/play-api.php?episodios="+id)
    var limit9 = 0
    xml9.onreadystatechange = () => {
      if (limit9==0) {
        limit10 = 0;
        ver_se_ja_foi_assistido(JSON.parse(xml9.responseText)[0].category_id)
        salvar_id_nos_vistos(JSON.parse(xml9.responseText)[0].category_id)
        limit9=1;return false;}
    }
    xml9.send()
 }

}

//FUNÇÃO_VISTOS_______________________________________________________________________________________________________
function salvar_id_nos_vistos(id) {
  if (localStorage.getItem("assistindo")==null) {
      localStorage.setItem("assistindo",JSON.stringify([id]))
       return false;}
  if (localStorage.getItem("assistindo")!=null) {
        var assistindo = JSON.parse(localStorage.getItem("assistindo"))
        if (assistindo.indexOf(id) == -1) {assistindo.push(id); localStorage.setItem("assistindo",JSON.stringify(assistindo));return false;}
       }
}

//BOTAO_VISTOS____
vistos.addEventListener("click", function () {
  main.innerHTML = none
  var select_type = document.createElement("select")
  select_type.id = "select_type"
  var option_assistindo = document.createElement("option")
  var option_assistidos = document.createElement("option")
  option_assistindo.value = "assistindo"
  option_assistidos.value = "assistidos"
  option_assistindo.innerHTML = "Assistindo"
  option_assistidos.innerHTML = "Assistidos"
  select_type.appendChild(option_assistindo)
  select_type.appendChild(option_assistidos)
  main.appendChild(select_type)
  select_type.onchange = function () {
    if (select_type.value=="assistindo") {document.querySelectorAll("div.anime_container").forEach(function (obj) {
      obj.remove()
    }); mostrar_assistindo();sa=0;}
    else {document.querySelectorAll("div.anime_container").forEach(function (obj) {
      obj.remove()
    });mostrar_assistidos();sa=1}  
  }
  if (localStorage.getItem("assistindo")!=null) {}
  mostrar_assistindo()
  sa=0;
})

//MOSTRAR_ASSISNTINDO_________________________________________________________________________________________________
function mostrar_assistindo() {
  if (localStorage.getItem("assistindo")!=null) {
    var favoritos = JSON.parse(localStorage.getItem("assistindo"))
    favoritos.forEach(function (obj) {
      var limit7 = 0
      var xml7 = new XMLHttpRequest()
      xml7.open("GET","https://appanimeplus.tk/play-api.php?info="+obj)
      xml7.onreadystatechange = () => {
        if (limit7==0) {var array4 = JSON.parse(xml7.responseText)[0]
          var div = document.createElement("div")
          div.id = array4.id
          div.classList.add("anime_container")
          var div1 = document.createElement("div")
          var img = document.createElement("img")
          img.alt = none
          img.src = "https://cdn.appanimeplus.tk/img/"+array4.category_image
          div1.appendChild(img)
          div.appendChild(div1)
          p_title_anime = document.createElement("p")
          text_anime = document.createTextNode(array4.category_name)
          p_title_anime.appendChild(text_anime)
          div.appendChild(p_title_anime)
          div.onclick = function () {
              //eventos_de_click
              anime_id = String(array4.id)
                    abri_container_ep()
              //eventos_de_click
    }
          main.appendChild(div) 


      limit7=1; return false}
      }
      xml7.send()

    })
  }
}

//ASSISTIDOS___________________________________________________________________________________________________________
limit10 = 0
function ver_se_ja_foi_assistido(id) {
  if (localStorage.getItem(id)!=null) {
    var anime_array = JSON.parse(localStorage.getItem(id))
    var xml10 = new XMLHttpRequest()
    xml10.open("GET", "https://appanimeplus.tk/play-api.php?cat_id="+id)
    xml10.onreadystatechange = () => {
    if (limit10==0) {
    var array7 = JSON.parse(xml10.responseText)
    console.log(array7)
    if (array7.length==anime_array.length) {
      if (localStorage.getItem("assistidos")==null) {
      localStorage.setItem("assistidos",JSON.stringify([id]))

      if (localStorage.getItem("assistindo")!=null) {
      var assistindo_l = JSON.parse(localStorage.getItem("assistindo"))
      assistindo_l.splice(assistindo_l.indexOf(id),1)
      localStorage.setItem("assistindo", JSON.stringify(assistindo_l))
      }  

      return false;}
      else {var assistidos_lista = JSON.parse(localStorage.getItem("assistidos"));
      if (assistidos_lista.indexOf(id)== -1) {assistidos_lista.push(id); localStorage.setItem("assistidos",JSON.stringify(assistidos_lista));return false;}

      return false;}
    }
    limit10=1;return false;}
    }
    xml10.send()
  }
}

function verificar_assistidos() {setInterval(function () {
  if (localStorage.getItem("assistidos")!=null && localStorage.getItem("assistindo")!=null) {
    var assistindo_li = JSON.parse(localStorage.getItem("assistindo"))
    var assistidos_li = JSON.parse(localStorage.getItem("assistidos"))
    assistindo_li.forEach(function (id1) {
    assistidos_li.forEach(function (id2) {
      if (id1==id2) {
        assistindo_li.splice(assistindo_li.indexOf(id1),1)
        localStorage.setItem("assistindo",JSON.stringify(assistindo_li))
      }
    })
    })
  }
},100)
}

//MOSTRAR_ASSISTIDOS_________________________________________________________________________________________________________________________________________
function mostrar_assistidos() {
  if (localStorage.getItem("assistidos")!=null) {
    var favoritos = JSON.parse(localStorage.getItem("assistidos"))
    favoritos.forEach(function (obj) {
      var limit7 = 0
      var xml7 = new XMLHttpRequest()
      xml7.open("GET","https://appanimeplus.tk/play-api.php?info="+obj)
      xml7.onreadystatechange = () => {
        if (limit7==0) {var array4 = JSON.parse(xml7.responseText)[0]
          var div = document.createElement("div")
          div.id = array4.id
          div.classList.add("anime_container")
          var div1 = document.createElement("div")
          var img = document.createElement("img")
          img.alt = none
          img.src = "https://cdn.appanimeplus.tk/img/"+array4.category_image
          div1.appendChild(img)
          div.appendChild(div1)
          p_title_anime = document.createElement("p")
          text_anime = document.createTextNode(array4.category_name)
          p_title_anime.appendChild(text_anime)
          div.appendChild(p_title_anime)
          div.onclick = function () {
              //eventos_de_click
              anime_id = String(array4.id)
                    abri_container_ep()
              //eventos_de_click
    }
          main.appendChild(div) 


      limit7=1; return false}
      }
      xml7.send()

    })
  }



}


