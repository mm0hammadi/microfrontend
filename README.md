# Micro Frontend - React.js


اجرای برنامه : 

برای اجرا میتوانید پروژه ارسالی در پیوست را دانلود کرده و اکسترکت کنید. 
  برای اجرای هر پروژه ، ترمینال را به پروژه مورد نظر ببرید .

\microfrontEnd-Project\container> npm install   >  npm start  
  container > http://localhost:8080/     

\microfrontEnd-Project\batch>npm install  >  npm start
batch > http://localhost:8082/

\microfrontEnd-Project\card>npm install  >  npm start
card > http://localhost:8081/

\microfrontEnd-Project\auth>npm install  >  npm start
auth > http://localhost:8083/



- Connect multiple react apps to single parent app

    "build:card": "yarn workspace @microfrontends/card build",
    "build:container": "yarn workspace @microfrontends/container build",
    "build:batch": "yarn workspace @microfrontends/batch build",


