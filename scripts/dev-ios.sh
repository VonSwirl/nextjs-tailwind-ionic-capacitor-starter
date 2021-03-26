sleep 1;
echo "";
echo "STARTING IOS";
echo "------------------";
echo "";
sleep 1;
echo "Checking for IOS App:";
sleep 2;

if [ ! -d "ios" ];
then
  echo "";
  echo "  --> No IOS App Found. Try running...";
  echo "";
  echo "      npm run build:all";
else
  echo "  --> IOS App Found";
  echo "";
  sleep 2;
  npx cap sync ios && npx cap open ios;
  echo "";
  echo "----";
  echo "IOS OPENED IN IDE";
  echo "";
  echo "----";

fi
sleep 1;
echo "";