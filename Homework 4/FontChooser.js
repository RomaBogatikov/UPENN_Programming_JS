class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = { hidden: true, bold: false, checked: false, size: this.props.size, color: 'black' };	
	}
	
	toggleHide() {
		this.setState( { hidden: !this.state.hidden } );
	}

	toggleCheck() {
		this.setState( { bold: !this.state.bold } );
		this.setState( { checked: !this.state.checked } );
	}

	fontSizeDecrease() {
		if (this.state.size > Number(this.props.min) + 1) {
			this.setState( { size: this.state.size - 1 } );
			this.setState( { color: 'black' } );
		}
		else if (this.state.size === Number(this.props.min) + 1) {
			this.setState( { size: Number(this.state.size) - 1} );
			this.setState( { color: 'red' } );
		}	
	}

	fontSizeIncrease() {
		if (this.state.size < Number(this.props.max) - 1) {
			this.setState( { size: Number(this.state.size) + 1 } );
			this.setState( { color: 'black' } );
		}
		else if (this.state.size === Number(this.props.max) - 1) {
			this.setState( { size: Number(this.state.size) + 1 } );
			this.setState( { color: 'red' } );
		}
	}

	doubleClick() {
		this.setState( { size: this.props.size } );
	}

	componentDidMount() {
		if (this.props.bold == 'true') {
			this.setState( { bold: true } );
			this.setState( { checked: true })
		}
		else
			this.setState( { bold: false } );
	}

    render() {
		var hidden = this.state.hidden ? true : false;
		var weight = this.state.bold ? 'bold' : 'normal';
		var size = Number(this.state.size);
		var checked = this.state.checked;
		var color = this.state.color;
	return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden={hidden} checked={checked} onChange={this.toggleCheck.bind(this)} />
	       <button id="decreaseButton" hidden={hidden} onClick={this.fontSizeDecrease.bind(this)}>-</button>
	       <span id="fontSizeSpan" hidden={hidden} onDoubleClick={this.doubleClick.bind(this)}>{size}</span>
	       <button id="increaseButton" hidden={hidden} onClick={this.fontSizeIncrease.bind(this)}>+</button>
	       <span id="textSpan" style={{fontWeight: weight, fontSize: size, color: color}} onClick={this.toggleHide.bind(this)}>{this.props.text}</span>
	       </div>
	);
    }
}

