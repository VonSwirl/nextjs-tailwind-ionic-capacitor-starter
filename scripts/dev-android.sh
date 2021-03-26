# npm i && npm run build && npm run export && npx cap copy && npx cap sync && npx cap open android

# npm run build then # Build latest

# npm i then # Install deps

if [ ! -d "out" ];
then
  echo "\nCannot Locate our dir, Triggering initial build steps \n";  
  npm install -g @ionic/cli then
  npm i; then
  npm run build; then
  npm run export; then
  npx cap add ios; then
  npx cap add android; then
  npm run build; then
  npm run export; then
  npx cap copy; then
fi



if [ -d "android" ];
then
  echo "\nAndroid App Found...\n";

  npm run build then # Build latest
  npm run export # 

else
  echo "\nCannot Locate Android App...\n";

  # ls -l	#list with long format - show permissions
fi