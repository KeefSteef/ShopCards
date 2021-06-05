import React,{Component} from 'react';

class Layout extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;
