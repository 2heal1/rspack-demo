import React from "react";
import get from "lodash/get";

const Component = () => (
	<div id={'remote2-lazy-component'} style={{ border: "5px solid darkgreen" }}>
		<p>I'm a lazy Component exposed from remote2 !</p>
		<p>I'm lazy loaded by the app and lazy load another component myself.</p>
		<p>Using lodash in Remote: {get({'x':'lodash.get'},'x')}</p>
	</div>
);
export default Component;
