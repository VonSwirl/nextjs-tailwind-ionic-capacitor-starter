# Develop App on LAN so you can access it from mobile devices

LAN_ADDRESS="$(ifconfig | grep -A 1 "en0" | tail -1 | cut -d ' ' -f 2)";
PORT=3000;

if [[ $LAN_ADDRESS =~ ^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$ ]];
then
   npm run prestart && next dev -p {$PORT} -H ${LAN_ADDRESS};
else
   npm run prestart && npm run dev;
fi
