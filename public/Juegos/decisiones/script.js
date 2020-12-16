var Quiz=function(data){
    var _=this;
    //ui
    this.quiz_cont=document.getElementById("quiz-quiz-cont");
    this.retry_but=document.getElementById("retry_but");
    this.show_ans_but=document.getElementById("show_ans_but");
    this.quiz_title=document.getElementById("quiz_title");
    this.quiz_img=document.getElementById("quiz_img");
    this.quiz_choices_cont=document.getElementById("quiz-choices-cont");
    this.res_cont=document.getElementById("quiz-res-cont");
    this.score_cont=document.getElementById("score-cont");
    this.quiz_res_retry_but=document.getElementById("quiz-res-retry-but");
    this.quiz_res_info1=document.getElementById("quiz_res_info1");
    this.quiz_res_info2=document.getElementById("quiz_res_info2");
    //vars
    this.data=data;
    this.data_count=data.length;
    this.currentIdx=-1;
    this.currentQuestion=null;
    this.score=0;
    this.wrongCount=0;
    this.rightCount=0;

    this.init=function(){
        _.retry_but.addEventListener("click",_.retry);
        _.show_ans_but.addEventListener("click",_.showAnswer);
        _.quiz_choices_cont.addEventListener("click",_.onUserAnswer);
        _.quiz_res_retry_but.addEventListener("click",_.retry);
        _.shuffleChoices();
        _.update();
    }

    this.onUserAnswer=function(e){
        let target=e.target;
        if(target.className=="quiz-choice-but"){
            _.checkUserAnswer(target.innerText,target);
            e.stopPropagation();
        }
    }

    this.update=function(){
        if(_.currentIdx+1<_.data_count){
            _.currentIdx++;
            _.currentQuestion=_.data[_.currentIdx];
            _.quiz_title.innerText=_.currentQuestion.title;
            _.quiz_img.src=_.currentQuestion.img;
            _.quiz_choices_cont.innerHTML="";
            for(let i=0;i<_.currentQuestion.choices.length;i++){
                let button=_.makeChoiceButton(_.currentQuestion.choices[i]);
                _.quiz_choices_cont.appendChild(button);
            }
        }else{
            _.showResultScreen();
        }
    }

    this.checkUserAnswer=function(ans,button){
        if(ans==_.currentQuestion.answer){
            _.score++;
            _.rightCount++;
            button.classList.add("bg-success");
        }else{
            _.wrongCount++;
            button.classList.add("bg-danger");
        }
        setTimeout(function(){
            _.update();
        },500);
    }

    this.makeChoiceButton=function(txt){
        let button=document.createElement("span");
        button.className="quiz-choice-but";
        button.innerText=txt;
        return button;
    }

    this.shuffleChoices=function(){
        let j=0;
        for(let i=0;i<_.data_count;i++){
            let data=_.data[i];
            console.log(i);
            while(j<2){
                j++;
                let a=Math.floor(Math.random()*data.choices.length);
                let b=Math.floor(Math.random()*data.choices.length);
                console.log(data.choices[a],data.choices[b]);
                let choice_a=data.choices[a];
                data.choices[a]=data.choices[b];
                data.choices[b]=choice_a;
            }
            j=0;
        }
    }

    this.retry=function(){
        _.currentIdx=-1;
        _.currentQuestion=null;
        _.score=_.wrongCount=_.rightCount=0;
        _.shuffleChoices();
        _.update();
        _.res_cont.style.display="none";
    }

    this.showResultScreen=function(){
        _.score_cont.innerText=_.score+"/"+_.data_count;
        _.quiz_res_info1.innerHTML="<span class='txt-success'>"+_.rightCount+"</span> Correctas";
        _.quiz_res_info2.innerHTML="<span class='txt-danger'>"+_.wrongCount+"</span> Erroneas";
        _.res_cont.style.display="flex";
    }

    this.showAnswer=function(){
        let answerIdx=_.currentQuestion.choices.indexOf(_.currentQuestion.answer);
        if(answerIdx>-1){
            _.quiz_choices_cont.children[answerIdx].classList.add("bg-success");
            _.score--;
            _.wrongCount++;
            setTimeout(function(){
                _.update();
            },500);
        }
    }


};

var data=[
    {title:"piensa detenidamente",img:"imgs/img1.jpeg",choices:["Abanderado","Material amontonado","No bloquear la intersección"],answer:"Abanderado"},
    {title:"Observa a detalle.",img:"imgs/img2.png",choices:["Paso de peatones.","No peatones","Escolares."],answer:"Paso de peatones."},
    {title:"¿Qué opinas?",img:"imgs/img3.png",choices:["Se permite virar en U","No se permite virar en U ","Curva pronunciada a la izquierda."],answer:"Se permite virar en U"},
    {title:"¿será obvia para ti?",img:"imgs/img4.jpg",choices:["Alto","Alto próximo","Ceda el paso"],answer:"Alto"},
    {title:"¿Cuál será?",img:"imgs/img5.jpg",choices:["Dispositivo de dirección.","Indicadores de peligro","Curva pronunciada."],answer:"Dispositivo de dirección."},
    {title:"Analiza.",img:"imgs/img6.jpg",choices:["Zona de derrumbes.","Zona escolar","Grava suelta "],answer:"Zona de derrumbes."},
    {title:"¡Vamos que esta esta facil!",img:"imgs/img7.jpg",choices:["Zona escolar","Paso de peatones","No peatones"],answer:"Zona escolar"},
    {title:"¿Cuál será?",img:"imgs/img8.jpg",choices:["Reductor de velocidad","Superficie resbaladiza","Velocidad máxima"],answer:"Reductor de velocidad"},
    {title:"¿Qué opinas?",img:"imgs/img9.png",choices:["Sitio arqueológico","Parque Nacional","Sitio colonial."],answer:"Sitio arqueológico"},
    {title:"Concentrate",img:"imgs/img10.jpg",choices:["Prohibido rebasar o adelantar","Vehículos particulares conserven su derecha","Se puede rebasar o adelantar"],answer:"Prohibido rebasar o adelantar"}
];
var quiz=new Quiz(data);
quiz.init();