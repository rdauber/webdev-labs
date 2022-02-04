const makeBigger = () => {
  //    txt = document.getElementById('h1');
   //   style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
   //   currentSize = parseFloat(style);
   //   txt.style.fontSize = (currentSize + 100) + 'px';
   let newFontSizeH1=30;
   if(document.querySelector('h1').style.fontSize)
   {
      newFontSizeH1 =
      parseFloat(document.querySelector('h1').style.fontSize) + 2;
   }
   
   document.querySelector('h1').style.fontSize = `${newFontSizeH1}pt`;

   let newFontSizeContent=20;
   if(document.querySelector('.content').style.fontSize)
   {
      newFontSizeContent =
      parseFloat(document.querySelector('.content').style.fontSize) + 2;
   }
   
   document.querySelector('.content').style.fontSize = `${newFontSizeContent}pt`;
   //alert(document.querySelector("h1").style.backgroundColor);
};

const makeSmaller = () => {
   let newFontSizeH1=20;
   if(document.querySelector('h1').style.fontSize)
   {
      newFontSizeH1 =
      parseFloat(document.querySelector('h1').style.fontSize) - 2;
   }
   
   document.querySelector('h1').style.fontSize = `${newFontSizeH1}pt`;

   let newFontSizeContent=15;
   if(document.querySelector('.content').style.fontSize)
   {
      newFontSizeContent =
      parseFloat(document.querySelector('.content').style.fontSize) - 2;
   }
   
   document.querySelector('.content').style.fontSize = `${newFontSizeContent}pt`;
   //alert(document.querySelector("h1").style.backgroundColor);
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

