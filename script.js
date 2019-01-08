var deadWords = "a lot,lots,awesome,cool,big,huge,funny,get,got,good,guy,kid,kind of,sort of,like,mad,nice,sad,scared,things,very,but,so,show,also,I believe, I feel, I think, I know, in my opinion,as to whether,due to the fact that,each and every,equally as,interesting,in terms of,irreguardless,nature,on account of,only,supposed to,use to,try and,this quote shows".split(",");
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
  let essay = document.getElementById('essay').value.split(" ");
  
  if(essay.length == 1) {
    return;
  }
  
  if (document.getElementById('1').checked === true) {
    for (let i = 0;i < essay.length;i++) {
      for (let j = 0;j < redWordsThird.length;j++) {
      
      }
    }
  } 
  
  for (let i = 0;i < essay.length;i++) {
    for (let j = 0;j < deadWords.length;i++) {
      
    }
  }
}
