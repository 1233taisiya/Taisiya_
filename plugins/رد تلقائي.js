//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^ميزوهارا$/i.test(m.text)) { 
     responses = [ 
 '*عيون ميزوهارا*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  
     ]; 
   }else if (/^اسيل|تيسيا$/i.test(m.text)) { 
     responses = [ 
'*افضل بنت❄️*'
     ]; 
 }else if (/^نوبارا$/i.test(m.text)) { 
     responses = [ 
'*شيخه فاسده*'
     ]; 
   }else if (/^هل تحبببت$/i.test(m.text)) { 
     responses = [ 
'*اااااا*'
   ]; 
   }else if (/^تحبني|يابوت $/i.test(m.text)) { 
     responses = [ 
'*مافيه بوت غيرك 🐦*',
'*ورع🤭*',
'*برااااااع 🔚*',
]; 
   }else if (/^تكرااااهناي؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*هممممممم*',  

     ]; 
   }else if (/^فلسطين$/i.test(m.text)) { 
     responses = [ 
'عاشششش تفهم'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*ها توكل*'
     ]; 
     }else if (/^عامننننن$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       'براااااااع',  

     ];
     }else if (/^وينه لبوت$/i.test(m.text)) { 
     responses = [ 
       'ها وش فيك معي؟',  

     ];
     }else if (/^ارثر|زاو فان$/i.test(m.text)) { 
     responses = [ 
       '*افضل شخص في العالم*',  

     ];
     }else if (/^اهوةلا$/i.test(m.text)) { 
     responses = [ 
       '*🙂*',  

     ]; 
     }else if (/^giwhj$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^hggh$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد🍁*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^Nezااuko$/i.test(m.text)) { 
     responses = [ 
       '*تانجاايرو☹️*',  
     ];
            }else if (/^جيت|هلا$/i.test(m.text)) { 
     responses = [ 
       'نورت',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
