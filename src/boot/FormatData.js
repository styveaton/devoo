
// import VueCookies from 'vue-cookies'
import { ref } from 'vue';
   

export class FormatData {
  


       verifNumber = function (number) {
              let taille = number.split('').length;

              for (var i = 0; i < 100 * taille; i++) {

                  

                     if (Number.isInteger(parseInt(number[i])) || number[i] == ';') {
                            // //console.log('pas modif', typeof parseInt(number[i]));

                     }
                     else {

                            // //console.log('modifi', 'number');


                            number = number.replace(number[i], '');

                     }
 
              }
              return  number;
     
  };

  verifTextLength = function (text, taille) {
     let final =ref('')
              let tailleT = text.split('').length;
       //console.log(tailleT,'*****************',taille)
    
       if (tailleT > taille) {
         for (var i = 0; i < taille; i++) {
           final.value += text[i];
          
         } return final.value;
       }
       else {
         return text;
       }
          
     
  };
    verifImgExist(src) {
      //console.log(src)
      const img = new Image();
      img.src = src;
      let finalImg = ref("../../assets/img/default_images1.png")
      if (img.complete) {

        //console.log('8888***')
        return src;
      } else {
        img.onload = () => {
          //console.log('sssss***')
          finalImg.value = src

        };

        img.onerror = () => {

          //console.log('errro***')
          // finalImg.value = "../../../public/assets/img/default_images1.jpg";

        };
      }
      return finalImg.value;
    

    }

    verifNumber2 = function (number) {
       const intt = ref(true);    
      
      let taille = number.split('').length;
     
              for (var i = 0; i <  taille; i++) {

                 

                     if (Number.isInteger(parseInt(number[i]))) {
                            // //console.log('pas modif', typeof parseInt(number[i]));
 intt.value = true;
                     }
                     else {

                            // //console.log('modifi', 'number');


                       intt.value = false;

                     }
 
              }
              return  intt.value;
     
       }; 
       
  verifCorrectText = function (data) {
    var reg = new RegExp('^[a-zA-Z0-9]+$'); 
       
              return reg.test(data);
     
  };
  
  verifCorrectMail = function (data) {
       
              return String(data)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
     
       };
       
  verifMessage = (data) => {
    const caracteres = ref([
      
      'ê',
      'Ê',
      'ă',
      'â',
      'Ă',
      'Â',
      '!',
      '«',
      '#', 
      '&',
      '`',
      '(',
      ')',
      '"*"',
      '"+"',
      ',',
      '-',
      
      '/',
      '{',
      '|',
      '}',
      '~',
      '[',
      // '""',
      ']',
      // '^',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      ':',
      ';',
      '<',
      '=',
      '>',
      '?',
      '@',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      '-',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      '£',
      '€',
      '¥',
      '§',
      '¿',
      'Ä',
      'Å',
      'Æ',
      'Ç',
      'È',
      'É',
      'Ñ',
      'Ö',
      'Ø',
      'Ü',
      'ß',
      'à',
      'ä',
      'å',
      'æ',
      'è',
      'é',
      'ì',
      'ñ',
      'ò',
      'ö',
      'ø',
      'ù',
      'Ü',
      '€',
      'À',
       'Ô',
      'ô'
    ]);

    const caracteresIso = ref([
      'e',
      'E',
      'a',
      'a',  
       'A',
       'A',
      '%21',
      '%22',
      '%23', 
      '%26',
      '%27',
      '%28',
      '%29',
      '"*"',
      '%2B',
      ',',
      '-',
      '%2F',
      '%7B',
      '%7C',
      '%7D',
      '%7E',
      '%5B',
      // '%5C',
      '%5D',
      // '%5E',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '%3A',
      ';',
      '%3C',
      '%3D',
      '%3E',
      '%3F',
      '%40',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      '-',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      '%A3',
      '%A4',
      '%A5',
      '%A7',
      '%BF',
      'A',
      'A',
      'A',
      'C',
     'E',
     'E',
      'N',
      'O',
      'O',
      'U',
      'B',
      'a',
        'a',  'a',  'a',
      'e',
      'e',
      
      'i',
      'n',
      'o',
           'o',
      'o',

      'u',
      'u',
      '%80',
      'A',
      'O',
      'o'

    ]);



















 


    caracteres.value.forEach((string, index) => {
      if (data.includes(string) && data !='?'&& data !='/'  ) {
        data = this.replaceAll(data, string, caracteresIso.value[index]);
      } 
    });
   
    return data;
  };

      
  verifMessage2 = (data) => {
    const caracteres = ref([
       'ê',
      'Ê',
      'ă',
      'â',
      'Ă',
      'Â',
    '!',
      '«',
      '#',/* 
      '%', */
      '&',
      '`',
      '(',
      ')',
      '"*"',
      '"+"',
      ',',
      '-',
      
      '/',
      '{',
      '|',
      '}',
      '~',
      '[',
      '',
      ']',
      // '"^"',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      ':',
      ';',
      '<',
      '=',
      '>',
      '?',
      '@',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      '-',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      '£',
      '€',
      '¥',
      '§',
      '¿',
      'Ä',
      'Å',
      'Æ',
      'Ç',
      'È',
      'É',
      'Ñ',
      'Ö',
      'Ø',
      'Ü',
      'ß',
      'à',
      'ä',
      'å',
      'æ',
      'è',
      'é',
      'ì',
      'ñ',
      'ò',
      'ö',
      'ø',
      'ù',
      'Ü',
      '€',
      'À',
      'Ô',
      'ô'
    ]);

    const caracteresIso = ref([
     
      'e',
      'E',
      'a',
      'a',  
    'A',
    'A',
      '%21',
      '%22',
      '#',/* 
      '%25', */
      '%26',
      '%27',
      '%28',
      '%29',
      '"*"',
      '%2B',
      ',',
      
      '-',
      '%2F',
      '%7B',
      '%7C',
      '%7D',
      '%7E',
      '%5B',
      // '%5C',
      '%5D',
      // '%5E',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '%3A',
      ';',
      '%3C',
      '%3D',
      '%3E',
      '%3F',
      '%40',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      '-',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
     '%A3',
      '%A4',
      '%A5',
      '%A7',
      '%BF',
      'A',
      'A',
      'A',
      'C',
     'E',
     'E',
      'N',
      'O',
      'O',
      'U',
      'B',
      'a',
        'a',  'a',  'a',
      'e',
      'e',
      
      'i',
      'n',
      'o',
           'o',
      'o',

      'u',
      'u',
      '%80',
      'A',
      'O','o'
    ]);
    // for (let i = 0; i < caracteresIso.value.length; i++) {
  //  //console.log('dsd');
    // }
    // const taille = data.split('').length;

    caracteres.value.forEach((string, index) => {
       if (data.includes(string) && data !='?'&& data !='/'  ) {
        data = this.replaceAll(data, string, caracteresIso.value[index]);
      } 
    });
   
    return data;
  };


  
  correctVerifMessage = (data) => {
    const caracteres = ref([
       'ê',
      'Ê',
      'ă',
      'â',
      'Ă',
      'Â',
      '!',
      '«',
      '#',
      '&',
      '"`"',
      '"("',
      '")"',
      '"*"',
      '"+"',
      ',',
      '-',
      '/',
      '{',
      '"|"',
      '}',
      '~',
      // '`[`',
      // '',
      // ']',
      ':',
      ';',
      '<',
      '=',
      '>',
      '?',
      '@',
      '-',
      '£',
      '€',
      '¥',
      '§',
      '¿',
      'Ä',
      'Å',
      'Æ',
      'Ç',
      'È',
      'É',
      'Ñ',
      'Ö',
      'Ø',
      'Ü',
      'ß',
      'à',
      'ä',
      'å',
      'æ',
      'è',
      'é',
      'ì',
      'ñ',
      'ò',
      'ö',
      'ø',
      'ù',
      'Ü',
      '€',
      'À',
      'Ô',
      'ô'
    ]);

    const caracteresIso = ref([
     
      'e',
      'E',
      'a',
      'a',  
      'A',
      'A',
      '%21',
      '%22',
      '#',
      '%26',
      '%27',
      '%28',
      '%29',
      '"*"',
      '%2B',
      ',',
      '-',
      '%2F',
      '%7B',
      '%7C',
      '%7D',
      '%7E',
      // '%5B',
      // '%5D',
      '%3A',
      ';',
      '%3C',
      '%3D',
      '%3E',
      '%3F',
      '%40',
      '-', 
      '%A3',
      '%A4',
      '%A5',
      '%A7',
      '%BF',
      'A',
      'A',
      'A',
      'C',
      'E',
      'E',
      'N',
      'O',
      'O',
      'U',
      'B',
      'a',
      'a',
      'a',
      'a',
      'e',
      'e',
      'i',
      'n',
      'o',
      'o',
      'o',
      'u',
      'u',
      '%80',
      'A',
      'O',
       'o'
    ]);
    //   //console.log(caracteres.value.length, caracteresIso.value.length);

    // for (var i = 0; i < caracteresIso.value.length; i++){
    //   //console.log(caracteres.value[i], caracteresIso.value[i]);
    // }
    caracteres.value.forEach((string, index) => {
       if (data.includes(string) && data !='?'&& data !='/'  ) {
        data = this.replaceAll(data, string, caracteresIso.value[index]);
      } 
    });
   
    return data;
  };
  replaceAll = (str, find, replace) => {
    // //console.log(str);
    if (!str.includes('?')) {
      
      return str.replace(new RegExp(find, 'g'), replace);
    } else { return str }
  }

  verifImage = (data, type) => {
      let retour = ref(true);
     var _URL = window.URL || window.webkitURL;

      var img = new Image();
      var objectUrl = _URL.createObjectURL(data);
      
      
      img.src = objectUrl;
 //icone ,log
    if (type == 0) {
       
      
     
       img.onload = function () {
      
        _URL.revokeObjectURL(objectUrl);
        if (this.width != this.height || this.width <= 96 || this.height < 96) {
      
            retour.value= false;
        }else{
             retour.value= true;
        }
      };


    }
    //Galerie service ...
    if (type == 1) {   
      
       img.onload = function () {
       
     console.log( this.width , this.height)
        _URL.revokeObjectURL(objectUrl);
        if ( this.width < 1050 || this.height <700) {
      
             retour.value= false;
        }else{
          
             retour.value= true;
        }
      };
      

    }
    return retour.value;
  
   }

};
 
 
