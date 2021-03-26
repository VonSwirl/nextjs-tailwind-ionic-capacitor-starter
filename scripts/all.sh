
echo "\nINITIALISING PROJECT\n";


rebuildRequired=false;

sleep 1;
echo "\n---------------------";
echo "Installing ionic/cli";
echo "---------------------";
sleep 2;
npm install -g @ionic/cli;
sleep 2;
echo "\n-----------------------";
echo "Installing Dependencies";
echo "-----------------------";
sleep 2;
npm i;
echo "\n------------";
echo "Running Build";
echo "-------------";
sleep 2;
next build;
echo "\n-------------------------";
echo "Exporting Build Directory";
echo "-------------------------";
sleep 2;
npm run export;

echo "\nChecking for Android App:";
sleep 2;
if [ ! -d "android" ];
then
  echo "  --> No Android App Found, Adding Android to project";
  npx cap add android;
  rebuildRequired=true;
else
  echo "  --> Android App Found";
fi
sleep 3;

echo "\nChecking for IOS App:";
sleep 2;
if [ ! -d "ios" ];
then
  echo "  --> No IOS App Found, Adding IOS to project";
  npx cap add ios;
  rebuildRequired=true;
else
  echo "  --> IOS App Found";
fi
sleep 3;

if [ "$rebuildRequired" = true ]
then
  echo "\nRebuild Require?";
  sleep 1;
  echo "  --> Yes. Rebuilding now";
  sleep 3;
  next build &&
  npm run export &&
  npx cap copy;
  sleep 2; 
  echo "\nSyncing Capacitor Now...\n";
  sleep 2; 
  npx cap sync;
else
  echo "\nRebuild Require?";
  sleep 1;
  echo "  --> No. Syncing Capacitor Now...";
  sleep 3;
  npx cap copy &&
  npx cap sync;
fi

sleep 1;

echo "";
echo "---------------------";
echo "App Builds Successful";
echo "---------------------";
echo "";
echo "";
echo "COMMANDS:";
echo "----------------------------------------";
echo "Web:             npm run dev";
echo "";
echo "IOS:             npm run dev:ios";
echo "";
echo "Android:         npm run dev:android";
echo "";
echo "Web on Network:  npm run dev:network";
echo "----------------------------------------";
echo "";

