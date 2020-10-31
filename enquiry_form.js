'use strict';

const e = React.createElement;

class EnquiryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {fullname: '', description: ''};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        fetch('https://form.speight.digital/api/enquiry-form', {
            method: 'POST',
            body: JSON.stringify(this.state)
        }).then(function (response) {
            return response.json();
        });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input name="fullname" type="text" value={this.state.fullname} onChange={this.handleInputChange}/>
                </label>
                <label>
                    Enquiry description:
                    <textarea name="description" value={this.state.description} onChange={this.handleInputChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }

}

const domContainer = document.querySelector('#enquiry_form_container');
ReactDOM.render(e(EnquiryForm), domContainer);