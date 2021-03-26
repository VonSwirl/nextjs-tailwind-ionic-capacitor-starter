echo "\n Initialising Project \n";  

npm install -g @ionic/cli &&
npm i &&
npm run build &&
npm run export &&
npx cap add ios &&
npx cap add android &&
npm run build &&
npm run export &&
npx cap copy;
