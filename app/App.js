import React from 'react';

class App extends React.Component {

	constructor(props){
		super(props);
	}
	render() {
		return (
                <div className="container">
                    <h1>React-seed with WebPack</h1>
                </div>
			)
	}
}
React.render(<App />, document.getElementById('app'));