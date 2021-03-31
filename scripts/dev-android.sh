sleep 1;
echo "";
echo "STARTING ANDROID";
echo "----------------";
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
  echo "  --> Building and Syncing";
  echo "";
  sleep 2;
  # npx next build && npx next export &&
  npx cap sync android && npx cap open android;
  echo "";
  echo "----------------------";
  echo "ANDROID OPENED IN IDE";
  echo "----------------------";
  sleep 1;
  # Start server
  npm run dev
  echo "";
  echo "----------------------";
  echo "Starting Host Server";
  echo "----------------------";
  sleep 1;

fi
sleep 1;
echo "";

