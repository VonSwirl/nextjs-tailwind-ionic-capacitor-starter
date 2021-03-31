// import { Health } from "@ionic-native/health";
import { Capacitor } from "@capacitor/core";
const isAvailable = Capacitor.isPluginAvailable("Health");

const ionicHealthPlugin = async () => {
	console.log("isAvailable txt");
	console.log({ isAvailable });

	// Health.isAvailable()
	// 	.then((available: boolean) => {
	// 		console.log(available);
	// 		Health.requestAuthorization([
	// 			"distance",
	// 			"nutrition", //read and write permissions
	// 			{
	// 				read: ["steps"], //read only permission
	// 				write: ["height", "weight"], //write only permission
	// 			},
	// 		])
	// 			.then((res) => console.log(res))
	// 			.catch((e) => console.log(e));
	// 	})
	// 	.catch((e) => console.log(e));

	return true;
};

export { ionicHealthPlugin };
