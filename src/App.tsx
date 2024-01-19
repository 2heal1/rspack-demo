import React from "react";
import Component from "./Component"; // <- these are remote modules,
import ComponentWithSharedFile from "./ComponentWithSharedFile";
import { de } from "date-fns/locale";

const App = () => (
	<article>
		<header>
			<h1>Rspack reemote 2</h1>
		</header>
		<Component locale={de} />
    <ComponentWithSharedFile />
	</article>
);
export default App;
