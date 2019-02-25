import React, {Component} from 'react';

class Menu extends Component {

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <h3>{this.props.article.title}</h3>
                <button>button !</button>
            </div>
        );
    }
}

export default Menu;
