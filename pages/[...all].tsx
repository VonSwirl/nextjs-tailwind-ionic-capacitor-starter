import dynamic from "next/dynamic";

export default function Index() {
	const App = dynamic(() => import("../components/AppShell"), {
		ssr: false,
	});
	return <App />;
}
