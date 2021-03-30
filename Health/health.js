import { Health } from '@ionic-native/health';

const health = async () => {
  // if (Health) {
  //   console.log('health is', JSON.stringify(Health));

  //   if (Health.isAuthorized()) {
  //     console.log('is Auth');
  //   } else {
  //     console.log('is NOT Auth');
  //   }
  // } else {
  //   console.log('health is NOT', { Health });
  // }

  Health.isAvailable()
    .then(available => {
      console.log(available);
      Health.requestAuthorization([
        'distance',
        'nutrition', //read and write permissions
        {
          read: ['steps'], //read only permission
          write: ['height', 'weight'], //write only permission
        },
      ])
        .then(res => console.log(res))
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));

  return true;
};

export { health };
