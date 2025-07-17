//Contexte graphique
const cvs = document.getElementById("zone_de_dessin");
cvs.width = 300;
cvs.height = 400;
cvs.style.cursor = "pointer";
const ctx = cvs.getContext("2d");


//Images
const imageArrierePlan = new Image();
imageArrierePlan.src = "images/arrierePlan.png";

const imageAvantPlan = new Image();
imageAvantPlan.src = "images/avantPlan.png";

const imageOiseau1 = new Image();
imageOiseau1.src = "images/oiseau1.png";

const imageOiseau2 = new Image();
imageOiseau2.src = "images/oiseau2.png";

const imageTuyauBas = new Image();
imageTuyauBas.src = "images/tuyauBas.png";

const imageTuyauHaut = new Image();
imageTuyauHaut.src = "images/tuyauHaut.png";


//Les sons
const sonVole = new Audio();
sonVole.src = "sons/sonVole.mp3"

const sonScore = new Audio();
sonScore.src = "sons/sonScore.mp3"

const sonChoc = new Audio();
sonChoc.src = "sons/sonChoc.mp3"


//Paramètres des tuyaux
const largeurTuyau = 40;
const ecartTuyaux = 80;

let tabTuyaux = [];

tabTuyaux[0] = {
    x: cvs.width,
    y: cvs.height - 150,
}

//Paramètre de l'oiseau
let xoiseau = 100;
let yoiseau = 150;
const gravite = 1;
let oiseauMonte = 0;
const largeurOiseau =  34;
const hauteurOiseau =  24;

let finDuJeu = false;
let score = 0;

document.addEventListener("click", monte);
function monte(){
    if(finDuJeu === false){
        oiseauMonte = 10 ;
        yoiseau = yoiseau - 25;
        sonVole.play();    
    } else{
       setTimeout(replay, 500);
    }
}

//Pour recommencer le jeu
function replay(){
    finDuJeu = false;
    //Le location permet de recharger la page
    // Ainsi le score revient à 0.
    location.reload();
}

//Dessin
function dessine(){
    ctx.drawImage(imageArrierePlan, 0, 0);
    //Gestion des tuyaux (leur passage)
    for(let i=0; i<tabTuyaux.length; i++){
        tabTuyaux[i].x --;
        //Desin du tuyau
        ctx.drawImage(imageTuyauBas, tabTuyaux[i].x, tabTuyaux[i].y);
        ctx.drawImage(imageTuyauHaut, tabTuyaux[i].x, tabTuyaux[i].y - ecartTuyaux - imageTuyauHaut.height); 
        if(tabTuyaux[i].x === 100){
            tabTuyaux.push({
                x: cvs.width,
                y: Math.floor(100 + Math.random()*180)            
            });
        } 
        // Les tuyaux sont déjà passés se servent plus à 
        // il va faloir les supprimer une fois sortis de la zone de dessin 
        // tt en utilisant la fonction "splice" c'est une instruction
        // qui à été vue quand on étudiais les tableaux.
        else if(tabTuyaux[i].x + largeurTuyau < 0){
            tabTuyaux.splice(i, 1);
        }
        
        //Gestion des collisions
        if(yoiseau < 0 || yoiseau + hauteurOiseau > 300 || (xoiseau + largeurOiseau >= tabTuyaux[i].x && 
            xoiseau <= tabTuyaux[i].x + largeurTuyau &&
            (yoiseau + hauteurOiseau >= tabTuyaux[i].y || yoiseau + ecartTuyaux <= tabTuyaux[i].y))){
                sonChoc.play()
                finDuJeu = true;
            }
        //Gestion du score
        if(xoiseau === tabTuyaux[i].x + largeurTuyau + 5){
            score++;
            //Pour visualiser le score dans la console
            console.log("SCORE = "+score)
            sonScore.play()
        }

    }
    ctx.drawImage(imageAvantPlan, 0, cvs.height - imageAvantPlan.height);

    //Mouvement de l'oiseau
    yoiseau = yoiseau + gravite; 
    //Pourque l'oiseau batte les ailes.
    if(oiseauMonte > 0){
        oiseauMonte--
        ctx.drawImage(imageOiseau2, xoiseau, yoiseau);
    } else {
        ctx.drawImage(imageOiseau1, xoiseau, yoiseau);
    }
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, cvs.width, cvs.height);
    
    ctx.fillStyle = "green"
    ctx.font = "20px Verdana"
    ctx.fillText("Score : "+score, 10, cvs.height - 20)

    if(finDuJeu === false){
    requestAnimationFrame(dessine);
    } else {
        ctx.fillStyle = "red"
        ctx.font = "40px Verdana"
        ctx.fillText("GAME OVER", 30, 200)    

        //Pour recommencer le jeu
        ctx.fillStyle = "chocolate"
        ctx.font = "20px Verdana"
        ctx.fillText("Clic to replay", 80, 230)    

    }
}
dessine();