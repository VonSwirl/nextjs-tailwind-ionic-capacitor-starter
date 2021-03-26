sleep 1;
echo "";
echo "STARTING ANDROID";
echo "------------------";
echo "";
sleep 1;
echo "Checking for Android App:";
sleep 2;

if [ ! -d "android" ];
then
  echo "";
  echo "  --> No Android App Found. Try running...";
  echo "";
  echo "      npm run build:all";
else
  echo "  --> Android App Found";
  echo "";
  sleep 2;
  npx cap sync android && npx cap open android;
  echo "";
  echo "----";
  echo "ANDROID OPENED IN IDE";
  echo "----";

fi
sleep 1;
echo "";

