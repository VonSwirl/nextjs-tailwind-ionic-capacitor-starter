import dynamic from "next/dynamic";

const App = dynamic(() => import("../components/AppShell"), {
	ssr: false,
});

const Index = () => {
	return <App />;
};

export default Index;
