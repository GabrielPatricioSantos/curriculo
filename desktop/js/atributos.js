function ShowHTML() {
    let descricaoHTML = document.querySelector('.texto_atributo_html');
    
    if (descricaoHTML.classList.contains('hidden')){
       
      descricaoHTML.classList.remove('hidden');
      descricaoHTML.classList.remove('texto_atributo_mobile');

    } else {
        descricaoHTML.classList.add('hidden');
    }
   
}

function ShowCSS() {
    let descricaoCSS = document.querySelector('.texto_atributo_css');
    
    if (descricaoCSS.classList.contains('hidden')){
       
      descricaoCSS.classList.remove('hidden');

    } else {
        descricaoCSS.classList.add('hidden');
        
    }
   
}

function ShowJS() {
    let descricaoJS = document.querySelector('.texto_atributo_js');
    
    if (descricaoJS.classList.contains('hidden')){
       
      descricaoJS.classList.remove('hidden');

    } else {
        descricaoJS.classList.add('hidden');
    }
   
}

function ShowCSS() {
    let descricaoCSS = document.querySelector('.texto_atributo_css');
    
    if (descricaoCSS.classList.contains('hidden')){
       
      descricaoCSS.classList.remove('hidden');

    } else {
        descricaoCSS.classList.add('hidden');
    }
   
}

function ShowSQL() {
    let descricaoSQL = document.querySelector('.texto_atributo_sql');
    
    if (descricaoSQL.classList.contains('hidden')){
       
      descricaoSQL.classList.remove('hidden');

    } else {
        descricaoSQL.classList.add('hidden');
    }
   
}

function ShowAWS() {
    let descricaoAWS = document.querySelector('.texto_atributo_aws');
    
    if (descricaoAWS.classList.contains('hidden')){
       
        descricaoAWS.classList.remove('hidden');
      } else {
        descricaoAWS.classList.add('hidden');
    }
   
}




