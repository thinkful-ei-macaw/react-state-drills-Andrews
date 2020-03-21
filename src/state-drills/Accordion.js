import React, { Component } from 'react'

class Accordion extends Component {

    static defaultProps = {
        sections: []
    }
    
    state = {
        currentTabIndex: null
    };
    
    handleButtonClick(index) {
        this.setState({ currentTabIndex: index })
    };

    render() {
        return (
            <ul>
                {this.props.sections.map( (section, index) => ( 
                <li key={index}>
                    <button
                    onClick={() => this.handleButtonClick(index)}
                    >
                    {section.title}
                    </button>
                    {index == this.state.currentTabIndex ? (<p>{section.content}</p>) : "" }
                    
                </li>))
                }
            </ul>
        )
    }
}

export default Accordion;