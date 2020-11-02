'use strict';

const e = React.createElement;

class EnquiryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {fullname: '', email: '', description: ''};
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
        fetch('https://form.speight.digital/api/enquiry', {
            method: 'POST',
            body: JSON.stringify(this.state)
        }).then(function (response) {
            return response.json();
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Make an enquiry</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Name:
                            <input name="fullname" type="text" value={this.state.fullname}
                                   onChange={this.handleInputChange} className="form-control"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Email:
                            <input name="email" type="text" value={this.state.email}
                                   onChange={this.handleInputChange} className="form-control"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Enquiry description:
                            <textarea name="description" value={this.state.description}
                                      onChange={this.handleInputChange}
                                      className="form-control" rows="5"/>
                        </label>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary g-recaptcha"
                           data-sitekey="6Lfpm9kZAAAAAPt0XLRCgHFU7pEUNV2HrTdizhmd" data-callback='onSubmit'
                           data-action='submit'/>
                </form>
            </div>
        );
    }

}

const domContainer = document.querySelector('#enquiry_form_container');
ReactDOM.render(e(EnquiryForm), domContainer);