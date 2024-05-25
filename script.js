function getVal(){
  const selectedHymn = Number(document.getElementById('hymn').value);
  const hymnTitle = document.getElementById('song');
  const hymnNumber = document.getElementById('hymn-number');
  const hymnSelection = document.querySelector('form');

  //hymn One Content
  const firstParagraph = document.querySelector('.hymnOne');

 //hymn Two Content
  const secondParagraph = document.querySelector('.hymnTwo');

  //hymn Three Content
  const ThirdParagraph = document.querySelector('.hymnThree');

  //Hymn Four Content
  const forthParagraph = document.querySelector('.hymnFour');

  //Hymn Five Content
  const fifthParagraph = document.querySelector('.hymnFive');

  //Hymn Six Content
  const sixthParagraph = document.querySelector('.hymnSix');

  //Hymn Seven Content
  const seventhParagraph = document.querySelector('.hymnSeven');

  //Hymn Eight Content
  const eighthParagraph = document.querySelector('.hymnEight');

  //Hymn Nine Content
  const ninthParagraph = document.querySelector('.hymnNine');

  //Hymn Ten Content
  const tenthParagraph = document.querySelector('.hymnTen');

  //Hymn Eleven Content
  const eleventhParagraph = document.querySelector('.hymnEleven');

  //Hymn Twelve Content
  const twefthParagraph = document.querySelector('.hymnTwelve');

  //Hymn Thirteen Content
  const thirteenthParagraph = document.querySelector('.hymnThirteen');

  //Hymn Fourteen Content
  const fourteenthParagraph = document.querySelector('.hymnFourteen');

  //Hymn Fifteen Content
  const fifteenthParagraph = document.querySelector('.hymnFifteen');
  
  //Hymn Sixteen Content
  const sixteenthParagraph = document.querySelector('.hymnSixteen');

  //Hymn Seventeen Content
  const seventeenthParagraph = document.querySelector('.hymnSeventeen');

  //Hymn Eighteen Content
  const eighteenthParagraph = document.querySelector('.hymnEighteen');

  //Hymn  Nineteen Content
  const nineteenthParagraph = document.querySelector('.hymnNineteen');

  //Hymn Twenty Content
  const twenthParagraph = document.querySelector('.hymnTwenty');

  if(selectedHymn === 1){
    hymnNumber.innerText = 1;
    hymnTitle.innerText = "Vuthela Icilongo";
    firstParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';
   
  } else if(selectedHymn === 2){
    hymnNumber.innerText = 2;
    hymnTitle.innerText = "Emnyango Impela";
    secondParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';
   
  } else if(selectedHymn === 3){
      hymnNumber.innerText = 3;
      hymnTitle.innerText = "Ubuso Nobuso";
      ThirdParagraph.style.display = 'flex';
      hymnSelection.style.display = 'none';
     
  } else if(selectedHymn === 4){
    hymnNumber.innerText = 4;
    hymnTitle.innerText = "U Yeza";
    forthParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';
   
  } else if(selectedHymn === 5){
    hymnNumber.innerText = 5;
    hymnTitle.innerText = "Kude Kangakanani eKhaya?";
    fifthParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';
 
  } else if(selectedHymn === 6){
    hymnNumber.innerText = 6;
    hymnTitle.innerText = "Lindani, Bangcwele";
    sixthParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';
  
  } else if(selectedHymn === 7){
    hymnNumber.innerText = 7;
    hymnTitle.innerText = "Nxa Efika";
    seventhParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';
  
  } else if(selectedHymn === 8){
    hymnNumber.innerText = 8;
    hymnTitle.innerText = "Nxa Bebizwa Phezulu";
    eighthParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';
    
  } else if(selectedHymn === 9){
    hymnNumber.innerText = 9;
    hymnTitle.innerText = "UJes’ U Yeza Futhi!";
    ninthParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';

  } else if(selectedHymn === 10){
    hymnNumber.innerText = 10;
    hymnTitle.innerText = "Buthanani Emfuleni";
    tenthParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';

  } else if(selectedHymn === 11){
    hymnNumber.innerText = 11;
    hymnTitle.innerText = "Ngi Zokulandela";
    eleventhParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';
  }
  else if(selectedHymn === 12){
    hymnNumber.innerText = 12;
    hymnTitle.innerText = "Ku Khona uMthombo";
    twefthParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';

  } else if(selectedHymn === 13){
    hymnNumber.innerText = 13;
    hymnTitle.innerText = "Mhlope Ku Neqhwa";
    thirteenthParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';

  } else if(selectedHymn === 14){
    hymnNumber.innerText = 14;
    hymnTitle.innerText = "Yizwa imali Iwa!";
    fourteenthParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';

  } else if(selectedHymn === 15){
    hymnNumber.innerText = 15;
    hymnTitle.innerText = "UJes’ U Yangithanda!";
    fifteenthParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';

  } else if(selectedHymn === 16){
    hymnNumber.innerText = 16;
    hymnTitle.innerText = "Zinyawana Qaphelani";
    sixteenthParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';

  } else if(selectedHymn === 17){
    hymnNumber.innerText = 17;
    hymnTitle.innerText = "Luthando Olusithabisayo";
    seventeenthParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';

  } else if(selectedHymn === 18){
    hymnNumber.innerText = 18;
    hymnTitle.innerText = "Mabutho ka Krestu Phambili";
    eighteenthParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';

  } else if(selectedHymn === 19){
    hymnNumber.innerText = 19;
    hymnTitle.innerText = "Hlala U Lindile";
    nineteenthParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';

  } else if(selectedHymn === 20){
    hymnNumber.innerText = 20;
    hymnTitle.innerText = "Vuka Khuthala Moya Wami";
    twenthParagraph.style.display = 'flex';
    hymnSelection.style.display = 'none';
  }
}