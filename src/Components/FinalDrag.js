import React from 'react';
import DualListBox from 'react-dual-listbox';
import './react-dual-listbox.scss'
const options = [
    { value: 'one', label: 'Travel' },
    { value: 'two', label: 'Rule Class' },
    { value: 'three', label: 'Policy Violations Reason' },
    { value: 'four', label: 'Travel Rule' },
    { value: 'five', label: 'Travel Vendor Exclusion' },
    { value: 'six', label: 'Travel Discount' },
    { value: 'seven', label: 'Contracts' },
];

export default class Widget extends React.Component {
    state = {
        selected: ['one'],
    };

    onChange = (selected) => {
        this.setState({ selected });
    };

    render() {
        const { selected } = this.state;

        return (
            <div className="container">
            <DualListBox
                options={options}
                selected={selected}
                onChange={this.onChange}
                canFilter
            />
            </div>
        );
    }
}