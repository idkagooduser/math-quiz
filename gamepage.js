player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML= "Question Turn-"+ player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn-" + player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();

    c1=word.charAt(1);

    ld2=Math.floor(word.length/2);
    c2=word.charAt(ld2);

    lm1=word.length-1;
    c3=word.charAt(lm1);

    r1=word.replace(c1,"_")
    r2=r1.replace(c2,"_");
    r3=r2.replace(c3,"_");

    qw="<h4 id='word_display'>Q."+r3+"</h4>";
    ib="<br>Answer:<input type='text' id='input_check_box'>";
    cb="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row= qw+ib+cb;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}

