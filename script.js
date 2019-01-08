var redWordsThird = ["you", "me", "I", "we", "us", "ourselves"];

function getSent() {
  let data = document.getElementById('essay').value;
  let sentenceNum = data.split(" ");
  let senLen = sentenceNum.length; 
  let totalLen = 0;
  
  let patern = /[?!\.]/;
  
  
  for (let i = 0;i < senLen;i++) {
    if(patern.test(sentenceNum[i])) {
      totalLen++;
    }  
  }
  
  document.getElementById('num').value = "Number of Sentences: " + totalLen;
}

function getDeadWords() {
  var deadWords = "a lot,lots,awesome,cool,big,huge,funny,get,got,good,guy,kid,kind of,sort of,like,mad,nice,sad,scared,things,very,but,so,show,also,I believe,I feel,I think,I know,in my opinion,as to whether,due to the fact that,each and every,equally as,interesting,in terms of,irreguardless,nature,on account of,only,supposed to,use to,try and,this quote shows,bad,happy".split(",");
  let essay = document.getElementById('essay').value.split(" ");
  let essayText = document.getElementById('essay').value;
  var final = essayText;
  let num = 0;
  
  if(essay.length == 1) {
    return;
  }
  
  for (let i = 0;i < deadWords.length;i++) {
    let replace = deadWords[i];
    let re = new RegExp(replace, "ig");
    if (re.test(final)) {
      num++;
    }
    
    final = final.replace(re, "<" + replace + ">");
  }
  
  document.getElementById('essay').value = final;
  document.getElementById("dead").value = `Dead Word Count: ${num}`;
}
